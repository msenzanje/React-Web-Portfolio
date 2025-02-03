import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Resume.module.css"
export const Resume = () =>{
    return <section className={styles.container} id="resume">
        <h2 className={styles.title}>Resume</h2>
        <div>
            <iframe className={styles.document}
            src="https://drive.google.com/file/d/1GXc2Fp_mCX7zumcJrdrGzDIAlbGJB0KQ/preview"
            allow="autoplay"
                   
            />

        </div>
    </section>
}