import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";
export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Image of a cursor"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend with experience buoilding
                            and optimized applications
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="Image of a server"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            Test text to be filled matching relevent
                            skill set
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="UI Icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            Test text to be filled matching relevent
                            skill set
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}