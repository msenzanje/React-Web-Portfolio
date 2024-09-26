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
                        <h3>Frontend Development</h3>
                        <p>
                            I have experience in front-end development,
                            creating beautiful and interactive layouts
                            using Google’s Flutter framework
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="Image of a server"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Java Developer</h3>
                        <p>
                            Java has been the primary language throughout
                            my coursework, therefore providing me with a
                            solid foundation in its core principles. I have
                            gained a strong understanding of object-oriented programming and
                            data structures using Java.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt="Image of basic UI"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Computer Vision Enthusiast</h3>
                        <p>
                            My team and I are working on a computer vision
                            project utilizing OpenCV, TensorFlow and more. I have
                            a strong interest in this field and am eager
                            to expand my knowledge and skills as we progress.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}