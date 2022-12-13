const myArray = [1, 2, 3, 4, 5];
const  myArray2 = ["e", "a", "c", "b", "d"];

document.getElementById('array1').innerHTML=`Array = [${myArray}]`;
document.getElementById('array2').innerHTML=`Array2 = [${myArray2}]`;
document.getElementById('vof').innerHTML=myArray.valueOf();
// pop() method
myArray.pop();
document.getElementById('pop').innerHTML=myArray;
// push() method
myArray.push(6);
document.getElementById('push').innerHTML=myArray;
// shift() method
myArray.shift();
document.getElementById('shift').innerHTML=myArray;
//delete() method
delete myArray[0];
document.getElementById('delete').innerHTML=myArray;
// splice() method
myArray.splice(0,2,100,101);
document.getElementById('splice').innerHTML=myArray;
// sort() method
myArray2.sort();
document.getElementById('sort').innerHTML=myArray2;
// reverse() method
myArray2.reverse();
document.getElementById('reverse').innerHTML=myArray2;