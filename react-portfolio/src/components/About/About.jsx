import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";
export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}
                src={getImageUrl("about/aboutImage.png")}
                alt="Picture of a monitor and keyboard"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Image of a cursor"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Mobile Application Development</h3>
                        <p>
                            I have experience in front-end development,
                            creating beautiful and interactive layouts
                            using <strong>Google’s Flutter framework.</strong>
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="Image of a server"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning Development</h3>
                        <p>
                        I have experience working on a computer vision 
                        project utilizing <strong>Google Colab, 
                        OpenCV, and TensorFlow, </strong> fine-tuning 
                        <strong>YOLOv8n</strong> for a program aiding the 
                        visually impaired. I am passionate about this field 
                        and eager to grow my knowledge and skills.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt="Image of basic UI"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Java Developer</h3>
                        <p>
                            Java has been the primary language throughout
                            my coursework, therefore providing me with a
                            solid foundation in its core principles. I have
                            gained a strong understanding of 
                            <strong> object-oriented</strong> programming and
                            <strong> data structures</strong> using Java.

                           
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}