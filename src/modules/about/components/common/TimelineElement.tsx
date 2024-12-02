import TimelineNode from "@/modules/about/components/common/TimelineNode";

interface Props{
    right: boolean;
    icon: React.ReactNode;
    children:React.ReactNode;
}

export default async function TimelineElement({right, children, icon}:Props) {
    return(
        <div className={`w-full h-fit items-center flex p-2 gap-[10px] ${right && 'justify-end'} relative`}>
            {right && <TimelineNode>{icon}</TimelineNode>}
            <div className={`2xl:w-[574px] h-fit border-slate-700/60 border-2 
                p-2 rounded-xl backdrop-blur-sm bg-opacity-10`}>
                {children}
            </div>
            {!right && <TimelineNode>{icon}</TimelineNode>}
        </div>
    )
}