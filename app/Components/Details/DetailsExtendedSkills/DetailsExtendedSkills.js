"use client";
import React, { useState } from "react";
import styles from "./DetailsExtendedSkills.module.css";

export default function DetailsExtended({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState("");

  const handleSkillChange = (skill) => {
    setSkills(
      skills.includes(skill)
        ? skills.filter((s) => s !== skill)
        : [...skills, skill]
    );
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const preventCopyPaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.extendedSkillsMain}>
      <div className={styles.extendedSkillsTitle}>
        <p>Habilidades</p>
      </div>
      <div className={styles.extendedSkillsContent}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked
              onChange={() => handleSkillChange(skill)}
            />
            <label>{skill}</label>
          </div>
        ))}
      </div>
      <div className={styles.extendedSkillsAdd}>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onCopy={preventCopyPaste}
          onPaste={preventCopyPaste}
          placeholder="Añade una habilidad"
        />
        <label onClick={addSkill}>Agregar</label>
      </div>
    </div>
  );
}
