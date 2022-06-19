import { MAP_PIZZA } from "@/common/constants";

const normalize = (obj, modifier, key) => {
  switch (key) {
    case "ingredients":
      return {
        ...obj,
        value: obj.id ? modifier[obj.id] : "",
        counter: 0,
        disabledUp: true,
        disableDown: false,
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
