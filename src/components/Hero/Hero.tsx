import Image from "next/image";
import ButtonIncrementDecrement from "components/ButtonIncrementDecrement/ButtonIncrementDecrement";
import { useEffect, useState } from "react";

import { updateSimulator } from "../../util/updateSimulator";

import doge from "assets/images/1-doge.gif";
import frog from "assets/images/1-frog.gif";
import knight from "assets/images/1-knight.gif";
import log from "assets/images/1-log.gif";
import man from "assets/images/1-man.gif";
import mushroom from "assets/images/1-mushroom.gif";
import pepe from "assets/images/1-pepe.gif";
import pumpkin from "assets/images/1-pumpkin.gif";
import rock from "assets/images/1-rock.gif";
import vampire from "assets/images/1-vampire.gif";
import witch from "assets/images/1-witch.gif";
import dino from "assets/images/2-dino.gif";
import king from "assets/images/2-king.gif";
import robot from "assets/images/2-robot.gif";
import solider from "assets/images/3-solider.gif";

import mana from "assets/images/mana.png";
import energy from "assets/images/energy.png";

import styles from "./styles.module.scss";

const skins = [
  {
    id: "doge",
    name: "Doge",
    img: doge,
  },
  {
    id: "frog",
    name: "Frog",
    img: frog,
  },
  {
    id: "knight",
    name: "Knight",
    img: knight,
  },
  {
    id: "log",
    name: "Log",
    img: log,
  },
  {
    id: "man",
    name: "Man",
    img: man,
  },
  {
    id: "mushroom",
    name: "Mushroom",
    img: mushroom,
  },
  {
    id: "pepe",
    name: "Pepe",
    img: pepe,
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    img: pumpkin,
  },
  {
    id: "rock",
    name: "Rock",
    img: rock,
  },
  {
    id: "vampire",
    name: "Vampire",
    img: vampire,
  },
  {
    id: "witch",
    name: "Witch",
    img: witch,
  },
  {
    id: "dino",
    name: "Dino",
    img: dino,
  },
  {
    id: "king",
    name: "King",
    img: king,
  },
  {
    id: "robot",
    name: "Robot",
    img: robot,
  },
  {
    id: "solider",
    name: "Solider",
    img: solider,
  },
];

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

const rarities = [
  {
    id: "common",
    name: "Common",
  },
  {
    id: "rare",
    name: "Rare",
  },
  {
    id: "super-rare",
    name: "Super Rare",
  },
  {
    id: "epic",
    name: "Epic",
  },
  {
    id: "legend",
    name: "Legend",
  },
  {
    id: "super-legend",
    name: "Super Legend",
  },
];

const addOns = [
  {
    id: "energy-regen",
    name: "Energy Regen",
    value: false,
    img: energy,
  },
  {
    id: "mana",
    name: "Mana",
    value: false,
    img: mana,
  },
];

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
          alt="Picture of the author"
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
