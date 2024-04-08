import { useState } from "react";
import { useMe } from "../../context/me";
import styles from "./Home.module.css";
import Main from "./Main";
import Nav from "./Nav";
import NavPane from "./NavPane";
import Ribbon from "./Ribbon";

// add seperate providers specific to layout here
function HomePageLayout({ children }) {
  const [paneOpen, setNavOpen] = useState(true);
  const data = useMe();

  console.log(data.user);

  return (
    <>
      <Ribbon />
      <div className={styles.container}>
        <Nav setNavOpen={setNavOpen} />
        <NavPane paneOpen={paneOpen} />
        <Main>{children}</Main>
      </div>
    </>
  );
}

export default HomePageLayout;
