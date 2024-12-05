import {ReactNode} from "react";

export default async function TimelineContainer({children}:{children: ReactNode}) {
    return(
        <section className="w-full h-fit flex items-center justify-center relative">
            <div className="w-[90%] h-fit flex flex-col gap-10">
                {children}
            </div>
        </section>
    )
}