'use server';
import Hero from "@/modules/home/components/Hero";
import {getTranslations} from "next-intl/server";
import Services from "@/modules/home/components/Services";

export default async function HomeModule() {

    const t = await getTranslations({namespace: "HomePage"});

    return(
        <>
            <Hero titlePart1={t("hero.titlePart1")} titlePart2={t("hero.titlePart2")} description={t("hero.description")} />
            <Services/>
        </>
    )
}