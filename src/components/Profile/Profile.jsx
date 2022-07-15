// Dependencies
import React, {useContext, useEffect, useState} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import lightStyles from "./LightProfile.module.css";
import darkStyles from "./DarkProfile.module.css";


function Profile()
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
            <h2 className={styles.Title}>PROFILE</h2>
            
            <p>
                I'm a 20 years old Full Stack Web Developer and Master Builder from Buenos Aires, Argentina. Mainly oriented to the Back End, though i like Front End too.
                <br />
                As a good lover of logic, performance and order, I always seek to perform in the user experience and write a clean code.
                <br />
                I'm passionate about the technological and computer world and I always find myself learning new things.
            </p>
        </div>
    );
};


export default Profile;