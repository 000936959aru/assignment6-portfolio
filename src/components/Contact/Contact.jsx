import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("assignment6-portfolio/contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:aruveer-kaur.brar@mohawkcollege.ca">aruveer-kaur.brar@mohawkcollege.ca</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("assignment6-portfolio/contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://ca.linkedin.com/in/aruveer-brar-488b75282">linkedin.com/Aruveer Brar</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("assignment6-portfolio/contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/000936959aru">github.com/aruveer-K-B</a>
                </li>
            </ul>
        </footer>
    );
};
