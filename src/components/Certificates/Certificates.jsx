// Dependencies
import React from "react";
// Files
import {BsArrowRightShort} from "react-icons/bs"
import styles from "./Certificates.module.css";


function Certificates()
{
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>CERTIFICATES</h2>
            
            <ul>
                <li>
                    <a className={styles.Link} href="https://certificates.soyhenry.com/cert?id=22f61cd9-03ee-4444-8822-53a5c289cd60">
                        <span>
                            Full Stack Web Developer<span className={styles.Month}> - June 2022</span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/4490855">
                        <span>
                            Computer Security<span className={styles.Month}> - May 2022</span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3955381">
                        <span>
                            Mobile Phone Repair and Maintenance<span className={styles.Month}> - May 2022</span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3955352">
                        <span>
                            Fundamentals in Computer Science<span className={styles.Month}> - May 2022</span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
                <li>
                    <a className={styles.Link} href="https://edutin.com/certifications/view/3874632">
                        <span>
                            Introduction to C<span className={styles.Month}> - July 2021</span>
                        </span>
                        <BsArrowRightShort/>
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default Certificates;