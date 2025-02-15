interface ProteinPowder {
  powderType: string;
  flavor: "chocolate" | "vanilla";
}

interface Milk {
  brand: string;
  volume: 250 | 500;
}

// type CupboardItem = ProteinPowder | Milk;

// type ProteinShake = ProteinPowder & Milk;

// const proteinPowder: CupboardItem = {
//   flavor: "vanilla",
//   powderType: "whey",
// };
// const milk: CupboardItem = { brand: "Happy Cow", volume: 250 };

// const proteinShake: ProteinShake = { ...proteinPowder, ...milk };
