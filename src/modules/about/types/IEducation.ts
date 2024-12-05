import {ReactNode} from "react";

export default interface IEducation {
    icon: JSX.Element;
    courseName: string
    institutionName: string;
    startDate: string;
    endDate: string | null;
    skills: string[];
    description: string;
    certificateUrl: string;
}