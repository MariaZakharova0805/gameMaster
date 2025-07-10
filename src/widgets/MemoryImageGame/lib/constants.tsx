import Image from "next/image";

const cardImage = (src: string) => (
  <Image
    src={src}
    alt={src}
    width={100}
    height={100}
    style={{ padding: "10px" }}
  />
);

export const initialCardsState = [
  {
    id: "1",
    name: "war",
    isActive: false,
    disabled: false,
    image: cardImage("/war.svg"),
  },
  {
    id: "2",
    name: "war",
    isActive: false,
    disabled: false,
    image: cardImage("/war.svg"),
  },
  {
    id: "3",
    name: "arcade",
    isActive: false,
    disabled: false,
    image: cardImage("/arcade.svg"),
  },
  {
    id: "4",
    name: "arcade",
    isActive: false,
    disabled: false,
    image: cardImage("/arcade.svg"),
  },

  {
    id: "5",
    name: "water",
    isActive: false,
    disabled: false,
    image: cardImage("/water.svg"),
  },
  {
    id: "6",
    name: "water",
    isActive: false,
    disabled: false,
    image: cardImage("/water.svg"),
  },
  {
    id: "7",
    name: "chess",
    isActive: false,
    disabled: false,
    image: cardImage("/chess.svg"),
  },
  {
    id: "8",
    name: "chess",
    isActive: false,
    disabled: false,
    image: cardImage("/chess.svg"),
  },

  {
    id: "9",
    name: "gamepad",
    isActive: false,
    disabled: false,
    image: cardImage("/gamepad.svg"),
  },
  {
    id: "10",
    name: "gamepad",
    isActive: false,
    disabled: false,
    image: cardImage("/gamepad.svg"),
  },
  {
    id: "11",
    name: "lego",
    isActive: false,
    disabled: false,
    image: cardImage("/lego.svg"),
  },
  {
    id: "12",
    name: "lego",
    isActive: false,
    disabled: false,
    image: cardImage("/lego.svg"),
  },

  {
    id: "13",
    name: "running",
    isActive: false,
    disabled: false,
    image: cardImage("/running.svg"),
  },
  {
    id: "14",
    name: "running",
    isActive: false,
    disabled: false,
    image: cardImage("/running.svg"),
  },

  {
    id: "15",
    name: "singing",
    isActive: false,
    disabled: false,
    image: cardImage("/singing.svg"),
  },
  {
    id: "16",
    name: "singing",
    isActive: false,
    disabled: false,
    image: cardImage("/singing.svg"),
  },

  {
    id: "17",
    name: "slinger",
    isActive: false,
    disabled: false,
    image: cardImage("/slinger.svg"),
  },
  {
    id: "18",
    name: "slinger",
    isActive: false,
    disabled: false,
    image: cardImage("/slinger.svg"),
  },
  {
    id: "19",
    name: "sword",
    isActive: false,
    disabled: false,
    image: cardImage("/sword.svg"),
  },
  {
    id: "20",
    name: "sword",
    isActive: false,
    disabled: false,
    image: cardImage("/sword.svg"),
  },

  {
    id: "21",
    name: "tent",
    isActive: false,
    disabled: false,
    image: cardImage("/tent.svg"),
  },
  {
    id: "22",
    name: "tent",
    isActive: false,
    disabled: false,
    image: cardImage("/tent.svg"),
  },
  {
    id: "23",
    name: "touch",
    isActive: false,
    disabled: false,
    image: cardImage("/touch.svg"),
  },
  {
    id: "24",
    name: "touch",
    isActive: false,
    disabled: false,
    image: cardImage("/touch.svg"),
  },
  {
    id: "25",
    name: "zombie",
    isActive: false,
    disabled: false,
    image: cardImage("/zombie.svg"),
  },
  {
    id: "26",
    name: "zombie",
    isActive: false,
    disabled: false,
    image: cardImage("/zombie.svg"),
  },
  {
    id: "27",
    name: "bakery",
    isActive: false,
    disabled: false,
    image: cardImage("/bakery.svg"),
  },
  {
    id: "28",
    name: "bakery",
    isActive: false,
    disabled: false,
    image: cardImage("/bakery.svg"),
  },

  {
    id: "29",
    name: "humberger",
    isActive: false,
    disabled: false,
    image: cardImage("/humberger.svg"),
  },
  {
    id: "30",
    name: "humberger",
    isActive: false,
    disabled: false,
    image: cardImage("/humberger.svg"),
  },
  {
    id: "31",
    name: "pepper",
    isActive: false,
    disabled: false,
    image: cardImage("/pepper.svg"),
  },
  {
    id: "32",
    name: "pepper",
    isActive: false,
    disabled: false,
    image: cardImage("/pepper.svg"),
  },

  {
    id: "33",
    name: "shop",
    isActive: false,
    disabled: false,
    image: cardImage("/shop.svg"),
  },
  {
    id: "34",
    name: "shop",
    isActive: false,
    disabled: false,
    image: cardImage("/shop.svg"),
  },

  {
    id: "35",
    name: "hat",
    isActive: false,
    disabled: false,
    image: cardImage("/hat.svg"),
  },
  {
    id: "36",
    name: "hat",
    isActive: false,
    disabled: false,
    image: cardImage("/hat.svg"),
  },

  {
    id: "37",
    name: "grater",
    isActive: false,
    disabled: false,
    image: cardImage("/grater.svg"),
  },
  {
    id: "38",
    name: "grater",
    isActive: false,
    disabled: false,
    image: cardImage("/grater.svg"),
  },
  {
    id: "39",
    name: "napkin",
    isActive: false,
    disabled: false,
    image: cardImage("/napkin.svg"),
  },
  {
    id: "40",
    name: "napkin",
    isActive: false,
    disabled: false,
    image: cardImage("/napkin.svg"),
  },
];

export const defaultPicturesAmount = 10;

export const picturesAmountOptions = [
  { value: defaultPicturesAmount, label: "10" },
  { value: 20, label: "20" },
  { value: 30, label: "30" },
  { value: 40, label: "40" },
];
