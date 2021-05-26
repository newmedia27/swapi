import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./header.module.sass";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">Logo</Link>
      <div>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/people"
        >
          people
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/planets"
        >
          planets
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/films"
        >
          films
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/species"
        >
          species
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/vehicles"
        >
          vehicles
        </NavLink>
        <NavLink
          className={styles.navLink}
          activeClassName={styles.navLink_active}
          to="/list/starships"
        >
          starships
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
