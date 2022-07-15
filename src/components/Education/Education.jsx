// Dependencies
import React from "react";
// Files
import styles from "./Education.module.css";


function Education()
{
    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>EDUCATION</h3>
            
            <ul>
                <li>
                    <h4>
                        <a href="https://www.soyhenry.com">Henry Bootcamp</a>
                    </h4>
                    <h4>Full Stack Web Developer</h4>
                    <h5>2021 - 2022</h5>
                </li>
                
                <li>
                    <h4>
                        <a href="https://edutin.com">Edutin Academy</a>
                    </h4>
                    <h4>Some IT related courses</h4>
                    <h5>2021 - 2022</h5>
                </li>
                
                <li>
                    <h4>
                        <a href="http://www.escuelaraggio.edu.ar">Raggio Technical School</a>
                    </h4>
                    <h4>Master Builder</h4>
                    <h5>2015 - 2020</h5>
                </li>
            </ul>
        </div>
    );
};


export default Education;