// price vars
const priceUSD = 0;
const volumeUSD = 0;
const priceBrl = 0;
const volumeBrl = 0;
const priceChange = 0;

// Main Vars
// Chests HP
let chestWoodHp = 50;
let chestMetalHp = 100;
let chestGoldHp = 500;
let chestCrystalHp = 1000;
let chestTreasureHp = 2000;

// Chests Rewards
let chestWoodRw = 0.015;
let chestMetalRw = 0.035;
let chestGoldRw = 0.16;
let chestCrystalRw = 0.325;
let chestTreasureRw = 1.18;

let averageProfitBadHero = 0.25;
let averageProfitPerMap = 0.72;

let heroList = [];
let fullStats = [];

const skinsImageList = ["cowboy", "witch", "vampire", "knight", "frog"];
const rarityList = [
  "common",
  "rare",
  "super rare",
  "epic",
  "legend",
  "super legend",
];

export function updateSimulator(skillsValues: any, addOnsValues: any) {
  // get vars together
  var power = skillsValues[0].value;
  var speed = skillsValues[1].value;
  var stamina = skillsValues[2].value;
  var bombnum = skillsValues[3].value;
  var bombrange = skillsValues[4].value;
  var energy = addOnsValues[0].value;
  var mana = addOnsValues[1].value;

  // Lets calculate the time this hero needs to fully recover
  var timeToRecover;
  if (energy == 1) {
    timeToRecover = stamina * 50;
  } else {
    timeToRecover = stamina * 100;
  }

  // Lets calculate how many hits it needs for every chest
  var hitsWood = chestWoodHp / power;
  var hitsMetal = chestMetalHp / power;
  var hitsGold = chestGoldHp / power;
  var hitsCrystal = chestCrystalHp / power;
  var hitsTreasure = chestTreasureHp / power;

  // Lets calculate the profitability
  // we have a base calculation for a basic char
  // we just sum every talent, and subtract 30% if mana is enabled
  // then we calculate it against the time to recover up to 24hours
  var totalTalents = power + speed + stamina + bombnum + bombrange;
  totalTalents = (totalTalents * averageProfitBadHero) / 5;
  var totalProfit = parseFloat(totalTalents.toFixed(3));
  if (mana == 1) {
    totalProfit += totalProfit * 0.2;
  }
  if (energy == 1) {
    totalProfit = totalProfit * 2;
  }
  var maxProfit = totalProfit + totalProfit * 0.2;
  maxProfit = parseFloat(maxProfit.toFixed(3));
  var minProfit = totalProfit - totalProfit * 0.4;
  minProfit = parseFloat(minProfit.toFixed(3));
  var avgProfit: number = (avgProfit = (maxProfit + minProfit) / 2);

  return {
    totalTalents: totalTalents,
    totalProfit: totalProfit,
    maxProfit: maxProfit,
    minProfit: minProfit,
    avgProfit: avgProfit,
  };
}
