"use client";
import { motion } from "framer-motion";

export default function AnimatedBG({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex h-screen w-full overflow-hidden"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "linear-gradient(-60deg, #ff66c4, #5170ff, #ff66c4)",
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.div>
  );
}
