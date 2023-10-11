import { useState } from "react";
import styles from "./Tooltip.module.css";
const Tooltip = ({ position, children }) => {
  //Toggler to make the tooltip visible
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* changing the toggler on hover */}
      <div
        className="relative transition-all"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {/* if visible, showing the tooltip conditionaly */}
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
