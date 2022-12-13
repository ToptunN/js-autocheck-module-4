
// =====№4==============
//  Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// // Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);}
      
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
          
//   }
//   }
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order('four Cheeze',makePizza,onOrderError))

    
// ====№5====

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.


//function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
  // Change code below this line

//   orderedItems.forEach(element => {
//     totalPrice += element
//   });
//    // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([1,2,5,4]))

// ========№6==========

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  // Change code below this line

//   numbers.forEach(element => {
//     if(element>value)
//     filteredNumbers.push(element)
//   });
  
//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([2,4,20,7], 10))


// =====№7======

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// Change code below this line

//   firstArray.forEach(element => {
//     if (secondArray.includes(element))
//     commonElements.push(element)
//   });
  
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1,2,4,6,7], [4,3,6,7,0,9]))

// =====№8======

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// const calculateTotalPrice =(quantity, pricePerItem)=> {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(4, 20))

// =====№9======

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// РЕФАКТОРИНГ:
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(4, 20))


// =====№10======

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// РЕФАКТОРИНГ===

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([2,5,6,7,0]))


// ====№11====

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


// РЕФАКТОРИНГ===


// const filterArray = (numbers, value)=> {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value){
//       filteredNumbers.push(number);
//     }})

//     // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([2,4,5,6,7], 6))
// console.log(filteredNumbers([]))
// чому не виводиться filteredNumbers

// =====№12====

// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// =====РЕФАКТОРИНГ====

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) { commonElements.push(element) };
//   });
//   return commonElements;
//   console.log(commonElements);
// }
//   // Change code above this line
  
//   console.log(getCommonElements([3, 8, 4], [2, 4, 6]));


// ========№13===

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// ==РЕФАКТОРИНГ===

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = []
//   numbers.forEach((number)=> {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//       else {newArray.push(number);}
//          });
//   return newArray;
//   }
//   // Change code above this line

// console.log(changeEven([4,14,28],2))
// console.log(changeEven([21,12,15,14,18,10,18,15,24,23,20,6,16,20,19,7,14,10,17], 19 ))
// буде [21,31,15,33,37,29,37,15,43,23,39,25,35,39,19,7,33,29,17]


// ===№14===
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);
// console.log(planets);


// ===№15===

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)


// ===№16===

// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres)


// ====№17====

// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів(властивість name) з масиву об'єктів в параметрі users.

// Change code below this line
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = users => users.map(user => user.name);

//   // Change code above this line
// console.log(getUserNames(users));


// Change code below this line



// ====№18====
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = users => users.map(user => user.email)
// console.log(getUserEmails(users))