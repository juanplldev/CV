// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import {BiHeadphone, BiBook} from "react-icons/bi";
import {BsLaptop} from "react-icons/bs";
import {FaGuitar} from "react-icons/fa";
import lightStyles from "./LightInterests.module.css";
import darkStyles from "./DarkInterests.module.css";


function Interests()
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
            <h3 className={styles.Title}>INTERESTS</h3>
            
            <ul>
                <li>
                    <BsLaptop/>
                    <span>IT/CS</span>
                </li>
                
                <li>
                    <BiHeadphone/>
                    <span>Music</span>
                </li>
                
                <li>
                    <FaGuitar/>
                    <span>Guitar</span>
                </li>
                
                <li>
                    <BiBook/>
                    <span>Read</span>
                </li>
            </ul>
        </div>
    );
};


export default Interests;