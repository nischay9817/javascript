//function
// function myFunction(){
//     console.log("welcome to apna college");
//     console.log("we are learning js:)");
// }
// myFunction();
// function myFunction(msg){
//     console.log(msg)
// }
// myFunction("I love JS");
//multiple input
// function myFunction(msg, num){
//     console.log(msg, num);
// }
// myFunction("I love JS", 100);
// function sum (x,y){
//     console.log(x+y);
// }
// sum(1,2);
// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);
//arrow function
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(5,4);
// const multiply= (x,y)=>{
//     console.log(x*y);
// }
// multiply(5,5);
// function vowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char ==="u"){
//             count++
//         }
//     }
//     console.log(count);
// }
// vowels("hello");
// const vowelCount=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowelCount("Nischay Shrestha");
//forEach loop
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });
// let arr= [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });
// let arr = [55,67,87,98];
// arr.map((val)=>{
//     console.log(val);
// })
//creating new array using map method
// let arr=[1,2,3,4,5];
// let  newArr=arr.map((val)=>{
//     return val*val;
// })
// console.log(newArr);
// let arr=[1,2,3,4];
// const output=arr.reduce((previousVal, currentVal)=>{
//     return previousVal+currentVal;
// });
// console.log(output);
// let marks=[99,86,95,70,50,99,100];
// let studentMarks=marks.filter((val)=>{
//     return val>90;
// })
// console.log(studentMarks);
// let n=prompt("enter the number: ");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// // console.log(arr);
// const sumOutput=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sumOutput);
// const productOutput=arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log(productOutput);