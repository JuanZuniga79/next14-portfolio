import Experience from "@/modules/about/components/Experience";
import Hobbies from "@/modules/about/components/Hobbies";
import GeneralSkills from "./components/GeneralSkills";

export default async function AboutModule() {
    return(
        <>
            <Experience/>
            <GeneralSkills/>
            <Hobbies/>
        </>
    )
}