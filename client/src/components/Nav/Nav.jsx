import React from "react";
import styles from "./Nav.module.css"
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <button>Logo</button>
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>

      <button>Link</button>
      <button>Link</button>
      <button>Link</button>
      <button>Avatar</button>
    </nav>
  );
};

export default Nav;
