'use client'
import {motion} from "framer-motion";


export default function Title({ text, children }: { text: string, children: React.ReactNode }) {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0 -top-36 left-0">
                <svg className="w-full h-full">
                    <motion.path
                        d="M0,100 Q200,200 400,100 Q600,0 800,100"
                        stroke="url(#gradient-blue)"
                        strokeWidth="2"
                        fill="none"
                        initial={{pathLength: 0, opacity: 0}}
                        animate={{pathLength: 1, opacity: 1}}
                        transition={{duration: 2, repeat: Infinity, repeatType: "loop"}}
                    />
                    <motion.path
                        d="M0,300 Q200,100 400,300 Q600,500 800,300"
                        stroke="url(#gradient-green)"
                        strokeWidth="2"
                        fill="none"
                        initial={{pathLength: 0, opacity: 0}}
                        animate={{pathLength: 1, opacity: 1}}
                        transition={{duration: 2, delay: 1, repeat: Infinity, repeatType: "loop"}}
                    />
                    <defs>
                        <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)"/>
                            <stop offset="50%" stopColor="rgba(99, 102, 241, 1)"/>
                            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)"/>
                            <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite"/>
                            <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite"/>
                        </linearGradient>
                        <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(16, 185, 129, 0)"/>
                            <stop offset="50%" stopColor="rgba(16, 185, 129, 1)"/>
                            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)"/>
                            <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite"/>
                            <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="flex items-center gap-4 mb-24"
            >
                <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <span className="text-3xl">{children}</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20"
                        initial={{x: '-100%'}}
                        animate={{x: '100%'}}
                        transition={{duration: 2, repeat: Infinity, ease: "linear"}}
                    />
                </div>
                <h2 className="text-5xl font-bold tracking-tight text-white">{text}</h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
            </motion.div>
        </div>
    )
}