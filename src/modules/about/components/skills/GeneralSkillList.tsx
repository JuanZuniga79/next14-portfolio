import { ISkillCategory } from "@/modules/about/types/ISkills";
import getProjectsAmount from "@/modules/projects/adapter/getProjectsAmount";
import { getTranslations } from "next-intl/server";

export default async function GeneralSkillList({
  skills,
  title,
}: ISkillCategory) {
  const t = await getTranslations({ namespace: "Skills" });

  return (
    <ul className="list-inside list-none px-2 flex flex-col items-center gap-y-4 py-4 w-[420px]">
      <h2 className="text-2xl font-semibold">{t(title)}</h2>
      {skills.map((skill, index) => (
        <li
          key={index}
          className="grid grid-cols-5 items-center justify-center pt-4 pb-6 px-6
          w-[80%] rounded-xl bg-slate-800 hover:bg-slate-700/50 gap-x-2 cursor-pointer"
        >
          <section className="col-span-4 flex flex-col gap-y-1 py-0">
            <div className="flex items-center gap-x-2">
              <figure className="">{skill.icon}</figure>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="text-sm font-light capitalize pl-10">
              <p>
                {t("from")}: {` ${skill.from}`}
              </p>
              <p>
                {t("versions")}: {` ${skill.versions}`}
              </p>
              <p className="text-wrap">
                {t("usage")}:
                {skill.usage.map((usage, index) => (
                  <span key={index} className="">
                    {" "}
                    {usage}{" "}
                  </span>
                ))}
              </p>
            </div>
          </section>
          <p className="text-wrap text-center gap-0 text-sm">
              <span className="text-3xl">{getProjectsAmount(skill.name)}</span> {t("projects")}
          </p>
        </li>
      ))}
    </ul>
  );
}
