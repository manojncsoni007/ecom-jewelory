import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Crystal Silver Necklace",
    image:"https://cdn.shopify.com/s/files/1/0057/3515/3754/products/Blue_Square_Silver_Swarovski-Necklace_1_540x.jpg?v=1622049111" ,
    metal: "silver",
    price: 5600,
    category: "necklace",
    rating: 4,
    inStock:true
  },
  {
    _id: uuid(),
    name: "KALKI GOLD EARRINGS",
    image:"https://cfcdn20.candere.com/media/catalog/product/cache/1/image/450x450/9df78eab33525d08d6e5fb8d27136e95/g/e/ge00579_1.jpeg?v=1598677880" ,
    metal: "gold",
    price: 35000,
    category: "earring",
    rating: 3,
    inStock:true
  },
  {
    _id: uuid(),
    name: "Platinum Bracelate",
    image:"https://cfcdn20.candere.com/media/catalog/product/cache/1/platinum_default/400x400/9df78eab33525d08d6e5fb8d27136e95/c/p/cp00039_1.jpg?v=1520554529" ,
    metal: "platinum",
    price: 85000,
    category: "bangles",
    rating: 4,
    inStock:true
  },
  {
    _id: uuid(),
    name: "Gold Ring",
    image:"https://cfcdn20.candere.com/media/catalog/product/cache/1/yellow_gold_default/400x400/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00103_1.jpg?v=1520510356" ,
    metal: "gold",
    price: 15000,
    category: "ring",
    rating: 2,
    inStock:false
  },
];
