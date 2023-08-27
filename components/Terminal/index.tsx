import { ReactNode } from "react";
import styles from "./index.module.css";

export default function Terminal({
  variant = "default",
  off,
  children,
}: {
  variant?: "default" | "success" | "error";
  off?: boolean;
  children?: ReactNode;
}) {
  const getVariantClass = () => {
    if (variant === "success") {
      return styles.success;
    } else if (variant === "error") {
      return styles.error;
    }
    return "";
  };

  return (
    <div
      className={`${styles.monitor} ${
        off ? styles.collapse : ""
      } ${getVariantClass()}`}
    >
      <div className={styles.terminal}>{children}</div>
      <div className={styles.flicker}></div>
      <div className={styles.scanlines}></div>
      <div className={styles.noise}></div>
    </div>
  );
}
