// Dependencies
import React from "react";
// Files
import {BiHeadphone, BiBook} from "react-icons/bi";
import {BsLaptop} from "react-icons/bs";
import {FaGuitar} from "react-icons/fa";
import styles from "./Interests.module.css";


function Interests()
{
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