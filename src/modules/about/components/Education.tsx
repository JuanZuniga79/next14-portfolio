import Section from "@/core/components/Section";
import Title from "@/core/components/Title";
import {getTranslations} from "next-intl/server";
import {FaSchool} from "react-icons/fa6";
import TimelineContainer from "@/modules/about/components/common/TimelineContainer";
import getEducationData from "@/modules/about/data/Education";
import TimelineElement from "@/modules/about/components/common/TimelineElement";
import {IoSchoolSharp} from "react-icons/io5";
import {HiMiniAcademicCap} from "react-icons/hi2";

export default async function Education() {

    const t = await getTranslations({namespace: "Education"});
    const l = await getTranslations({namespace: "Configuration"})
    const i = await getTranslations({namespace: "Info"});
    const data = await getEducationData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <HiMiniAcademicCap/>
            </Title>
            <TimelineContainer>
                {data.map((item, index) => (
                    <TimelineElement key={index} right={index % 2 === 0} link={item.certificateUrl}>
                        <div className={`absolute top-4 right-4 rounded-xl px-4 py-0.5
                            ${item.endDate !== null ? 'bg-green-700' : 'bg-indigo-700'}`}>
                            {item.endDate !== null ?
                                (<span className='text-green-300'>{i('done')}</span>)
                                :
                                (<span className="text-indigo-300">{i('undone')}</span>)}
                        </div>
                        <div className="w-full h-fit flex items-center gap-x-3">
                            <figure className="text-indigo-400 bg-slate-800 p-1.5 rounded-xl">
                                {item.icon}
                            </figure>
                            <div className='flex flex-col'>
                                <h5 className='capitalize text-xl'>
                                    {item.courseName}
                                </h5>
                                <span className="capitalize pl-3.5 text-base">{item.institutionName}</span>
                            </div>
                        </div>
                        <div className="w-[90%] mt-4 justify-self-end px-1.5">
                            <p>
                                {item.description}.
                            </p>
                            <p>
                                {item.startDate} {'>'} {item.endDate || '??'}
                            </p>
                            <ul className='flex items-center justify-start flex-wrap gap-y-3 gap-x-1 mt-10'>
                                {item.skills.map((item, index) => (
                                    <li key={index} className='bg-slate-700 px-3 py-1 rounded-2xl'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TimelineElement>
                ))}
            </TimelineContainer>
        </Section>
    )
}