import { useEffect, useRef, useState } from "react";
import { getPureWidth } from "../../utils";
import styles from "./Cluster.module.css";
import Comet from "./Comet/Comet";

function Cluster() {
  const mainRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (mainRef.current) {
      const width = getPureWidth(mainRef.current);
      setWidth(width);
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => {
    //   const width = getPureWidth(mainRef.current);
      const bodyWidth = document.body.clientWidth;
      const navWidth = document.querySelector("#nav").clientWidth;
      const navPanelWidth = document.querySelector("#nav-panel").clientWidth;
      const width = bodyWidth - navWidth - navPanelWidth;

      mainRef.current.style.width = `${width}px`;
      setWidth(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={styles.main} ref={mainRef}>
      <Comet parentWidth={width} />
    </main>
  );
}

export default Cluster;
