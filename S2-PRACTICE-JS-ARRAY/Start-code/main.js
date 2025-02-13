//import {transformToObjects} from './ex1 - trasnform array.js';
//import {updateStudentAge} from './ex2 - array duplication.js';
import { getCartTotalAmount } from './ex3 - shopping card.js';
import { addProductToCart } from './ex3 - shopping card.js';
import { removeProductFromCart } from './ex3 - shopping card.js';
//import { STUDENTS_DATA } from './ex2 - array duplication.js';
import { SHOPPING_CART } from './ex3 - shopping card.js';
import { PRODUCTS } from './ex3 - shopping card.js';

// excersice 1
//console.log(transformToObjects([1, 2, 3]));

// exercise 2
//updateStudentAge("An","Ohhh", 30);
//console.log((STUDENTS_DATA));

//exercise 3
console.log(getCartTotalAmount());
addProductToCart(1);
console.log(SHOPPING_CART);
addProductToCart(2);
console.log(SHOPPING_CART);
removeProductFromCart(1);
console.log(SHOPPING_CART);
removeProductFromCart(2);
console.log(SHOPPING_CART);