import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (<section className={styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Melusi</h1>
            <p className={styles.description}>
                I'm a passionate Computer Science student graduating 
                in 2026, with hands-on experience in Java, MySQL, the 
                Flutter framework and more. I'm always excited to learn 
                and collaborate. <br/>
                Feel free to reach out if you'd like to connect!!
            </p>
            <a href="mailto:email@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/portraitIcon.png")} 
            alt="Potrait photo of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </section>
    );
};