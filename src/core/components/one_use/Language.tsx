'use client';
import {IoLanguage} from "react-icons/io5";
import Link from "next/link";
import {useTranslations} from "use-intl";

export default function Language() {

    const t = useTranslations("Configuration");

    return(
        <figure className="absolute top-5 right-5 p-3 rounded-full bg-slate-800 hover:bg-slate-900">
            <Link href={t("lang") === "en" ? "/es" : "/en"}>
                <IoLanguage size={20}/>
            </Link>
        </figure>
    )
}