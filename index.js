"use strict";
// const newsPaper = {
//   title: 'FC daily',
//   articles: ['Test1','Heading','String1','Article1'],

//   showArticles() {
//     this.articles.forEach((currentArticle, index) => {
//       console.log(`${this.title} => ${index + 1}: ${currentArticle}`);
//     });
//   },
// };

// newsPaper.showArticles();
//////////////////////////////////
// const square = (n) => n * n;

// const t1 = function () {};
/////////////////////////////////
// function sum(a, b, ...rest) {
//   console.log(rest);
// }

// const sumArrow = (...rest) => {
//   let res = null;
//   rest.forEach((number) => {
//     res += number;
//   });
//   return res;
// };
//////
/////////////
//////////////
////new
const power = (num, exp) => {
  if (exp <= 1) {
    return num;
  }
  return num * power(num, exp - 1);
};

// Factorial
function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
