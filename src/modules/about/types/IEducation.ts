export default interface IEducation {
    courseName: string
    institutionName: string;
    institutionLocation: string;
    startDate: string;
    endDate: string;
    remote: boolean
    description: string[];
    certificateUrl?: string;
}