import { useEffect, useRef, useState } from "react";

function useResizeObserver(parentWidth) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef(null);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
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

  const handleResize = () => {
    const quantum = parentWidth / 6;

      if (dimensions.width < quantum) {
        console.log(1);
        targetRef.current.style.width = `${quantum}px`;
      } else if (dimensions.width < quantum * 2) {
        console.log(2);
        targetRef.current.style.width = `${quantum * 2}px`;
      } else if (dimensions.width < quantum * 3) {
        console.log(3);
        targetRef.current.style.width = `${quantum * 3}px`;
      } else if (dimensions.width < quantum * 4) {
        console.log(4);
        targetRef.current.style.width = `${quantum * 4}px`;
      } else if (dimensions.width < quantum * 5) {
        console.log(5);
        targetRef.current.style.width = `${quantum * 5}px`;
      } else if (dimensions.width < quantum * 6) {
        console.log(6);
        targetRef.current.style.width = `${quantum * 6}px`;
      } else {
        targetRef.current.style.width = `${quantum * 6}px`;
      }
    };

  const handleResizeStart = () => {
    clearTimeout(resizeTimeout.current);
  };

  const handleResizeEnd = () => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      handleResize();
    }, 100); // Adjust timeout duration as needed
  };

  useEffect(() => {
    if (parentWidth) {
      handleResize();
    }
  }, [parentWidth]);

  return [targetRef, dimensions, handleResizeStart, handleResizeEnd];
}

export default useResizeObserver;
