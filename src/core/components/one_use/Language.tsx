'use client'
import {IoLanguage} from "react-icons/io5";
import Link from "next/link";
import {useTranslations} from "use-intl";
import {useEffect, useState} from "react";

export default function Language(){

    const t = useTranslations("Configuration");
    const [url, _] = useState(window.location.href.substring(window.location.href.lastIndexOf("/") + 1));
    const [path, setPath] = useState("");

    useEffect(() => {
        if(url.length > 2){
            setPath(url)
        }
    }, [url]);

    return(
        <figure className="absolute top-5 right-5 p-3 rounded-full bg-slate-800 hover:bg-slate-900">
            <Link href={(t("lang") === "en" ? "/es/" : "/en/").concat(path)}>
                <IoLanguage size={20}/>
            </Link>
        </figure>
    )
}