import React from 'react'

import Styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={Styles.container} id="experience">
      <h2 className={Styles.title}>Experience</h2>
      <div className={Styles.content}>
        <div className={Styles.skills}>{
          skills.map((skill, id) => {
            return (<div key={id}>
              <div className={Styles.skill}>
                <div className={Styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    loading='lazy'
                    decoding='async'
                    />
                </div>
              </div>
              <p>{skill.title}</p>
            </div>
            );
          })
        }</div>
        <ul className={Styles.history}>{
          history.map((history, id) => {
            return (<li className={Styles.historyItem}>
              <img
                src={getImageUrl(history.imageSrc)}
                alt={`${history.organization} logo`}
                loading='lazy'
                decoding='async'

              />
              <div className={Styles.historyItemDetails}>
                <h3>{`${history.role}`}</h3>
                <p>{`${history.startDate} - ${history.endDate}`}</p>
                <ul>{history.experiences.map((experience, id) => {
                  return (
                    <li key={id}>{experience}</li>
                  )
                })}</ul>
              </div>
            </li>
            );
          })
        }</ul>
      </div>

    </section>
  );
}
