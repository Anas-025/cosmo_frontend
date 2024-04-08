import Icon from "../../components/custom/Icon/Icon";
import styles from "./Home.module.css";
import dashboard from "/public/icons/dashboard.svg";
import search from "/public/icons/search.svg";

function Nav({ setNavOpen }) {
  const handleOpenNavPane = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.nav} ${styles.accent_container}`} id="nav">
      <Icon src={search} />
      <span onClick={handleOpenNavPane}>
        <Icon src={dashboard} />
      </span>
    </nav>
  );
}

export default Nav;
