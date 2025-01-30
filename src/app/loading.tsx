import { CSSProperties, ReactElement } from "react";
import styles from "./loading.module.css";

export default function Loading(): ReactElement {
  const count: number = 16;
  const duration: number = 2;

  const delays: number[] = Array(count)
    .fill(0)
    .map((x, i): number => -1 * (duration / count) * Math.floor(i / 2));

  return (
    <div className={styles.loading}>
      <div className={styles.particles}>
        {delays.map(
          (delay, index): ReactElement => (
            <i
              key={index}
              className={styles.particle}
              style={
                {
                  "--delay": delay + "s",
                  "--angle": (360 / count) * index + "deg",
                } as CSSProperties
              }
            ></i>
          ),
        )}
      </div>
    </div>
  );
}
