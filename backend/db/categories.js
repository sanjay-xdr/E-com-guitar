import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "AcousticGuitar",
    description:
      "An acoustic guitar is a guitar with a hollow body that amplifies the vibration of the strings acoustically.",
  },
  {
    _id: uuid(),
    categoryName: "Electric Guitar",
    description:
      "Guitar with a built-in pickup or pickups which convert string vibrations into electrical signals for amplification.",
  },
  {
    _id: uuid(),
    categoryName: "Tuner&Capo",
    description:
      "Tune you guitar with our best quality tested Tuner and Buy Capo for your acoustic guitar",
  },
  {
    _id: uuid(),
    categoryName: "Strings",
    description:
      "A to G buy all strings for your Guitar",
  },
  {
    _id: uuid(),
    categoryName: "Strap&Stand",
    description:
      "How about holding your guitar? Buy Stand and Strap here",
  },
  {
    _id: uuid(),
    categoryName: "Picks&Plectrum",
    description:
      "Buy cool and amazing Plectrum here",
  },
];
