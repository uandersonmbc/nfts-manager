import doge from "assets/images/bombcrypto/1-doge.gif";
import frog from "assets/images/bombcrypto/1-frog.gif";
import knight from "assets/images/bombcrypto/1-knight.gif";
import log from "assets/images/bombcrypto/1-log.gif";
import man from "assets/images/bombcrypto/1-man.gif";
import mushroom from "assets/images/bombcrypto/1-mushroom.gif";
import pepe from "assets/images/bombcrypto/1-pepe.gif";
import pumpkin from "assets/images/bombcrypto/1-pumpkin.gif";
import rock from "assets/images/bombcrypto/1-rock.gif";
import vampire from "assets/images/bombcrypto/1-vampire.gif";
import witch from "assets/images/bombcrypto/1-witch.gif";
import dino from "assets/images/bombcrypto/2-dino.gif";
import king from "assets/images/bombcrypto/2-king.gif";
import robot from "assets/images/bombcrypto/2-robot.gif";
import solider from "assets/images/bombcrypto/3-solider.gif";

import mana from "assets/images/bombcrypto/mana.png";
import energy from "assets/images/bombcrypto/energy.png";

export const addOnsImg = {
  mana: mana,
  energy: energy,
};

export const addOns = [
  {
    id: "energy-regen",
    name: "Energy Regen",
    value: false,
    img: addOnsImg.energy,
  },
  {
    id: "mana",
    name: "Mana",
    value: false,
    img: addOnsImg.mana,
  },
];

export const skills = [
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

export const rarities = [
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

export const skins = [
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
