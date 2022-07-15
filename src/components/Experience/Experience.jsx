// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightExperience.module.css";
import darkStyles from "./DarkExperience.module.css";


function Experience()
{
    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);
    
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    useEffect(() => {
        if(theme === "Light")
        {
            setStyles(lightStyles);
        }
        else if(theme === "Dark")
        {
            setStyles(darkStyles);
        };
    }, [theme]);
    
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
                    <h5>Sept. 2020 - August 2021</h5>
                </div>
                
                <p>Drawing of municipal plans.</p>
            </div>
        </div>
    );
};


export default Experience;