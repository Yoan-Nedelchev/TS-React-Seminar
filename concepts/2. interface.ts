export interface House {
  walls: "thick" | "slim";
  owner: string;
  roof: "flat" | "pointy";
  windows: "small" | "French";
  door: string;
  chimney: boolean;
  rooms: number;
}

const house: House = {
  walls: "slim",
  owner: "Pesho",
  roof: "flat",
  windows: "small",
  door: "strong",
  chimney: false,
  rooms: 4,
};

console.log(house);
