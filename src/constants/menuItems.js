import cupCakeRed from "../assets/images/cupcake1.png";
import brownCupCake from "../assets/images/browncupcake.png";
import cupCakeSet from "../assets/images/cupcakeset.png";

import assortedCake from "../assets/images/assortedcake.png";
import chocolateCake from "../assets/images/chocolate-cake.png";
import cakeOnPlate from "../assets/images/cakeonplate4.png";

import doughnut from "../assets/images/dougnuts.png";
import brownCakeSlice from "../assets/images/cakeslicebrown.png";
import brownBread from "../assets/images/brownbread.png";

const menuItems = [
  {
    title: "Cakes",
    items: [
      {
        title: "Amet Consecteur",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt veritatis minus .",
        price: 400,
        img: cakeOnPlate,
      },
      {
        title: "Felicion Amadara",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 650,
        img: chocolateCake,
      },
      {
        title: "Dominico Angelica",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt veritatis minus .",
        price: 900,
        img: assortedCake,
      },
    ],
  },

  {
    title: "CupCakes",
    items: [
      {
        title: "Testacara Amadara",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 56,
        img: cupCakeRed,
      },
      {
        title: "Pesti Alouski",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 320,
        img: cupCakeSet,
      },
      {
        title: "Paula Viendi",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 117,
        img: brownCupCake,
      },
    ],
  },

  {
    title: "Breads & Doughnuts ",
    items: [
      {
        title: "Tiestyi",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 80,
        img: doughnut,
      },
      {
        title: "Breado Browndo",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 150,
        img: brownBread,
      },
      {
        title: "Senta Fatusca",
        description:
          "Voluptas sunt veritatis minus Lorem ipsum, dolor sit amet consectetur adipisicing elit espectus ",
        price: 220,
        img: brownCakeSlice,
      },
    ],
  },
];

export default menuItems;
