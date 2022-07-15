// Dependencies
import React from "react";
// Files
import styles from "./Profile.module.css";


function Profile()
{
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