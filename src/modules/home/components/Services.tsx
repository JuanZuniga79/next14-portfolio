'use server';
import Section from "@/core/components/Section";
import {getTranslations} from "next-intl/server";
import Title from "@/core/components/Title";
import {FaDatabase, FaFigma, FaHtml5, FaServer} from "react-icons/fa6";
import Service from "@/modules/home/components/services/Service";
import {MdWorkOutline} from "react-icons/md";
import {TbApi, TbBrandKotlin} from "react-icons/tb";
import {SiFastapi, SiFlutter, SiMongodb, SiTauri, SiWebassembly} from "react-icons/si";

interface IServices{
    name: string;
    icon: React.ReactNode;
}

export default async function Services() {

    const services: IServices[] = [
        {name: "backend", icon: <FaServer size={28}/>},
        {name: "database", icon: <FaDatabase size={28}/> },
        {name: "frontend", icon: <FaHtml5 size={28}/> },
        {name: "api", icon: <TbApi size={28}/> },
        {name: "backendPrototype", icon: <SiFastapi size={28}/> },
        {name: "webAssembly", icon: <SiWebassembly size={28}/> },
        {name: "prototypeDesign", icon: <FaFigma size={28}/> },
        {name: "multiplatformMobile", icon: <SiFlutter size={28}/> },
        {name: "multiplatformDesktop", icon: <SiTauri size={28}/> },
        {name: "mobile", icon: <TbBrandKotlin size={28}/> },
        {name: "noSQL", icon: <SiMongodb size={28}/> },
    ]

    const t = await getTranslations({namespace: "Services"});

    return(
        <Section>
            <Title text={t('title')}>
                <MdWorkOutline size={32}/>
            </Title>
            <ul className="grid grid-cols-4 gap-10">
                {services.map((item, index) => (
                    <Service key={index} title={t(item.name.concat(".title"))} description={t(item.name.concat(".description"))}>
                        {item.icon}
                    </Service>
                ))}
            </ul>
        </Section>
    )
}