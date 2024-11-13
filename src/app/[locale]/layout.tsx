import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {projectMetadata} from "@/core/data/ProjectMetadata";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import icon from "./favicon.ico";
import PageLayout from "@/core/layouts/PageLayout";
import Header from "@/core/components/one_use/Header";
import Sidebar from "@/core/components/one_use/Sidebar";
import MoreInfo from "@/core/components/one_use/MoreInfo";

export const metadata: Metadata = {
  title: projectMetadata.title,
  description: projectMetadata.description,
  icons: icon.src,
};

export default async function LocaleLayout( {children, params }: { children: React.ReactNode; params: {locale: string} }) {

  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)){
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
      <html lang={locale}>
        <body className={`antialiased flex justify-center w-dvw min-h-dvh dark:bg-[#212121] dark:text-white overflow-x-hidden overflow-y-auto text-white`}>
          <NextIntlClientProvider messages={messages}>
            <Sidebar>
              <MoreInfo/>
            </Sidebar>
            <PageLayout>
              {children}
            </PageLayout>
          </NextIntlClientProvider>
        </body>
      </html>
  );
};