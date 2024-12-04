import {motion} from "framer-motion"

export default function HeroTitle({part1, part2}:{part1:string, part2:string}) {
    return (
          <motion.h1
            className="text-8xl font-medium text-white text-justify relative uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative">
              {part1}
            </span>
            <br />
            <span className="font-serif italic">{part2}</span>
          </motion.h1>
    )
}