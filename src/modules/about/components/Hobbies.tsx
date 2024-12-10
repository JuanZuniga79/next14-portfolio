import Section from "@/core/components/Section";
import {MdOutlineGames} from "react-icons/md";
import Title from "@/core/components/Title";
import {getTranslations} from "next-intl/server";
import getHobbiesData from "@/modules/about/data/hobbies";

export default async function Hobbies(){

    const t = await getTranslations({namespace: "Hobbies"})
    const l = await getTranslations({namespace: "Configuration"})
    const data = await getHobbiesData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <MdOutlineGames size={32}/>
            </Title>
            <ul className='grid grid-cols-4 gap-5'>
                {data.map((item, index) => (
                    <li key={index} className='flex gap-2 p-4 shadow-inner shadow-slate-600 bg-transparent backdrop-blur-sm rounded-2xl select-none'>
                        <figure className='text-indigo-500'>
                            {item.icon}
                        </figure>
                        <div className='flex flex-col gap-y-2'>
                            <h5 className='uppercase font-semibold text-xl'>{item.name}</h5>
                            <p className='text-wrap whitespace-pre-wrap'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}