import Image from "next/image";
import ButtonIncrementDecrement from "components/ButtonIncrementDecrement/ButtonIncrementDecrement";
import { useEffect, useState } from "react";

import { updateSimulator } from "../../util/updateSimulator";

import { skins, addOns, skills, rarities } from "util/heros";

import styles from "./styles.module.scss";

export interface Hero {
  onChange: () => void;
  heroSelected: any;
}

export default function Hero() {
  const [skillsValues, setSkillsValues] = useState(skills);
  const [addOnsValues, setAddOnsValues] = useState(addOns);
  const [skin, setSkin] = useState(skins[0]);

  const handleIncrement = (id: string) => {
    const newSkillsValues = [...skillsValues];
    const skill = newSkillsValues.find((skill) => skill.id === id);
    if (skill && skill.value < 20) {
      skill.value += 1;
      setSkillsValues(newSkillsValues);
    }
  };

  const handleDecrement = (id: string) => {
    const newSkillsValues = [...skillsValues];
    const skill = newSkillsValues.find((skill) => skill.id === id);
    if (skill && skill.value > 1) {
      skill.value -= 1;
      setSkillsValues(newSkillsValues);
    }
  };

  const handleAddOns = (id: string) => {
    const newAddOnsValues = [...addOnsValues];
    const addOn = newAddOnsValues.find((addOn) => addOn.id === id);
    if (addOn) {
      addOn.value = !addOn.value;
      setAddOnsValues(newAddOnsValues);
    }
  };

  useEffect(() => {
    const asdf = updateSimulator(skillsValues, addOnsValues);
    console.log(asdf);
  }, [skillsValues, addOnsValues]);

  return (
    <div className={styles.hero}>
      <div className={styles.chooseHero}>
        <select
          onChange={(e) =>
            setSkin(skins.find((s) => s.id === e.target.value) || skins[0])
          }
        >
          {skins.map((s) => (
            <option key={s.id} value={s.id} selected={s.id === skin.id}>
              {s.name}
            </option>
          ))}
        </select>
        <Image
          src={skin.img.src}
          alt={skin.name}
          width={skin.img.width}
          height={skin.img.height}
        />
        <select>
          {rarities.map((rarity) => (
            <option key={rarity.id} value={rarity.id}>
              {rarity.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.skills}>
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
        <div className={styles.addons}>
          {addOns.map((addon) => (
            <div className={styles.addon} key={addon.id}>
              <Image
                src={addon.img.src}
                width={addon.img.width}
                height={addon.img.height}
              />
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={addon.value}
                  onChange={() => handleAddOns(addon.id)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
