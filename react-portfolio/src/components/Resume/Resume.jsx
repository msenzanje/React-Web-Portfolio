import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Resume.module.css"
export const Resume = () =>{
    return <section className={styles.container} id="resume">
        <h2 className={styles.title}>Resume</h2>
        <div>
            <iframe className={styles.document}
            src="https://drive.google.com/file/d/1zwtyeyi3gvPbS5ppQ3Q77dPq7q27dJ_0/preview" 
            allow="autoplay"
                   
            />

        </div>
    </section>
}