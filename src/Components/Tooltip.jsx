import { Children, useState } from "react";
import styles from "./Tooltip.module.css";
const Tooltip = ({ position, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className="relative transition-all"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <>
            <div
              className={
                position === "top"
                  ? `${styles.top} ${styles.tooltip}`
                  : "hidden"
              }
            >
              I am {position} Tooltip
            </div>
            <div
              className={
                position === "bottom"
                  ? `${styles.bottom} ${styles.tooltip}`
                  : "hidden"
              }
            >
              I am {position} Tooltip
            </div>
            <div
              className={
                position === "left"
                  ? `${styles.left} ${styles.tooltip}`
                  : "hidden"
              }
            >
              I am {position} Tooltip
            </div>
            <div
              className={
                position === "right"
                  ? `${styles.right} ${styles.tooltip}`
                  : "hidden"
              }
            >
              I am {position} Tooltip
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tooltip;
// ${position}-[calc(-100px-50px)]
