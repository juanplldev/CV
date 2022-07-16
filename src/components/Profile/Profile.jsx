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
            <h2 className={styles.Title}>
                {
                    language === "English" ? "PROFILE"
                    :
                    "PERFIL"
                }
            </h2>
            
            <p>
                {
                    language === "English" ? `I'm a 20 years old Full Stack Web Developer and Master Builder from Buenos Aires, Argentina.
                    Mainly oriented to the Back End, though i like Front End too.`
                    :
                    `Soy un Desarrollador Web Full Stack y Maestro Mayor de Obras. Tengo 20 años y soy de Buenos Aires, Argentina.
                    Estoy orientado principalmente al Back End aunque también me doy maña con el Front End.`
                }
                <br />
                {
                    language === "English" ? `As a good lover of logic, performance and order, I always seek to perform in the user experience and write a clean code.`
                    :
                    `Como buen amante de la lógica, el rendimiento y el orden, siempre busco desempeñarme en la experiencia del usuario y en escribir un código limpio.`
                }
                <br />
                {
                    language === "English" ? `I'm passionate about the technological and computer world and I always find myself learning new things.`
                    :
                    `Me apasiona el mundo tecnológico e informático y siempre me encuentro aprendiendo cosas nuevas.`
                }
            </p>
        </div>
    );
};


export default Profile;