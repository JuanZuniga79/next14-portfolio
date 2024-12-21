export default interface ISkill {
    name: string;
    icon: React.ReactNode;
    versions: string;
    usage: string[]
    from: string;
}

export interface ISkillCategory{
    title: string;
    skills: ISkill[];
}