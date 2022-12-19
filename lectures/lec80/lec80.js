let array=[1,2,3,4,5,6,7,8,9,10];
// for loop
let container="";
for(let i=0;i<array.length;i++){
    container+=array[i]+"<br>";
}
document.getElementById("forLoopResult").innerHTML=container;


// -----> for in loop
let anObject={name:"John",age:30,city:"New York"};
let container2="";
for(let x in anObject){
    container2+=anObject[x]+" ";
}
document.getElementById("forInLoopResult").innerHTML=container2;