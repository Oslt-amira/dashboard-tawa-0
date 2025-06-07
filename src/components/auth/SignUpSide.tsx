"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SignUpSide() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative hidden w-1/2 md:block"
    >
      <div className="  h-full w-full overflow-hidden px-10 py-24 text-white">
        <div className="flex h-full flex-col justify-between">
          {/* Welcome section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold mb-4">
              Welcome to Tawa Digitals
            </h2>
            <p className="text-lg max-w-sm mx-auto">
              For creators who want to grow, connect, and earn money doing what
              they love.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">🎯 Create Content</h3>
              <p className="text-sm opacity-80">
                Start with what you love. We support all formats.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">🚀 Grow Your Audience</h3>
              <p className="text-sm opacity-80">
                Use our tools to reach more fans and track success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">
                💸 Monetize Your Passion
              </h3>
              <p className="text-sm opacity-80">
                Get paid doing what you love through brand deals & more.
              </p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-sm text-white/60">
              Need help?{" "}
              <Link href="/faq" className="underline hover:text-white">
                Check our FAQ
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
