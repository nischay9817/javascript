// let marks=[97,98,99,96,95];
// console.log(marks[0]);
// console.log(marks.length);
// let heroes=["ironman","hulk","thor","batman"];
// console.log(heroes);
// console.log(heroes.length);
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx]);
// }
// //for of
// for(let arr of marks){
//     console.log(arr)
// }
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
//     sum=marks[idx]+sum;
// }
// console.log(sum);
// let studentNumber=marks.length;
// console.log(studentNumber);
// let average=sum/studentNumber;
// console.log(average);
// let prices=[250,645,300,900,50];
// let i=0;
// for(let val of prices){
//     console.log(`the prices of ${i}=${val}`);
//     let offer=val/10;
//     prices[i]=prices[i]-offer;
//     console.log(`the new value is ${i}=${prices[i]}`);
//     i++;
// }
//splice method
// let number=[1,2,3,4,5,6,7,8];
// number.splice(2,2,101,102);
// console.log(number);
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift("Bloomberg");
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);