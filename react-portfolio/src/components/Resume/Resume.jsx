import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Resume.module.css"
export const Resume = () =>{
    return <section className={styles.container} id="resume">
        <h2 className={styles.title}>Resume</h2>
        <div>
        <iframe src="https://drive.google.com/file/d/1QSXFCHVUgpobcOHjs8SI5e_dkdc0OUBj/preview" 
        width="640" height="480" allow="autoplay"></iframe>

        </div>
    </section>
}