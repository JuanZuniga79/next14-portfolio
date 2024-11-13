import {motion} from "framer-motion";

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
                {Array.from({length: 300}).map((_, i) => (
                    <div key={i} className="w-1 place-self-center h-1 bg-gray-500 rounded-full"></div>
                ))}
            </div>
            <motion.div
                className="absolute top-40 left-36 w-full h-full"
            >
                <svg className="w-full h-full opacity-20">
                    <path
                        d="M0,200 Q400,50 800,300"
                        stroke="white"
                        strokeWidth="1"
                        fill="none"
                    />
                </svg>
                <motion.div
                    className="absolute top-32 z-10 left-80 w-8 h-8 bg-sky-400 shadow-inner shadow-indigo-600 bg-opacity-10 backdrop-blur-sm border-2 border-sky-600 rounded-full"
                    animate={{
                        translateX: [0, 460],
                        translateY: [1, 50, 150],
                        rotate: [0, 180, 360],
                        opacity: [1, 0.8, 1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                    }}
                />
            </motion.div>
        </div>
    )
}