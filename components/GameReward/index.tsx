"use client";

import colors from "tailwindcss/colors";
import { useEffect, useState } from "react";
import { useReward } from "react-rewards";

export interface GameRewardProps {
  start?: boolean;
  loop?: boolean;
}

export default function GameReward({ start, loop }: GameRewardProps) {
  const { reward, isAnimating } = useReward("gameReward", "confetti", {
    position: "absolute",
    lifetime: 750,
    spread: 360,
    elementCount: 150,
    decay: 0.97,
    colors: [
      colors.indigo[600],
      colors.blue[600],
      colors.cyan[600],
      colors.teal[600],
      colors.emerald[600],
      colors.yellow[300],
    ],
  });

  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (start && !isAnimating) {
      if (fired && !loop) return;
      reward();
      setFired(true);
    }
  }, [isAnimating, start, reward, fired, loop]);

  return <span id="gameReward" />;
}
