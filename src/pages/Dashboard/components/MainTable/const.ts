export const columns = ["PROJECT NAME", "STATUS", "NEXT REVIEW", "DELIVERY"];

export type Project = {
  id: number;
  name: string;
  status: "DATA" | "REVIEW" | "PRODUCTION" | "GARAGING";
  nextReview: string;
  delivery: string;
};

export const projetcs: Project[] = [
  {
    id: 1,
    name: "Kona OS RTE",
    status: "DATA",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 2,
    name: "Santa Fe TDI",
    status: "REVIEW",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 3,
    name: "Kona OS Reveal",
    status: "PRODUCTION",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 4,
    name: "Kona EV RTE",
    status: "GARAGING",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 5,
    name: "Sonata NLine Wheel Cap",
    status: "DATA",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 6,
    name: "Nexo Hydrogen Decal",
    status: "DATA",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
  {
    id: 7,
    name: "MY22 Hyundai Packshots",
    status: "DATA",
    nextReview: "01/25/21",
    delivery: "01/25/21",
  },
];
