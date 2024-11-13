'use client';

import {motion} from "framer-motion";
import OrbitDot from "@/modules/home/components/hero/OrbitDot";
import SemiCircle from "@/modules/home/components/hero/SemiCircle";

export default function HeroProfile(){
    return (
        <motion.div
            className="w-fit place-self-end"
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: 0.3, duration: 0.8}}
        >
            <div className="w-fit h-fit relative flex items-center justify-center">
                {/* Círculos decorativos animados */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-[400px] h-[400px] rounded-full border-[1px] border-gray-200/20`}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 10 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                <OrbitDot duration={8} rotate={360}/>

                <OrbitDot duration={12} rotate={-360}/>

                <motion.div
                    className="absolute w-[24px] h-[2px] bg-white/20 left-[15%] top-2/3"
                    animate={{
                        width: ["0%", "100%", "0%"]
                    }}
                    transition={{duration: 3, repeat: Infinity}}
                />
                <motion.img
                    src="/images/profile.jpg"
                    alt="Developer Profile"
                    className="min-w-96 h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-full border-2 border-white/10 shadow-lg relative z-10"
                    whileHover={{scale: 1.02}}
                    transition={{type: "spring", stiffness: 300}}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/60 via-blue-500/60 to-purple-500/60 rounded-full blur-3xl"/>
            </div>
        </motion.div>
    )
}