import Section from "@/core/components/Section";
import { generalSkills } from "../data/skills";
import GeneralSkillList from "./skills/GeneralSkillList";
import Title from "@/core/components/Title";
import { getTranslations } from "next-intl/server";
import { MdWorkspacePremium } from "react-icons/md";

export default async function GeneralSkills() {
    const t = await getTranslations({namespace: "Skills"});
  return (
    <Section>
      <Title text={t("title")}>
        <MdWorkspacePremium size={32} />
      </Title>
      <ul className="list-inside list-none flex items-center justify-evenly w-full gap-x-10">
        {generalSkills.map((category, index) => (
          <GeneralSkillList
            key={index}
            skills={category.skills}
            title={category.title}
          />
        ))}
      </ul>
    </Section>
  );
}
