import {getTranslations} from "next-intl/server";
import Section from "@/core/components/Section";
import Title from "@/core/components/Title";
import {MdWorkOutline} from "react-icons/md";
import TimelineContainer from "@/core/components/timeline/TimelineContainer";
import getExperienceData from "@/modules/about/data/experience";
import TimelineElement from "@/core/components/timeline/TimelineElement";

export default async function Experience() {

    const t = await getTranslations({namespace: "Experience"})
    const l = await getTranslations({namespace: "Configuration"})
    const data = await getExperienceData(l('lang'));

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