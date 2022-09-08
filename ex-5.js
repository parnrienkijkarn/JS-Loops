let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here
//Part 1
// let total = orders[0];
// let i = 0;
// while (i < orders.length) {
//   if (orders[i] >= total) {
//     total = orders[i];
//     i++;
//   } else {
//     i++;
//   }
// }
// console.log(`Order id: ${total.id}, Total Price: ${total.productPrice}`);

// For of loop
let total = 0;
let orderId = 0;
let sum = 0;
for (let find of orders) {
  let newTotal = find.productPrice * find.productQuantity;
  if (total < newTotal) {
    total = newTotal;
    orderId = find.id;
  }
  sum = sum + newTotal;
}
//Part 1
console.log(`Order id: ${orderId}, Total Price: ${total}`);
//Part 4
console.log("Total: " + sum);

// Part 2
let birdieSum = 0;
for (let find of orders) {
  let findBirdie = find.customerName;
  if (findBirdie === "Birdie Shepland") {
    birdieSum = find.productPrice * find.productQuantity;
  }
}
console.log(`Total price is ${birdieSum}`);

// Part 3
let jcbCard = [];
for (let find of orders) {
  let findJcb = find.creditCardType;
  if (findJcb == "jcb") {
    findJcb = find;
    jcbCard.push(findJcb);
  }
}
console.log(jcbCard);


 // ข้อ 1 แบบ for loop ปกติ 
// let maxProductPrice = orders[0].productPrice;
// let orderId = [];
// for (let i = 0; i < orders.length; i++){
//   if (maxProductPrice < orders[i].productPrice){
//     maxProductPrice = orders[i].productPrice;
//     orderId = orders[i].id;
// }
// }
// console.log("Order id: " + orderId + ", Total Price: " + maxProductPrice )

// NUMBER 2
// let birdiePurchseAmount;
// for(let i = 0; i<orders.length; i++){
//   let customerName = orders[i].customerName;
//   let productPrice = orders[i].productPrice;
//   let productQuantity = orders[i].productQuantity;

//   if(customerName === "Birdie Shepland"){
//       birdiePurchseAmount = productPrice * productQuantity;
//       break;
//   }
// }
// console.log("Total Price is " + birdiePurchseAmount)

// NUMBER 3
// let jcbOrders = []

// for(let i = 0; i<orders.length; i++ ){
//   let creditCardType = orders[i].creditCardType;

//   if(creditCardType == "jcb"){
//       jcbOrders.push(orders[i])
//   }
// }
// console.log(jcbOrders)

//Number 4

// let totalOrderPrices = 0

// for(let i=0; i<orders.length;i++){

//     let productPrice = orders[i].productPrice;
//     let productQuantity = orders[i].productQuantity;

//     totalOrderPrices =  totalOrderPrices + (productPrice * productQuantity)
// }

// console.log("Total : " + totalOrderPrices)