'use client';

import {motion} from "framer-motion";

export default function OrbitDot ({duration, rotate}:{duration: number, rotate: number}){
    return (
        <motion.div
            className="absolute w-[500px] h-[500px]"
            animate={{rotate: rotate}}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <motion.div
                className="w-5 h-5 bg-sky-400 bg-opacity-10 border-[1px] border-sky-600 rounded-full shadow-inner shadow-indigo-600 absolute"
                style={{
                    top: '3%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    )
}