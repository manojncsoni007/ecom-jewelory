import { v4 as uuid } from "uuid";
import ring from '../../assets/images/ring2.png'
import necklace from '../../assets/images/necklace2.png'
import earring from '../../assets/images/earring.png'
import bangles from '../../assets/images/bangles.png'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Ring",
    img : ring
  },
  {
    _id: uuid(),
    categoryName: "Necklace",
    img : necklace
  },
  {
    _id: uuid(),
    categoryName: "Earring",
    img : earring
  },
  {
    _id: uuid(),
    categoryName: "bangles",
    img : bangles
  }
];
