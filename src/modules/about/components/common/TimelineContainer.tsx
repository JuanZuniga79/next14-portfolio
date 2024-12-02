import {ReactNode} from "react";

export default async function TimelineContainer({children}:{children: ReactNode}) {
    return(
        <section className="w-full h-fit flex items-center justify-center relative">
            <div className="w-[80%] h-fit">
                {children}
            </div>
            <figure className='absolute w-1 h-full rounded-full bg-indigo-800/80 -z-10'/>
        </section>
    )
}