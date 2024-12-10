import Section from "@/core/components/Section";
import Title from "@/core/components/Title";
import {getTranslations} from "next-intl/server";
import {FaSchool} from "react-icons/fa6";
import TimelineContainer from "@/core/components/timeline/TimelineContainer";
import getEducationData from "@/modules/education/data/education";
import TimelineElement from "@/core/components/timeline/TimelineElement";
import {IoSchoolSharp} from "react-icons/io5";
import {HiMiniAcademicCap} from "react-icons/hi2";
import Image from "next/image";

export default async function Education() {

    const t = await getTranslations({namespace: "Education"});
    const l = await getTranslations({namespace: "Configuration"})
    const data = await getEducationData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <HiMiniAcademicCap/>
            </Title>
            <TimelineContainer>
                {data.map((item, index) => (
                    <TimelineElement key={index} right={index % 2 === 0} element={item} />
                ))}
            </TimelineContainer>
        </Section>
    )
}