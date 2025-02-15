export interface ExampleObject {
  id: number;
  name: string;
  isActive: boolean;
  tags: string[];
  optionalValue?: string;
  nullableValue: string | null;
  unknownValue: any;
  action: (arg1: string, arg2?: number) => string;
}

const example: ExampleObject = {
  id: 1,
  name: "Example Object",
  isActive: true,
  tags: ["typescript", "interface", "example"],
  optionalValue: "This is optional",
  nullableValue: null,
  unknownValue: { dynamic: "value" },
  action: (arg1, arg2?) => {
    return `Action received: ${arg1}${
      arg2 !== undefined ? `, number: ${arg2}` : ""
    }`;
  },
};
