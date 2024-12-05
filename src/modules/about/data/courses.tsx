import ITimelineData from "@/modules/about/types/ITimelineData";
import {FaMeta} from "react-icons/fa6";
import {SiCoursera} from "react-icons/si";

const getCoursesData = async (lang: string) => lang === "en" ? en : es;

const en: ITimelineData[] = [
    {
        name: "Meta Android Developer Professional Certificate",
        institutionName: "Coursera - Meta",
        description: "Launch your career as an Android app developer. \nBuild job-ready skills for an in-demand career and earn a credential from Meta. \nNo degree or prior experience required to get started.",
        startDate: "2024",
        endDate: null,
        icon: <FaMeta size={22}/>,
        url: "https://www.coursera.org/programs/mcxg7/professional-certificates/meta-android-developer",
        skills: ["Kotlin", "Git & Github", "Figma", "UX & UI", "Android Studio", "React.js", "React Native", "English", "Linux"]
    },
    {
        name: ".NET FullStack Developer",
        institutionName: "Coursera - Board Infinity",
        description: "Build Fullstack webapp with .NET technologies. Master the intricacies of .NET core, React's frontend capabilities, and ASP.NET backend development to design and deploy dynamic, scalable web applications.",
        startDate: "2024",
        endDate: null,
        url: "https://www.coursera.org/programs/mcxg7/specializations/dot-net-fullstack",
        icon: <SiCoursera size={22} />,
        skills: ["C#", "ASP.NET Core", "React", "HTML5", "CSS3", "Databases", "English"]
    },
    {
        name: 'IBM Back-End Development',
        institutionName: "Coursera - IBM",
        description: "Prepare for a career as a back-end developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 6 months.",
        startDate: "2025",
        endDate: null,
        icon: <SiCoursera size={22}/>,
        url: "https://www.coursera.org/programs/mcxg7/professional-certificates/ibm-backend-development",
        skills: ["Software Engineering", "Linux", "Bash", "Git & Github", "Python", "Data Science & AI", "Flask", "SQL",
            "Databases", "Docker", "Kubernetes", "OpenShift", "Microservices", "Serverless", "Security", "DevOps"]
    }
]

const es: ITimelineData[] = [
    {
        name: "Desarrollador Android Certificado Profesional de Meta",
        institutionName: en[0].institutionName,
        description: "Inicie su carrera como desarrollador de aplicaciones para Android. Desarrolle habilidades listas para el trabajo para una carrera en demanda y obtenga una credencial de Meta. No se requiere título ni experiencia previa para comenzar.",
        startDate: en[0].startDate,
        endDate: en[0].endDate,
        icon: en[0].icon,
        url: en[0].url,
        skills: en[0].skills
    },
    {
        name: "Desarrollador Fullstack .NET",
        institutionName: en[1].institutionName,
        description: en[1].description,
        startDate: en[1].startDate,
        endDate: en[1].endDate,
        url: en[1].url,
        icon: en[1].icon,
        skills: en[1].skills
    },
    {
        name: "Desarrollador Backend IBM",
        institutionName: en[2].institutionName,
        description: 'Prepárese para una carrera como desarrollador back-end. Obtenga las habilidades demandadas y la experiencia práctica para prepararse para el trabajo en menos de 6 meses.',
        startDate: en[2].startDate,
        endDate: en[2].endDate,
        icon: en[2].icon,
        url: en[2].url,
        skills: en[2].skills
    }
]

export default getCoursesData;
