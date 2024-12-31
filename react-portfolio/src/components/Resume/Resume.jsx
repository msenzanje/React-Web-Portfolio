import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Resume.module.css"
export const Resume = () =>{
    return <section className={styles.container} id="resume">
        <h2 className={styles.title}>Resume</h2>
        <div>
            <iframe className={styles.document}
            src="https://drive.google.com/file/d/1cxbONdtJATQJT8vy1OR8fPoC_3W5L_Mm/preview" 
            allow="autoplay"
                   
            />

        </div>
    </section>
}