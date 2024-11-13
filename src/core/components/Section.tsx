import SectionBackground from "@/core/components/SectionsBackground";

export default function Section({children}:{children:React.ReactNode}){
    return (
        <section className="relative h-fit w-full flex flex-col items-center justify-center mt-24">
            <SectionBackground/>
            {children}
        </section>
    )
}