'use client';
import {RxCornerBottomLeft, RxCornerTopRight} from "react-icons/rx";
import {FaInfo} from "react-icons/fa";
import {useTranslations} from "use-intl";
import {ReactNode} from "react";
import {VscGithub} from "react-icons/vsc";
import Link from "next/link";
import {FaLinkedinIn} from "react-icons/fa6";
import Language from "@/core/components/one_use/Language";

interface IMoreInfo{
    element: string,
    icon: ReactNode,
    url: string,
}

const moreInfo: IMoreInfo[] =[
    {element: "github", icon: <VscGithub size={24}/>, url:"https://github.com/JuanZuniga79"},
    {element: "linkedin", icon: <FaLinkedinIn size={24}/>, url: "https://www.linkedin.com/in/zunigajuan7/"}
]

export default function MoreInfo() {

    const t = useTranslations("Sidebar");

    return(
        <section className="w-full h-full px-10 py-20 flex flex-col gap-10">
            <Language/>
            <div className="flex gap-5 items-center">
                <div className="p-3 rounded-xl relative">
                    <RxCornerTopRight size={24} className="absolute top-0 right-0"/>
                    <figure className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 to-80% rounded-xl">
                        <FaInfo size={20} />
                    </figure>
                    <RxCornerBottomLeft size={24} className="absolute bottom-0 left-0"/>
                </div>
                <p className="text-wrap text-4xl font-medium text-center capitalize">
                    {t("title")}
                </p>
            </div>
            <ul className="flex flex-col gap-4">
                {moreInfo.map((item, i) => (
                    <li key={i}>
                        <Link
                            href={item.url} target="_blank" rel="noopener noreferrer"
                            className="p-3 gap-2 grid text-white grid-cols-12 bg-slate-800 hover:bg-slate-900 items-center rounded-xl cursor-pointer">
                            <figure className="col-span-2 p-2 bg-slate-700 flex justify-center rounded-xl">
                                {item.icon}
                            </figure>
                            <div className="col-span-10 flex flex-col items-center justify-center">
                                <p className="uppercase text-lg font-medium">{item.element}</p>
                                <span className="capitalize text-sm font-light">{t(item.element)}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}