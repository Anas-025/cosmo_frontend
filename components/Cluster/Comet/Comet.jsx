import React from "react";
import Chart from "../../Chart/Chart";
import Icon from "../../custom/Icon/Icon";
import styles from "./Comet.module.css";
import useResizeObserver from "./useResizeObserver";
import options from "/public/icons/options.svg";

function Comet({ parentWidth }) {
  const [targetRef, dimensions, handleResizeStart, handleResizeEnd] =
    useResizeObserver(parentWidth);

  return (
    <div
      ref={targetRef}
      className={styles.comet}
      style={{
        width: "500px",
        overflow: "auto",
        minHeight: "100px", // Set a minimum height to prevent collapsing
        flexBasis: `${dimensions.width}px`,
      }}
      onMouseDown={handleResizeStart}
      onMouseUp={handleResizeEnd}
    >
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.title}>Population vs Cities</div>
          <div className={styles.actions}>
            <span className={styles.options}>
              <Icon src={options} />
            </span>
          </div>
        </div>
        <div className={styles.utilities}></div>
      </div>

      <div className={styles.chart_container}>
        <div className={styles.chart}>
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Comet;
