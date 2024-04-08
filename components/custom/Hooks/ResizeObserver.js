import { useEffect, useRef, useState } from "react";

function useResizeObserver() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef(null);

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
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return [targetRef, dimensions];
}

export default useResizeObserver;
