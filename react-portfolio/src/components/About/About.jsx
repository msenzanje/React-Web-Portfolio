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
                loading="lazy"
                decoding="async"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Image of a cursor"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Software Engineering</h3>
                        <p>
                        I have experience developing efficient solutions 
                        using <strong> Python </strong>and <strong> Java</strong>. 
                        My expertise includes building, implementing 
                        machine learning models with <strong>PyTorch</strong>,
                        developing data-driven applications, and more. I have 
                        worked on projects involving <strong>database 
                        management, object detection</strong>, and 
                        <strong> data visualization</strong>.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="Image of a server"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className={styles.aboutItemText}>
                        <h3> Machine Learning</h3>
                        <p>
                        I have experience in machine learning, developing and 
                        training models using <strong>Python, PyTorch</strong>, and 
                        <strong> OpenCV</strong>. My expertise includes deep learning, 
                        image classification, and object detection, with hands-on 
                        experience fine-tuning <strong>YOLOv8</strong> for 
                        real-world applications
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt="Image of basic UI"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Data Analysis</h3>
                        <p>
                        I have experience in data analysis, extracting insights 
                        from large datasets using <strong>SQL</strong>. My expertise 
                        includes data visualization with <strong>Tableau</strong>, 
                        statistical analysis, and database management with 
                        <strong> PostgreSQL</strong> and <strong>MySQL</strong>.        
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
}