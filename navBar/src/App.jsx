import { useState } from "react";
import styles from "./App.module.scss";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { ContactUs } from "./Components/Pages/ContactUs";
import { Store } from "./Components/Pages/Store";
import { MobileNav } from "./Components/NavBar/MobileNav";


function App() {
  const [page, setPage] = useState("Home");
  const [mobileNav, setMobileNav] = useState(true)
  let currentPage = <Home />;
  switch (page) {
    case "Home":
      currentPage = <Home />;
      break;
    case "About":
      currentPage = <About />;
      break;
    case "Store":
      currentPage = <Store />;
      break;
    case "ContactUs":
      currentPage = <ContactUs />;
      break;
    default:
      currentPage = <Home />;
      break;
  }
  const handleClick = (page) => {
    setPage(page)
  }
  const handleMenu = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <>
      <div className={styles.container}>
        <NavBar handleMenu={handleMenu} handler={handleClick} />
        <MobileNav handler={handleClick} active={mobileNav} />
        {currentPage}
      </div>
    </>
  );
}

export default App;
