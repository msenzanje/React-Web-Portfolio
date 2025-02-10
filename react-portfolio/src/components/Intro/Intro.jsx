import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (<section className={styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Hi, I'm Melusi</h1>
            <p className={styles.description}>
                Aspiring Software Engineer and Data Scientist with
                hands-on experience in <strong>Python, MySQL, Java, Dart </strong>  
                and other technologies.
            </p>
            <p className={styles.description}>
                I have contributed to diverse projects, including
                <strong> mobile applications</strong> and  
                <strong> computer vision solutions</strong>, as 
                part of dynamic teams. I am always eager to learn 
                and collaborate.
                <br/>
                Feel free to reach out if you'd like to connect!!
            </p>
            <a href="mailto:ksenzanje@gmail.com" className={styles.contactBtn}>
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