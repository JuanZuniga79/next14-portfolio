import IEducation from "@/modules/about/types/IEducation";

const getEducationData = async (lang: string) =>
    lang === "en" ? en : es;

const en: IEducation[] = [
    {
        courseName: "Undergraduate in systems engineering",
        institutionName: "University of Magdalena",
        institutionLocation: "Santa Marta - Colombia",
        remote: false,
        startDate: "01-August-2019",
        endDate: "December-2025",
        description: [
            "I have developed skills in designing and building frontend and backend applications using various technologies and programming languages, applying modern software development architectures and techniques.",
            "I gained knowledge in parallelism and synchronization in low-level multiprocessing and multithreaded environments on POSIX systems.",
            "I have learned to design, implement, and maintain databases that adhere to the first three normal forms. Additionally, I have gained experience in designing and implementing data warehouses using models like the star schema.",
            "I have knowledge of various software development architectures, including MVC, N-tier, onion architecture, and microservices.",
            "My academic delay is primarily due to working throughout most of my studies, as taking on additional workloads would have been detrimental to my health.",
        ]
    },
    {
        courseName: "Java Backend development bootcamp",
        institutionName: "Alura Latam Oracle Next Education",
        institutionLocation: "Brazil",
        remote: true,
        startDate: "April-2023",
        endDate: "October-2023",
        description: [
            "I practiced and improved my development skills using Spring Boot with the Java programming language.",
            "I strengthened my knowledge in the implementation and management of MySQL databases.",
            "I expanded my experience and reinforced my knowledge in the application of agile methodologies."
        ]
    }
]

const es: IEducation[] = [
    {
        courseName: "Pregrado en Ingeniería de Sistemas",
        institutionName: "Universidad del Magdalena",
        institutionLocation: "Santa Marta - Colombia",
        remote: false,
        startDate: "01-Agosto-2019",
        endDate: "Diciembre-2025",
        description: [
            "He desarrollado habilidades en el diseño y creación de aplicaciones frontend y backend utilizando diversas tecnologías y lenguajes de programación, aplicando arquitecturas y técnicas modernas de desarrollo de software.",
            "Adquirí conocimientos sobre paralelismo y sincronización en entornos multiproceso y multihilo de bajo nivel en sistemas basados en POSIX.",
            "He aprendido a diseñar, implementar y mantener bases de datos cumpliendo las tres primeras formas normales. Además, he adquirido experiencia en el diseño e implementación de bodegas de datos utilizando modelos como el modelo estrella.",
            "Tengo conocimientos en diversas arquitecturas de desarrollo de software, incluyendo MVC, N capas, arquitectura en cebolla y microservicios.",
            "Mi retraso académico se debe principalmente a que he trabajado durante la mayor parte de mis estudios, ya que asumir cargas adicionales habría comprometido mi salud."
        ]
    },
    {
        courseName: "Bootcamp de desarrollo Backend en Java",
        institutionName: "Alura Latam Oracle Next Education",
        institutionLocation: "Brasil",
        remote: true,
        startDate: "Abril-2023",
        endDate: "Octubre-2023",
        description: [
            "Practiqué y mejoré mis habilidades en desarrollo utilizando Spring Boot con el lenguaje Java.",
            "Fortalecí mis conocimientos en la implementación y gestión de bases de datos con MySQL.",
            "Amplié mi experiencia y reforcé mis conocimientos en la aplicación de metodologías ágiles."
        ]
    }
]

export default getEducationData;