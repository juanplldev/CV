// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import {IoLanguageOutline, IoMoonOutline} from "react-icons/io5";
import profileImg from "../../img/Profile Photo.jpeg";
import lightStyles from "./LightHeader.module.css";
import darkStyles from "./DarkHeader.module.css";


function Header()
{
    const {language, setLanguage} = useContext(LanguageContext);
    const {theme, setTheme} = useContext(ThemeContext);
    
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
    
    function handleChangeTheme()
    {
        if(theme === "Dark")
        {
            setTheme("Light");
            window.localStorage.setItem("Theme", "Light");
        }
        else if(theme === "Light")
        {
            setTheme("Dark");
            window.localStorage.setItem("Theme", "Dark");
        };
    };
    
    function handleChangeLanguage()
    {
        if(language === "English")
        {
            setLanguage("Español");
            window.localStorage.setItem("Language", "Español");
        }
        else if(language === "Español")
        {
            setLanguage("English");
            window.localStorage.setItem("Language", "English");
        };
    };
    
    return (
        <div className={styles.Container}>
            <div className={styles.ButtonsContainer}>
                <button onClick={handleChangeLanguage} className={styles.Button}>
                    <IoLanguageOutline/>
                </button>
                <button onClick={handleChangeTheme} className={styles.Button}>
                    <IoMoonOutline/>
                </button>
            </div>
            
            <img src={profileImg} alt="" />
            <h2>Juan Pablo Llorente</h2>
            <h4>Full Stack Web Developer</h4>
            
            <button className={styles.DownloadButton}>Download</button>
        </div>
    );
};


export default Header;