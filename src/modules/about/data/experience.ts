import ITimelineData from "@/core/types/ITimelineData";

const getExperienceData = async (lang: string) => lang === "en" ? en : es;

const en: ITimelineData[] = [
    {
        icon: "https://www.igdsas.com/src/assets/IGD.png",
        name: "Fullstack Developer Junior",
        url: "https://www.igdsas.com/",
        institutionName: "IGD S.A.S",
        description: "At IGD, we develop ERP software solutions designed to optimize business management.",
        startDate: "January 2021",
        endDate: "January 2024",
        skills: [
            "Python", "FastAPI", "Javascript", "Typescript", "C#", "ASP.NET Core", "React", "Tailwindcss", "SQL"
        ]
    },
    {
        icon: "https://www.igdsas.com/src/assets/IGD.png",
        name: "Fullstack Developer SemiSenior",
        url: "https://www.igdsas.com/",
        institutionName: "IGD S.A.S",
        description: "At IGD, we develop ERP software solutions designed to optimize business management.",
        startDate: "February 2024",
        endDate: null,
        skills: [
            "Typescript", "Tailwindcss", "React", "Next.js", "C#", "ASP.NET Core", "SQL"
        ]
    }
]

const es: ITimelineData[] = [
    {
        icon: "https://www.igdsas.com/src/assets/IGD.png",
        name: "Desarrollador Fullstack Junior",
        url: "https://www.igdsas.com/",
        institutionName: "IGD S.A.S",
        description: "En IGD, desarrollamos soluciones de software ERP diseñadas para optimizar la gestión empresarial.",
        startDate: "Enero 2021",
        endDate: "Enero 2024",
        skills: en[0].skills
    },
    {
        icon: "https://www.igdsas.com/src/assets/IGD.png",
        name: "Desarrollador Fullstack SemiSenior",
        url: "https://www.igdsas.com/",
        institutionName: "IGD S.A.S",
        description: "En IGD, desarrollamos soluciones de software ERP diseñadas para optimizar la gestión empresarial.",
        startDate: "Febrero 2024",
        endDate: null,
        skills: en[1].skills
    }
]

export default getExperienceData;