// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);
// let num=prompt("enter the number");
// let number=parseInt(num);
// if(number%2==0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }
// let mode=prompt("which color do you like");
// let color;
// if(mode==="dark"){
//     color="black";
// }
// else if(mode==="pink"){
//     color="pink";
// }
// else if(mode==="blue"){
//     color="blue";
// }
// else{
//     color="white";
// }
// console.log(color);
//ternary operator
// let age=prompt("enter the number of age: ");
// let myAge=parseInt(age);
// let a=myAge>18?"adult":"not adult";
// console.log(a);
// let a=prompt("enter the number: ");
// let num=parseInt(a);
// let result=num%5==0?"multiple of 5":"not multiple of 5";
// console.log(result);
let a=prompt("enter ypur percentage: ");
let score=parseInt(a);
let grade;
if(score>=80 && score<100){
    grade='A';
}
else if(score>=70 && score<80){
    grade='B';
}
else if(score>=60 && score<70){
    grade='C';
}
else if(score>=50 && score<60){
    grade='D';
}
else{
    grade='F';
}
console.log(grade);
