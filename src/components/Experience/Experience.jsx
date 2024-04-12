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
            <h2 className={styles.Title}>
                {
                    language === "English" ? "EXPERIENCE"
                    :
                    "EXPERIENCIA"
                }
            </h2>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Full Stack Web Developer"
                        :
                        "Desarrollador Web Full Stack"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>
                        {
                            language === "English" ? "Personal project"
                            :
                            "Proyecto personal"
                        }
                    </h4>
                    <h5>
                        {
                            language === "English" ? "Feb. 2024 - Apr. 2024"
                            :
                            "Feb. 2024 - Abr. 2024"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Made a personal file server with an UI to manage it."
                        :
                        "Hice un servidor de archivos personal con una interfaz de usuario para administrarlo."
                    }
                </p>
            </div>

            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Full Stack Developer"
                        :
                        "Desarrollador Full Stack"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>
                        {
                            language === "English" ? "Personal project"
                            :
                            "Proyecto personal"
                        }
                    </h4>
                    <h5>
                        {
                            language === "English" ? "Sep. 2022 - Oct. 2022"
                            :
                            "Sep. 2022 - Oct. 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Made an app to see the crypto prices."
                        :
                        "Hice una aplicación para ver los precios de las criptomonedas."
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "Full Stack Web Developer"
                        :
                        "Desarrollador Web Full Stack"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>Henry</h4>
                    <h5>
                        {
                            language === "English" ? "May 2022 - Jun. 2022"
                            :
                            "May. 2022 - Jun. 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? `Made a digital art e-commerce with a small social network system
                        with six more co-workers as final project.`
                        :
                        `Hice una pagina para el comercio de arte digital con un añadido de red social
                        con seis compañeros más, como proyecto final.`
                    }
                </p>
            </div>
            
            <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "DevOps"
                        :
                        "Desarrollo y Operaciones"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>ABEM</h4>
                    <h5>
                        {
                            language === "English" ? "Mar. 2022 - Apr. 2022"
                            :
                            "Mar. 2022 - Abr. 2022"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Assembly of mining platforms and do their maintenance."
                        :
                        "Armado de rigs de minería y mantenimiento de los mismos."
                    }
                </p>
            </div>
            
            {/* <div className={styles.Job}>
                <h3>
                    {
                        language === "English" ? "AutoCAD Draftsman"
                        :
                        "Dibujante de AutoCAD"
                    }
                </h3>
                
                <div className={styles.Details}>
                    <h4>MT Arquitectura</h4>
                    <h5>
                        {
                            language === "English" ? "Sep. 2020 - Aug. 2021"
                            :
                            "Sep. 2020 - Ago. 2021"
                        }
                    </h5>
                </div>
                
                <p>
                    {
                        language === "English" ? "Drawing of municipal plans."
                        :
                        "Dibujado de planos municipales."
                    }
                </p>
            </div> */}
        </div>
    );
};


export default Experience;