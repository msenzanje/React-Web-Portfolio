import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../../utils";

export const Intro = () => {
    return (<section className={styles.container}>
        <div className= {styles.content}>
            <h1 className= {styles.title}>Test Text</h1>
            <p className={styles.description}>
                Blah Blah Blah Blah Blah Blah 
                Blah Blah BlahBlah Blah Blah
            </p>
            <a href="mailto:email@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Potrait photo of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </section>
    );
};