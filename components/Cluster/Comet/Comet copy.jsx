import React from "react";
import useResizeObserver from "./useResizeObserver";

function Comet({parentWidth}) {
  const [targetRef, dimensions, handleResizeStart, handleResizeEnd] = useResizeObserver(parentWidth);


  return (
    <div
      ref={targetRef}
      className="comet"
      style={{
        gridColumn: "span 1",
        border: "1px solid #000",
        overflow: "auto",
        padding: "1rem",
        resize: "both", // Allow manual resizing
        minHeight: "100px", // Set a minimum height to prevent collapsing
      }}
      onMouseDown={handleResizeStart}
      onMouseUp={handleResizeEnd}
    >
      Comet Component
    </div>
  );
}

export default Comet;
