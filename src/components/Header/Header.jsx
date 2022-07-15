// Dependencies
import React from "react";
// Files
import profileImg from "../../img/Profile Photo.jpeg";
import styles from "./Header.module.css";


function Header()
{
    return (
        <div className={styles.Container}>
            <img src={profileImg} alt="" />
            <h2>Juan Pablo Llorente</h2>
            <h4>Full Stack Web Developer</h4>
        </div>
    );
};


export default Header;