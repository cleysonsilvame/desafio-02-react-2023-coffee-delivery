import expressoTradicional from "../assets/coffees/expresso-tradicional.png";
import expressoAmericano from "../assets/coffees/expresso-americano.png";
import expressoCremoso from "../assets/coffees/expresso-cremoso.png";
import expressoGelado from "../assets/coffees/expresso-gelado.png";
import cafeComLeite from "../assets/coffees/cafe-com-leite.png";
import latte from "../assets/coffees/latte.png";
import capuccino from "../assets/coffees/capuccino.png";
import macchiato from "../assets/coffees/macchiato.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import chocolateQuente from "../assets/coffees/chocolate-quente.png";
import cubano from "../assets/coffees/cubano.png";
import havaiano from "../assets/coffees/havaiano.png";
import arabe from "../assets/coffees/arabe.png";
import irlandes from "../assets/coffees/irlandes.png";

export const coffees = [
  {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    src: expressoTradicional,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    src: expressoAmericano,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    src: expressoCremoso,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    src: expressoGelado,
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
  },
  {
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    src: cafeComLeite,
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    src: latte,
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    src: capuccino,
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    src: macchiato,
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    src: mocaccino,
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    src: chocolateQuente,
    price: 9.9,
    tags: ["Especial", "Com leite"],
  },
  {
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    src: cubano,
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    src: havaiano,
    price: 9.9,
    tags: ["Especial"],
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    src: arabe,
    price: 9.9,
    tags: ["Especial"],
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    src: irlandes,
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
  },
];
