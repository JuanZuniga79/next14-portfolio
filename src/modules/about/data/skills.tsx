import { TbBrandCSharp, TbBrandKotlin } from "react-icons/tb";
import { ISkillCategory } from "../types/ISkills";
import { SiTypescript } from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";

export const generalSkills: ISkillCategory[] = [
    {title: "pl", skills: [
        {name: "CSharp", usage: ["Backend", "FullStack"], from: "2021", versions: "10/11/12/13", 
            icon: <TbBrandCSharp size={32} className="text-indigo-600"/>},
        {name: "Typescript", usage: ["Frontend", "FullStack"], from: "2020", versions: "4/5", 
            icon: <SiTypescript size={32} className="text-blue-600"/>},
        {name: "Java", usage: ["Backend"], from: "2021", versions: "11/17/21",
            icon: <FaJava size={32} className="text-orange-600"/>},
        {name: "Python", usage: ["Backend", "Frontend"], from: "2019", versions: "3.9/10/11",
            icon: <FaPython size={32} className="text-green-600"/>},
        {name: "Kotlin", usage: ["Backend"], from: "2023", versions: "1.9/2",
            icon: <TbBrandKotlin size={32} className="text-purple-600"/>}
    ]},
];