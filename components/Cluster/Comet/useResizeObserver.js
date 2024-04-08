import { useEffect, useRef, useState } from "react";

function useResizeObserver(parentWidth) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef(null);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.target.style.width.replace("px", "");
        const height = entry.target.style.height.replace("px", "");
        setDimensions({ width, height });
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleResizeStart = () => {
    clearTimeout(resizeTimeout.current);
  };

  const handleResizeEnd = () => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      console.log("Resize ended");
    }, 100); // Adjust timeout duration as needed
  };

  // useEffect(() => {
  //   if (parentWidth) {
  //     handleResize();
  //   }
  // }, [parentWidth]);

  return [targetRef, dimensions, handleResizeStart, handleResizeEnd];
}

export default useResizeObserver;
