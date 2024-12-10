import TimelineNode from "@/core/components/timeline/TimelineNode";
import Link from "next/link";
import TimelineStatus from "@/core/components/timeline/TimelineStatus";
import ITimelineData from "@/modules/about/types/ITimelineData";
import Image from "next/image";
import {FaCalendarAlt} from "react-icons/fa";

interface Props{
    right: boolean;
    element: ITimelineData
}

export default async function TimelineElement({right, element}:Props) {

    return(
        <div className={`w-full h-fit items-center flex p-2 ${right && 'justify-end'} relative`}>
            {right && <TimelineNode right={right} />}
            <Link href={element.url} target="_blank"
                  className={`2xl:w-1/2 h-fit border-slate-700/60 border-2 bg-slate-700 hover:bg-slate-600 
                    cursor-pointer hover:border-slate-600/60 hover:backdrop-blur-sm hover:bg-opacity-10 p-6 
                    rounded-3xl backdrop-blur-sm bg-opacity-10 relative flex gap-x-4`}>
                <TimelineStatus endDate={element.endDate}/>
                <div className="text-indigo-402 bg-slate-800 p-1.5 rounded-xl w-fit h-fit">
                    {typeof (element.icon) === 'string' ?
                        (<Image src={element.icon} alt="Card icon" width={32} height={32} />)
                        :
                        (<figure>{element.icon}</figure>)}
                </div>
                <div className="w-full h-fit flex flex-col gap-x-4">
                    <div className='flex flex-col'>
                        <h4 className='capitalize text-xl'>{element.name}</h4>
                        <span className="capitalize text-base">{element.institutionName}</span>
                    </div>
                    <div className="mt-4">
                        <p>
                            {element.description}.
                        </p>
                        <div className='flex items-center gap-x-2'>
                            <figure className='text-indigo-400'>
                                <FaCalendarAlt size={22}/>
                            </figure>
                            <p>{element.startDate} - {element.endDate || '??'}</p>
                        </div>
                        <ul className='flex items-center justify-start flex-wrap gap-y-3 gap-x-1 mt-10'>
                            {element.skills.map((item, index) => (
                                <li key={index} className='bg-slate-700 px-3 py-1 rounded-2xl'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
            {!right && <TimelineNode right={right}/>}
        </div>
    )
}