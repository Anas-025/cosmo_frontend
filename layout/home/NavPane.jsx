import Icon from "../../components/custom/Icon/Icon";
import styles from "./Home.module.css";
import add from "/public/icons/add.svg";
import dashboard from "/public/icons/dashboard.svg";

const pages = [
  {
    title: "Comet",
    type: "shared",
  },
  {
    title: "Pulsar",
    type: "shared",
  },
  {
    title: "Comet",
    type: "private",
  },
  {
    title: "Comet",
    type: "private",
  },
];

function NavPane({ paneOpen }) {
  return (
    <div
      id="nav-panel"
      className={`${styles.accent_container} ${styles.nav_pane}`}
      style={{ display: paneOpen ? "block" : "none" }}
    >
      <div className="page_container">
        <div className={styles.header}>
          <div className={styles.title}>Shared</div>
          <Icon src={add} />
        </div>

        <div className={styles.page_list}>
          {pages.map((page, i) => {
            if (page.type === "private") return;
            return (
              <div className={styles.page} key={`shared-page-${i}`}>
                <Icon src={dashboard} hoverdisabled />
                <span className={styles.page_title}>{page.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="page_container">
        <div className={styles.header}>
          <div className={styles.title}>Private</div>
          <Icon src={add} />
        </div>

        <div className={styles.page_list}>
          {pages.map((page, i) => {
            if (page.type === "shared") return;
            return (
              <div className={styles.page} key={`private-page-${i}`}>
                <Icon src={dashboard} hoverdisabled />
                <span className={styles.page_title}>{page.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavPane;
