import Education from "@/modules/about/components/Education";
import Experience from "@/modules/about/components/Experience";
import Courses from "@/modules/about/components/Courses";

export default async function AboutModule() {
    return(
        <>
            <div className='mt-16'/>
            <Experience/>
            <Education/>
            <Courses />
        </>
    )
}