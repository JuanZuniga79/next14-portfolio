'use client';
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

export default function SectionBackground() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    },[])

    return (
        <>
            {isClient && (
                <div className="absolute inset-0 -z-10">
                    {Array.from({length: 50}).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{scale: 0, rotate: 0}}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="w-4 h-4 border border-gray-700 transform rotate-45"/>
                        </motion.div>
                    ))}
                </div>
            )}
        </>
    )
}