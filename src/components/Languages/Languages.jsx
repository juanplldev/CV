// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightLanguages.module.css";
import darkStyles from "./DarkLanguages.module.css";


function Languages()
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