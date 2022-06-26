const INGREDIENTS_MODIFIER = {
  1: "mushrooms",
  2: "cheddar",
  3: "salami",
  4: "ham",
  5: "ananas",
  6: "bacon",
  7: "onion",
  8: "chile",
  9: "jalapeno",
  10: "olives",
  11: "tomatoes",
  12: "salmon",
  13: "mozzarella",
  14: "parmesan",
  15: "blue_cheese",
};

const SIZES_MODIFIER = {
  1: "small",
  2: "normal",
  3: "big",
};

const SAUCES_VALUE = {
  1: "tomato",
  2: "creamy",
};

const DOUGH_MODIFIER = {
  1: "small",
  2: "big",
  class1: "light",
  class2: "large",
};

export const MAP_PIZZA = {
  ingredients: INGREDIENTS_MODIFIER,
  sizes: SIZES_MODIFIER,
  sauces: SAUCES_VALUE,
  dough: DOUGH_MODIFIER,
};

export const MOVE = "move";
export const DATA_TRANSFER_PAYLOAD = "payload";

export const INIT_PIZZA = {
  dough: 1,
  sauce: 2,
  size: 2,
  name: "",
  max: 3,
  min: 0,
};

export const ADDRESS = {
  id: 1,
  name: "Дом",
  street: "Невский пр.",
  house: "22",
  apartment: "46",
  comment: "Позвоните, пожалуйста, от проходной",
};
