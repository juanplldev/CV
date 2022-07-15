// Dependencies
import React from "react";
// Files
import styles from "./Languages.module.css";


function Languages()
{
    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>LANGUAGES</h3>
            
            <ul>
                <li>
                    <span className={styles.Language}>Spanish: </span>
                    <span className={styles.Level}>Native</span>
                </li>
                
                <li>
                    <span className={styles.Language}>English: </span>
                    <span className={styles.Level}>Intermediate</span>
                </li>
            </ul>
        </div>
    );
};


export default Languages;