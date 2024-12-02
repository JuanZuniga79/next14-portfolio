'use server';
import Section from "@/core/components/Section";
import {getTranslations} from "next-intl/server";
import Title from "@/core/components/Title";
import {FaDatabase, FaFigma, FaHtml5, FaServer} from "react-icons/fa6";
import Service from "@/modules/home/components/services/Service";
import {MdWorkOutline} from "react-icons/md";
import {TbApi, TbBrandKotlin} from "react-icons/tb";
import {SiFastapi, SiFlutter, SiMongodb, SiTauri, SiWebassembly} from "react-icons/si";
import getServiceData from "@/modules/home/data/ServicesData";
import {useTranslations} from "use-intl";

interface IServices{
    name: string;
    icon: React.ReactNode;
}

export default async function Services() {

    const t = await getTranslations({namespace: "Services"});
    const l = await getTranslations({namespace: "Configuration"});
    const data = await getServiceData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <MdWorkOutline size={32}/>
            </Title>
            <ul className="grid grid-cols-4 gap-10">
                {data.map((item, index) => (
                    <Service key={index} title={item.title} description={item.description}>
                        {item.icon}
                    </Service>
                ))}
            </ul>
        </Section>
    )
}