import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (<section className={styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Melusi</h1>
            <p className={styles.description}>
                I am a Computer Science student set to
                graduate in 2026. I have expeience Java, C, 
                and the Flutter framework. <br/>
                Reach out if you'd like to learn more!
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