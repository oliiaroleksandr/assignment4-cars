export const columns = ["MODEL", "STATUS"];

type Model = {
  id: number;
  name: string;
  status: "Garaging" | "150% Model";
};

export const models: Model[] = [
  {
    id: 1,
    name: "Kona OS RTE",
    status: "Garaging",
  },
  {
    id: 2,
    name: "Kona OS Reveal",
    status: "150% Model",
  },
  {
    id: 3,
    name: "Kona EV RTE",
    status: "Garaging",
  },
];
