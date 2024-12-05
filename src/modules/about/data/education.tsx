import ITimelineData from "@/modules/about/types/ITimelineData";
import {IoSchoolSharp} from "react-icons/io5";
import {LiaSchoolSolid} from "react-icons/lia";

const getEducationData = async (lang: string) =>
    lang === "en" ? en : es;

const en: ITimelineData[] = [
    {
        icon: <IoSchoolSharp size={32}/>,
        name: "Undergraduate in systems engineering",
        institutionName: "University of Magdalena",
        startDate: "August 2019",
        endDate: null,
        url: "https://www.unimagdalena.edu.co/",
        description: 'Program accredited for high quality by the Ministry of Education',
        skills: [
            "Algorithms",
            "Data Structures",
            "Database Design",
            "OOP",
            "Software Architecture",
            "Concurrency",
            "Artificial Intelligence",
            "Networking",
            "Web Development",
            "Microservices"
        ]
    },
    {
        icon: <LiaSchoolSolid size={32}/>,
        name: "Java Backend development bootcamp",
        institutionName: "Alura Latam Oracle Next Education",
        startDate: "April 2023",
        endDate: "October 2023",
        url: 'https://app.aluracursos.com/program/certificate/04e0e6e8-97b9-4234-841a-917e612d11ca?lang',
        description: 'Alura ONE (Oracle Next Education), Program provided in collaboration with Oracle',
        skills: [
            "Backend Development", "Java", "React", "SQL", "Agile", "API Rest", "Spring Boot 3"
        ]
    }
]

const es: ITimelineData[] = [
    {
        icon: en[0].icon,
        name: "Pregrado en Ingeniería de Sistemas",
        institutionName: "Universidad del Magdalena",
        startDate: "Agosto 2019",
        endDate: null,
        url: en[0].url,
        description: 'Programa acreditado de alta calidad por el Ministerio de Educación',
        skills: en[0].skills
    },
    {
        icon: en[1].icon,
        name: "Bootcamp de Desarrollo Backend en Java",
        institutionName: "Alura Latam Oracle Next Education",
        startDate: "Abril 2023",
        endDate: "Octubre 2023",
        url: en[1].url,
        description: 'Alura ONE (Oracle Next Education), Programa ofrecido en colaboración con Oracle',
        skills: en[1].skills
    }
];


export default getEducationData;