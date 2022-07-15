// Dependencies
import React from "react";
// Files
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Languages from "../Languages/Languages";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Experience";
import Certificates from "../Certificates/Certificates";
import Skills from "../Skills/Skills";
import Interests from "../Interests/Interests";


function Home()
{
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
        </div>
    );
};


export default Home;