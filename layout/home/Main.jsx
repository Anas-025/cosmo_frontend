import Image from "next/image";
import Icon from "../../components/custom/Icon/Icon";
import styles from "./Main.module.css";
import addPage from "/public/icons/add_page.svg";
import options from "/public/icons/options.svg";
import refresh from "/public/icons/refresh.svg";

function Main({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header} id="main-header">
        <div className={styles.topBar}>
          <div className={styles.title}>
            pulsar
            <Icon src={options} hoverdisabled />
          </div>
          <div className={styles.actions}>
            <button className={`${styles.action} ${styles.add_page}`}>
              <Image src={addPage} alt="refresh" />
            </button>
            <button className={`${styles.action} ${styles.refresh}`}>
              <Image src={refresh} alt="refresh" />
            </button>
            <button className={`${styles.action} ${styles.share}`}>
              Share
            </button>
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.avatar}>A</div>
          <div className={styles.author_name}>Anas</div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Main;
