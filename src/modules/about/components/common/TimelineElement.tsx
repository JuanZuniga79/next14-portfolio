import TimelineNode from "@/modules/about/components/common/TimelineNode";
import Link from "next/link";

interface Props{
    right: boolean;
    children: React.ReactNode;
    link: string
}

export default async function TimelineElement({right, children, link}:Props) {

    return(
        <div className={`w-full h-fit items-center flex p-2 ${right && 'justify-end'} relative`}>
            {right && <TimelineNode right={right} />}
            <Link href={link} target="_blank"
                  className={`2xl:w-1/2 h-fit border-slate-700/60 border-2 bg-slate-700 hover:bg-slate-600 
                    cursor-pointer hover:border-slate-600/60 hover:backdrop-blur-sm hover:bg-opacity-10 p-6 
                    rounded-3xl backdrop-blur-sm bg-opacity-10 relative`}>
                {children}
            </Link>
            {!right && <TimelineNode right={right}/>}
        </div>
    )
}