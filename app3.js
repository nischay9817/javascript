//for-of loop
// let name="Nischay";
// for(let val of name){
//     console.log(val);
// }
//for-in loop
// let student={
//     name:'Nischay Shrestha',
//     class: 5,
//     cgpa: 9.9,
//     isPass: true
// }
// for(let key in student){
//      console.log(student[key]);
// }
//print all even number
// let i;
// for(i=0;i<=100;i=i+2){
//     console.log(i);
// }
// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log(num);
//     }
//     else{

//     }
// }
//creating the number gussing game
// let gameValue=25;
// let a=prompt("Guess any number");
// let num=parseInt(a);
// if(num===gameValue){
//     console.log("you guess correct number");
// }
// else{
//     console.log("the number is incorrect");

// }
// let gameNum = 25;
// let gameInput= prompt("enter the correct number: ");
// while(gameInput!=gameNum){
//     gameInput=prompt("you have entered wrong number. enter again: ");
// }
// console.log("Congratulaion, you have entered correct number: ");
//template literals
// let obj={
//     item:'pen',
//     price:10,
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
let userName=prompt("enter your username");
let result="@"+userName+userName.length;
console.log(result);