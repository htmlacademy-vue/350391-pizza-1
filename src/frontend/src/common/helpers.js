import { MAP_PIZZA } from "@/common/constants";

const normalize = (obj, modifier) => {
  return {
    ...obj,
    value: obj.id ? modifier[obj.id] : "",
  };
};

export const normalizePizza = (pizza) => {
  const normalizePizza = {};
  for (let key in pizza) {
    const pizzaElement = pizza[key];
    const modifier = MAP_PIZZA[key];
    if (modifier) {
      normalizePizza[key] = pizzaElement.map((pizzaElement) =>
        normalize(pizzaElement, modifier)
      );
    }
  }
  return normalizePizza;
};
