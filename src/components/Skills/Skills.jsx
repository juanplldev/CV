// Dependencies
import React from "react";
// Files
import styles from "./Skills.module.css";


function Skills()
{
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>MAIN SKILLS</h2>
            
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Git</li>
            </ul>
        </div>
    );
};


export default Skills;