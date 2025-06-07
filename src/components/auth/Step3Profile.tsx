"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { creatorTypes, creatorGoals, mainPlatforms } from "./signupConfig";
import NavButton from "./NavButton";

export default function Step3Profile({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: () => void;
}) {
  const triggerClass = "w-full";

  return (
    <div className="space-y-4">
      <div className="space-y-1 w-full">
        <Select>
          <SelectTrigger id="creatorType" className={triggerClass}>
            <SelectValue placeholder="What type of content do you create?" />
          </SelectTrigger>
          <SelectContent>
            {creatorTypes.map((type) => (
              <SelectItem
                key={type}
                value={type.toLowerCase().replace(/\s+/g, "_")}
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1 w-full">
        <Select>
          <SelectTrigger id="goals" className={triggerClass}>
            <SelectValue placeholder="What are your goals?" />
          </SelectTrigger>
          <SelectContent>
            {creatorGoals.map((goal) => (
              <SelectItem
                key={goal}
                value={goal.toLowerCase().replace(/\s+/g, "_")}
              >
                {goal}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1 w-full">
        <Select>
          <SelectTrigger id="platforms" className={triggerClass}>
            <SelectValue placeholder="Main platform" />
          </SelectTrigger>
          <SelectContent>
            {mainPlatforms.map((platform) => (
              <SelectItem
                key={platform}
                value={platform.toLowerCase().replace(/\s+/g, "_")}
              >
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between pt-4">
        <NavButton onClick={onBack} variant="back" />
        <NavButton onClick={onSubmit} variant="submit" />
      </div>
    </div>
  );
}
