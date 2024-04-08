import Image from "next/image";
import Icon from "../../components/custom/Icon/Icon";
import styles from "./Home.module.css";
import add from "/public/icons/add.svg";
import cancel from "/public/icons/cancel.svg";
import dashboard from "/public/icons/dashboard.svg";

const tabs = [
  {
    title: "comet",
    type: "dashboard",
  },
  {
    title: "pulsar",
    type: "dashboard",
  },
  {
    title: "comet",
    type: "dashboard",
  },
  {
    title: "comet",
    type: "dashboard",
  },
];

const active = "pulsar";

function Ribbon() {
  return (
    <>
      <div className={styles.ribbon} id="ribbon">
        {tabs.map((tab, i) => {
          return (
            <span
              key={`tab-${i}`}
              className={`${styles.tab} ${
                active === tab.title && styles.active
              }`}
            >
              <Icon src={dashboard} hoverdisabled />
              <div className={styles.title}>{tab.title}</div>
              <Icon src={cancel} color="bg-700" />
            </span>
          );
        })}
        <div className={styles.add}>
          <Image src={add} alt="add" />
        </div>
      </div>
    </>
  );
}

export default Ribbon;
