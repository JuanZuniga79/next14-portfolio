export default interface ITimelineData {
    icon: JSX.Element | string;
    name: string
    institutionName: string;
    startDate: string;
    endDate: string | null;
    skills: string[];
    description: string;
    url: string;
}