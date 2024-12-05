'use client';
import {motion} from "framer-motion";

export default function TimelineNode({right}:{right: boolean}) {
    return (
        <div className='flex items-center'>
            {!right && (<figure className="w-12 h-0.5 bg-gray-600/40"/>)}
            <figure className="rounded-full bg-indigo-700/80 w-[20px] h-[20px] relative">
                <motion.div
                    className="absolute inset-0 rounded-full bg-white/80"
                    animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.2, 0, 0.2]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity
                    }}
                />
            </figure>
            {right && (<figure className="w-12 h-0.5 bg-gray-600/40"/>)}
        </div>
    )
}