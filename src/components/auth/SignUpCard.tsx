"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Step1Account from "./Step1Account";
import Step2Details from "./Step2Details";
import Step3Profile from "./Step3Profile";
import StepProgress from "./StepProgress";
import { steps } from "./signupConfig";
import { Button } from "@/components/ui/button";

export default function SignUpCard({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"CREATOR" | "ADVISER" | null>(null);
  const router = useRouter();

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = () => router.push("/dashboard");

  const roleSelector = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-4"
    >
      <Image
        src="/Group 2.svg"
        alt="Main"
        width={180}
        height={180}
        unoptimized
      />
      <p className="text-muted-foreground text-sm text-center">
        Choose your path to get started.
      </p>
      <div className="flex gap-4 mt-4">
        <Button
          variant={role === "CREATOR" ? "default" : "outline"}
          className="px-6 py-2 rounded-xl"
          onClick={() => setRole("CREATOR")}
        >
          I&apos;m a Creator
        </Button>
        <Button
          variant={role === "ADVISER" ? "default" : "outline"}
          className="px-6 py-2 rounded-xl"
          onClick={() => setRole("ADVISER")}
        >
          I&apos;m an Adviser
        </Button>
      </div>
    </motion.div>
  );

  const adviserContent = (
    <motion.div
      key="adviser"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center space-y-6 py-10 px-6"
    >
      <h2 className="text-3xl font-extrabold text-black drop-shadow-sm">
        Launch Your UGC Campaign
      </h2>
      <p className="text-muted-foreground max-w-sm">
        Partner with the right creators and kickstart your user-generated
        content strategy in minutes.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Button
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl"
          onClick={() => router.push("/demo")}
        >
          Book a Free Demo
        </Button>
      </motion.div>
      <Button
        variant="link"
        className="text-sm underline text-stone-500"
        onClick={() => setRole(null)}
      >
        ← Back to Role Selection
      </Button>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center space-y-6"
    >
      {!role && roleSelector}

      {role === "CREATOR" && (
        <>
          <div className="flex items-center justify-center pt-2">
            <Image
              src="/Group 2.svg"
              alt="Main"
              width={200}
              height={200}
              unoptimized
            />
          </div>

          <StepProgress steps={steps} currentStep={step} />
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 h-full"
            >
              {step === 1 && <Step1Account onNext={nextStep} />}
              {step === 2 && (
                <Step2Details onNext={nextStep} onBack={prevStep} />
              )}
              {step === 3 && (
                <Step3Profile onBack={prevStep} onSubmit={handleSubmit} />
              )}
            </motion.div>
          </AnimatePresence>

          {step === 1 && (
            <div className="text-center text-sm text-muted-foreground dark:text-stone-600 mt-6">
              Already have an account?{" "}
              <button onClick={onBack} className="underline hover:text-primary">
                Sign in
              </button>
            </div>
          )}

          <div className="text-center mt-2">
            <Button
              variant="link"
              className="text-xs underline text-stone-500"
              onClick={() => setRole(null)}
            >
              ← Back to Role Selection
            </Button>
          </div>
        </>
      )}

      {role === "ADVISER" && adviserContent}
    </motion.div>
  );
}
