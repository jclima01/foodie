import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/home">
        <button>Logo</button>
      </Link>
      <SearchBar />

      <Link to="/addRecipe">
        <button>Crea tu receta</button>
      </Link>

      <button>Avatar</button>
    </nav>
  );
};

export default Nav;
