import { useEffect, useRef, useState } from "react";
import styles from "./Cluster.module.css";
import Comet from "./Comet/Comet";

function Cluster() {
  const mainRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    const navWidth = document.querySelector("#nav").clientWidth;
    const navPanelWidth = document.querySelector("#nav-panel").clientWidth;
    const mainHeader = document.querySelector("#main-header");
    const ribbon = document.querySelector("#ribbon");
    const width = window.innerWidth - navWidth - navPanelWidth;
    const height =
      window.innerHeight - mainHeader.clientHeight - ribbon.clientHeight;

    setWidth(width);
    setHeight(height);
  };

  useEffect(() => {
    if (mainRef.current) {
      handleResize();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className={styles.main}
      ref={mainRef}
      style={{ width: width - 20 + "px", height: height - 10 + "px"}}
    >
      <Comet parentWidth={width} />
    </main>
  );
}

export default Cluster;
