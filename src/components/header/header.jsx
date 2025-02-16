import Logo from "../../assets/meowfix.png";
import styles from "./header.module.css";
import { useState } from "react";




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={Logo} alt="" />
      </div>


      <div className={`${styles.burger_menu} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  )
}

export default Header;
