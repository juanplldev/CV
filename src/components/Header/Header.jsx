// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import {IoLanguageOutline, IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import profileImg from "../../img/Profile Photo.jpeg";
import lightStyles from "./LightHeader.module.css";
import darkStyles from "./DarkHeader.module.css";


function Header()
{
    const {language, setLanguage} = useContext(LanguageContext);
    const {theme, setTheme} = useContext(ThemeContext);
    
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    const titles =
    {
        language: language === "English" ? "Change language" : "Cambiar idioma",
        theme: language === "English" ? "Change theme" : "Cambiar tema",
        download: language === "English" ? "Download a PDF version" : "Descargar una versión en PDF",
    };
    
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
                <button onClick={handleChangeLanguage} className={styles.Button} title={titles.language}>
                    <IoLanguageOutline/>
                </button>
                <button onClick={handleChangeTheme} className={styles.Button} title={titles.theme}>
                    {
                        theme === "Light" ? <IoMoonOutline/>
                        :
                        <IoSunnyOutline/>
                    }
                </button>
            </div>
            
            <img src={profileImg} alt=""/>
            <h2>Juan Pablo Llorente</h2>
            
            <h4>
                {
                    language === "English" ? "Full Stack Web Developer"
                    :
                    "Desarrollador Web Full Stack"
                }
            </h4>
            
            <a href="" download={""}>
                <button className={styles.DownloadButton} title={titles.download}>
                {
                    language === "English" ? "Download"
                    :
                    "Descargar"
                }
                </button>
            </a>
        </div>
    );
};


export default Header;