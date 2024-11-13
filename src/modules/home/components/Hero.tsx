"use client";
import { motion } from "framer-motion";
import Background from "@/modules/home/components/hero/Background";
import HeroProfile from "@/modules/home/components/hero/HeroProfile";
import HeroTitle from "./hero/HeroTitle";

interface Props{
  titlePart1: string;
  titlePart2: string;
  description:string;
}

export default function Hero({titlePart1, titlePart2, description}: Props): JSX.Element {
  return (
      <section className="relative h-dvh flex items-center justify-center pt-20 overflow-hidden">
        <Background />
        <div className="flex mt-12 justify-start gap-5 relative w-[70%] z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <HeroTitle part1={titlePart1} part2={titlePart2} />
          <motion.div
            className="mt-8 leading-relaxed text-center text-white relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-center whitespace-break-spaces text-base">
              {description}
            </p>
            <motion.div
              className="absolute -left-4 top-1/2 w-1 h-20 bg-gradient-to-b from-sky-600/60 to-transparent"
              animate={{
                height: ["0%", "100%"],
                y: [0, 20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
        <HeroProfile />
      </div>
    </section>
  );
}
