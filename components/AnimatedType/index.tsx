"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "./index.module.css";
import { useState } from "react";

const disableCursorAfterAnimationDelay = 1000;

export default function AnimatedType({
  message,
  delay = 2000,
  speed = 75,
}: {
  message: string;
  delay?: number;
  speed?: 75 | 90;
}) {
  const [disableCursor, setDisableCursor] = useState(false);

  return (
    <div className={`font-mono ${disableCursor ? styles.disableCursor : ""}`}>
      <TypeAnimation
        sequence={[
          delay,
          message,
          () => {
            setTimeout(
              () => setDisableCursor(true),
              disableCursorAfterAnimationDelay
            );
          },
        ]}
        wrapper="p"
        cursor={false}
        repeat={0}
        speed={speed}
        style={{
          whiteSpace: "pre-line",
          display: "block",
          fontFamily: "monospace",
        }}
        className={styles.cursor}
      />
    </div>
  );
}
