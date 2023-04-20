import React from "react";
import styles from "./Nav.module.css"
import { Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/home">
        <button>Logo</button>
      </Link>


      <button>Link</button>
      <button>Link</button>
      <button>Link</button>
      <button>Avatar</button>
    </nav>
  );
};

export default Nav;
