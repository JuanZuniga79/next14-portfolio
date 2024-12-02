import IServices from "@/modules/home/types/IServices";
import {FaBook, FaDatabase, FaFigma, FaHtml5, FaServer} from "react-icons/fa6";
import {TbApi, TbBrandKotlin} from "react-icons/tb";
import {SiFastapi, SiFlutter, SiMongodb, SiTauri, SiWebassembly} from "react-icons/si";

const getServiceData = async (lang: string) => lang === "en" ? en : es;

const en: IServices[] = [
    {
        title: "Backend Development",
        description: "Developing powerful, secure, and scalable server-side applications using C#, Java, Kotlin, and TypeScript to support seamless data processing and user experiences.",
        icon: <FaServer size={28} />
    },
    {
        title: "Database Design",
        description: "Architecting efficient, scalable, and optimized SQL database structures to ensure fast, reliable data storage and retrieval across applications.",
        icon: <FaDatabase size={28} />
    },
    {
        title: "Frontend Development",
        description: "Creating dynamic, responsive, and visually engaging user interfaces focused on usability and cross-platform compatibility.",
        icon: <FaHtml5 size={28} />
    },
    {
        title: "API Development",
        description: "Designing and implementing RESTful APIs and microservices with high reliability, facilitating seamless communication across systems.",
        icon: <TbApi size={28} />
    },
    {
        title: "Backend Prototypes Design",
        description: "Creating innovative backend prototypes to test and validate business logic and architecture for MVP server-side applications.",
        icon: <SiFastapi size={28} />
    },
    {
        title: "Web Assembly Development",
        description: "Building high-performance, cross-platform modules with WebAssembly, enabling faster, near-native performance in web applications.",
        icon: <SiWebassembly size={28} />
    },
    {
        title: "Prototypes Design",
        description: "Designing digital prototypes to model and simulate systems and interfaces, enhancing user experience and usability.",
        icon: <FaFigma size={28} />
    },
    {
        title: "Multiplatform Mobile Development",
        description: "Developing mobile applications that work seamlessly on both iOS and Android, maximizing reach and user engagement.",
        icon: <SiFlutter size={28} />
    },
    {
        title: "Multiplatform Desktop Development",
        description: "Creating cross-platform desktop applications for Windows, macOS, and Linux, ensuring accessibility across various devices.",
        icon: <SiTauri size={28} />
    },
    {
        title: "Native Mobile Development",
        description: "Building high-performance native applications for Android and iOS, utilizing platform-specific features to enhance user experience.",
        icon: <TbBrandKotlin size={28} />
    },
    {
        title: "NoSQL Databases Design",
        description: "Designing NoSQL databases optimized for scalable, flexible data models that meet modern application demands.",
        icon: <SiMongodb size={28} />
    },
];

const es: IServices[] = [
    {
        title: "Desarrollo Backend",
        description: "Desarrollando aplicaciones del lado del servidor poderosas, seguras y escalables con C#, Java, Kotlin y TypeScript para soportar un procesamiento de datos fluido y experiencias de usuario sin problemas.",
        icon: <FaServer size={28} />
    },
    {
        title: "Diseño de Bases de Datos",
        description: "Arquitecturando estructuras de bases de datos SQL eficientes, escalables y optimizadas para garantizar almacenamiento y recuperación de datos rápidos y confiables.",
        icon: <FaDatabase size={28} />
    },
    {
        title: "Desarrollo Frontend",
        description: "Creando interfaces de usuario dinámicas, receptivas y visualmente atractivas centradas en la usabilidad y la compatibilidad multiplataforma.",
        icon: <FaHtml5 size={28} />
    },
    {
        title: "Desarrollo de APIs",
        description: "Diseñando e implementando APIs RESTful y microservicios de alta confiabilidad, facilitando la comunicación fluida entre sistemas.",
        icon: <TbApi size={28} />
    },
    {
        title: "Diseño de Prototipos Backend",
        description: "Creando prototipos backend innovadores para probar y validar la lógica de negocio y la arquitectura de aplicaciones MVP del lado del servidor.",
        icon: <SiFastapi size={28} />
    },
    {
        title: "Desarrollo con WebAssembly",
        description: "Construyendo módulos de alto rendimiento y multiplataforma con WebAssembly, permitiendo un rendimiento casi nativo en aplicaciones web.",
        icon: <SiWebassembly size={28} />
    },
    {
        title: "Diseño de Prototipos",
        description: "Diseñando prototipos digitales para modelar y simular sistemas e interfaces, mejorando la experiencia y la usabilidad del usuario.",
        icon: <FaFigma size={28} />
    },
    {
        title: "Desarrollo Móvil Multiplataforma",
        description: "Desarrollando aplicaciones móviles que funcionan perfectamente en iOS y Android, maximizando el alcance y el compromiso de los usuarios.",
        icon: <SiFlutter size={28} />
    },
    {
        title: "Desarrollo de Escritorio Multiplataforma",
        description: "Creando aplicaciones de escritorio multiplataforma para Windows, macOS y Linux, garantizando accesibilidad en varios dispositivos.",
        icon: <SiTauri size={28} />
    },
    {
        title: "Desarrollo Móvil Nativo",
        description: "Construyendo aplicaciones nativas de alto rendimiento para Android e iOS, utilizando características específicas de la plataforma para mejorar la experiencia del usuario.",
        icon: <TbBrandKotlin size={28} />
    },
    {
        title: "Diseño de Bases de Datos NoSQL",
        description: "Diseñando bases de datos NoSQL optimizadas para modelos de datos escalables y flexibles que satisfacen las demandas de aplicaciones modernas.",
        icon: <SiMongodb size={28} />
    }
];

export default getServiceData;