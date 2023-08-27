"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "./index.module.css";

export default function AnimatedType({
  message,
  delay = 2000,
  speed = 75,
}: {
  message: string;
  delay?: number;
  speed?: 75 | 90;
}) {
  return (
    <div className="font-mono">
      <TypeAnimation
        sequence={[delay, message, () => {}]}
        wrapper="p"
        cursor={false}
        repeat={0}
        speed={speed}
        style={{ whiteSpace: "pre-line", display: "block" }}
        className={styles.type}
      />
    </div>
  );
}
