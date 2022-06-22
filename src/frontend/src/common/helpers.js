import { MAP_PIZZA } from "@/common/constants";

const normalize = (obj, modifier, key) => {
  switch (key) {
    case "ingredients":
      return {
        ...obj,
        value: obj.id ? modifier[obj.id] : "",
        counter: 0,
      };

    case "dough":
      return {
        ...obj,
        value: obj.id ? modifier[obj.id] : "",
        class: obj.id ? modifier["class" + obj.id] : "",
      };

    default:
      return {
        ...obj,
        value: obj.id ? modifier[obj.id] : "",
      };
  }
};

export const normalizePizza = (pizza) => {
  const normalizePizza = {};
  for (let key in pizza) {
    const pizzaElement = pizza[key];
    const modifier = MAP_PIZZA[key];
    if (modifier) {
      normalizePizza[key] = pizzaElement.map((pizzaElement) =>
        normalize(pizzaElement, modifier, key)
      );
    }
  }
  return normalizePizza;
};

export const normalizeAddons = (addons) => {
  addons.forEach((addon) => (addon.counter = 0));
  console.log(addons);
  return addons;
};

export const calculateSum = (items) => {
  console.log(items);
  if (!items.length) {
    return 0;
  }
  return items
    .map((it) => it.price * it.counter)
    .reduce((acc, it) => acc + it, 0);
};
