"use client";

import Lottie from "lottie-react";
import welcomeAnimation from "../public/lottie/welcome.json"; // adjust path if needed

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#f5f3f0] flex items-center justify-center z-50">
      <div className="w-60 h-60">
        <Lottie
          animationData={welcomeAnimation}
          loop={false} // play only once
          autoplay
          onComplete={onComplete} // call onComplete when animation finishes
        />
      </div>
    </div>
  );
}
