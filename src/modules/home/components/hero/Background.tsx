import {motion} from "framer-motion";

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
                {Array.from({length: 300}).map((_, i) => (
                    <div key={i} className="w-1 place-self-center h-1 bg-gray-500 rounded-full"></div>
                ))}
            </div>
        </div>
    )
}