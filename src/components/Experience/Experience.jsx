// Dependencies
import React from "react";
// Files
import styles from "./Experience.module.css";


function Experience()
{
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>EXPERIENCE</h2>
            
            <div className={styles.Job}>
                <h3>Full Stack Web Developer</h3>
                
                <div className={styles.Details}>
                    <h4>Henry</h4>
                    <h5>May 2022 - June 2022</h5>
                </div>
                
                <p>
                    An digital art e-commerce with a small social network system.
                    <br />
                    Made with six more co-workers as final project.
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>Full Stack Web Developer</h3>
                
                <div className={styles.Details}>
                    <h4>Henry</h4>
                    <h5>April 2022 - May 2022</h5>
                </div>
                
                <p>A SPA (Single Page Application) of a video games encyclopedia.</p>
            </div>
            
            <div className={styles.Job}>
                <h3>DevOps</h3>
                
                <div className={styles.Details}>
                    <h4>ABEM</h4>
                    <h5>March 2022 - April 2022</h5>
                </div>
                
                <p>Assembly of mining platforms and do their maintenance.</p>
            </div>
            
            <div className={styles.Job}>
                <h3>AutoCAD Draftsman</h3>
                
                <div className={styles.Details}>
                    <h4>MT Arquitectura</h4>
                    <h5>September 2020 - August 2021</h5>
                </div>
                
                <p>Drawing of municipal plans.</p>
            </div>
        </div>
    );
};


export default Experience;