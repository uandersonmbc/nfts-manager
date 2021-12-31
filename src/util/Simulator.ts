export type Rarity = {
  name: string;
  slug: string;
  value: number;
};

export type Chest = {
  name: string;
  slug: string;
  hp: number;
  value: number;
};

export type Configs = {
  average_profit_bad_hero: number;
  average_profit_per_map: number;
  rarities: Array<Rarity>;
  chests: Array<Chest>;
};

export type Hero = {
  power: number;
  speed: number;
  stamina: number;
  bomb_number: number;
  bomb_range: number;
  energy: boolean;
  mana: boolean;
  name: string;
  slug: string;
  rarity: string;
  hero_id: number | string;
};

export type Data = {
  heros: Array<Hero>;
};

export function simulatorBombCrypto(data: Data, configs: Configs) {
  const { heros } = data;
  const { average_profit_bad_hero, average_profit_per_map, rarities, chests } =
    configs;

  const heros_profit = heros.map((hero) => {
    const {
      power,
      speed,
      stamina,
      bomb_number,
      bomb_range,
      energy,
      mana,
      name,
      slug,
      rarity,
      hero_id,
    } = hero;

    const total_talents = power + speed + stamina + bomb_number + bomb_range;
    let total_profit = (total_talents * average_profit_bad_hero) / 5;
    if (energy) total_profit += total_profit * 2;
    if (mana) total_profit += total_profit * 0.2;

    const max_profit = total_profit + total_profit * 0.2;
    const min_profit = total_profit - total_profit * 0.4;
    const average_profit = (total_profit + max_profit) / 2;

    const hits = chests.map((chest) => {
      const { name, slug, hp, value } = chest;
      return {
        name,
        hits: hp / power,
        slug,
        value,
      };
    });

    return {
      power,
      speed,
      stamina,
      bomb_number,
      bomb_range,
      energy,
      mana,
      name,
      slug,
      rarity,
      hero_id,
      min_profit,
      max_profit,
      average_profit,
      hits,
    };
  });

  const max_profit = heros_profit.reduce(
    (sum, hero) => sum + hero.max_profit,
    0
  );

  const min_profit = heros_profit.reduce(
    (sum, hero) => sum + hero.min_profit,
    0
  );

  const average_profit = heros_profit.reduce(
    (sum, hero) => sum + hero.average_profit,
    0
  );

  return {
    max_profit,
    min_profit,
    average_profit,
    heros_profit,
  };
}
