'use client';

import {motion} from "framer-motion";

export default function SemiCircle(){
    return (
        <motion.div
            className="absolute w-full h-[260px] border-[1px] border-gray-200/10 top-1/2 semi-circle"
            animate={{
                rotateX: [0, 10, 0]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
            }}
        />
    )
}