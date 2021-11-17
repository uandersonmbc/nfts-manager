import ButtonIncrementDecrement from "components/ButtonIncrementDecrement/ButtonIncrementDecrement";
import { useState } from "react";

import { updateSimulator } from "./updateSimulator";

import styles from "./styles.module.scss";

const skills = [
  {
    id: "power",
    name: "Power",
    value: 1,
  },
  {
    id: "speed",
    name: "Speed",
    value: 1,
  },
  {
    id: "stamina",
    name: "Stamina",
    value: 1,
  },
  {
    id: "bomb-number",
    name: "Bomb Number",
    value: 1,
  },
  {
    id: "bomb-range",
    name: "Bomb Range",
    value: 1,
  },
];

export default function Hero() {
  const [skillsValues, setSkillsValues] = useState(skills);

  const handleIncrement = (id: string) => {
    const newSkillsValues = [...skillsValues];
    const skill = newSkillsValues.find((skill) => skill.id === id);
    if (skill) {
      skill.value += 1;
    }
    setSkillsValues(newSkillsValues);
  };

  const handleDecrement = (id: string) => {
    const newSkillsValues = [...skillsValues];
    const skill = newSkillsValues.find((skill) => skill.id === id);
    if (skill) {
      skill.value -= 1;
    }
    setSkillsValues(newSkillsValues);
  };

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.skill}>
          {skill.name}
          <ButtonIncrementDecrement
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            id={skill.id}
            value={skill.value}
          />
        </div>
      ))}

      <button onClick={() => updateSimulator(skillsValues)}>Test</button>

      {JSON.stringify(skillsValues)}
    </div>
  );
}
