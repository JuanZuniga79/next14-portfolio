import {getTranslations} from "next-intl/server";
import Section from "@/core/components/Section";
import Title from "@/core/components/Title";
import {MdWorkOutline} from "react-icons/md";
import TimelineContainer from "@/modules/about/components/common/TimelineContainer";
import TimelineElement from "@/modules/about/components/common/TimelineElement";
import getCoursesData from "@/modules/about/data/courses";

export default async function Courses() {

    const t = await getTranslations({namespace: "Courses"})
    const l = await getTranslations({namespace: "Configuration"})
    const data = await getCoursesData(l('lang'));

    return(
        <Section>
            <Title text={t('title')}>
                <MdWorkOutline size={32}/>
            </Title>
            <TimelineContainer>
                {data.map((item, index) => (
                    <TimelineElement key={index} right={index % 2 === 0} element={item} />
                ))}
            </TimelineContainer>
        </Section>
    )
}