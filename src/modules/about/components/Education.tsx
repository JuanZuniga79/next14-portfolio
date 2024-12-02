import Section from "@/core/components/Section";
import Title from "@/core/components/Title";
import {getTranslations} from "next-intl/server";
import {FaSchool} from "react-icons/fa6";
import TimelineContainer from "@/modules/about/components/common/TimelineContainer";
import getEducationData from "@/modules/about/data/Education";
import TimelineElement from "@/modules/about/components/common/TimelineElement";
import {IoSchoolSharp} from "react-icons/io5";

export default async function Education() {

    const t = await getTranslations({namespace: "Education"});
    const l = await getTranslations({namespace: "Configuration"})
    const data = await getEducationData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <FaSchool/>
            </Title>
            <TimelineContainer>
                {data.map((item, index) => (
                    <TimelineElement key={index} right={index%2===0}
                                     icon={<IoSchoolSharp size={24} className="text-white"/>}>
                        <h4 className="text-lg font-semibold text-indigo-400 capitalize">{item.courseName}</h4>
                        <h5 className="font-semibold">{item.institutionName}</h5>
                        <h6 className="text-sm font-semibold">{item.institutionLocation}</h6>
                        <p className="text-sm">{item.startDate} - {item.endDate}</p>
                        <ul className="text-sm list-disc pl-5">
                            {item.description.map((item, index) => (
                                <li key={index}>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </TimelineElement>
                ))}
            </TimelineContainer>
        </Section>
    )
}