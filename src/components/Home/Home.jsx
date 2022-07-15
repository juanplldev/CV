// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Languages from "../Languages/Languages";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Experience";
import Certificates from "../Certificates/Certificates";
import Skills from "../Skills/Skills";
import Interests from "../Interests/Interests";
import ThemeContext from "../../contexts/ThemeContext";
import {scrollToTop} from "../../handlers/handlers";
import {AiOutlineArrowUp} from "react-icons/ai";
import lightStyles from "./LightHome.module.css";
import darkStyles from "./DarkHome.module.css";


function Home()
{
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Light" ? lightStyles : darkStyles);
    
    useEffect(() => {
        if(theme === "Light")
        {
            setStyles(lightStyles);
            document.body.classList.remove("BodyDarkTheme");
        }
        else if(theme === "Dark")
        {
            setStyles(darkStyles);
            document.body.classList.add("BodyDarkTheme");
        };
    }, [theme]);
    
    return (
        <div className={styles.Container}>
            <div className={styles.LeftSide}>
                <Header/>
                <Contact/>
                <Education/>
                <Languages/>
                <Interests/>
            </div>
            
            <div className={styles.RightSide}>
                <Profile/>
                <Experience/>
                <Certificates/>
                <Skills/>
            </div>
            
            <button onClick={scrollToTop} className={styles.ArrowButton}>
                <AiOutlineArrowUp/>
            </button>
        </div>
    );
};


export default Home;