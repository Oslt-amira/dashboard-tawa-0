"use client";

import AnimatedBG from "@/components/auth/AnimatedBG";
import SignInCard from "@/components/auth/SignInCard";
import { SignUpSide } from "@/components/auth/SignUpSide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatedBG>
      <SignUpSide />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex md:w-1/2 w-screen h-screen items-center justify-center rounded-l-3xl shadow-md bg-background "
      >
        <SignInCard />
      </motion.div>
    </AnimatedBG>
  );
}
