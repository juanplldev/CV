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
            <h3 className={styles.Title}>
                {
                    language === "English" ? "INTERESTS"
                    :
                    "INTERESES"
                }
            </h3>
            
            <ul>
                <li>
                    <BsLaptop/>
                    <span>
                        {
                            language === "English" ? "IT/CS"
                            :
                            "TI/CC"
                        }
                    </span>
                </li>
                
                <li>
                    <BiHeadphone/>
                    <span>
                        {
                            language === "English" ? "Music"
                            :
                            "Música"
                        }
                    </span>
                </li>
                
                <li>
                    <FaGuitar/>
                    <span>
                        {
                            language === "English" ? "Guitar"
                            :
                            "Guitarra"
                        }
                    </span>
                </li>
                
                <li>
                    <BiBook/>
                    <span>
                        {
                            language === "English" ? "Read"
                            :
                            "Leer"
                        }
                    </span>
                </li>
            </ul>
        </div>
    );
};


export default Interests;