const arr=[20,60,40,30,10,50];
const firstArr=["a","b","c"];
const secondArr=["d","e","f"];
document.getElementById("arr").innerHTML=arr;
// sort ascending order
arr.sort(function(a,b){return a-b});
document.getElementById("asorted").innerHTML=arr;
// sort descending order
arr.sort(function(a,b){return b-a});
document.getElementById("dsorted").innerHTML=arr;
// displaying
document.getElementById("first").innerHTML=firstArr;
document.getElementById("second").innerHTML=secondArr;
// concat
const concatArr=firstArr.concat(secondArr);
document.getElementById("conc").innerHTML=concatArr;
// slice
document.getElementById('withoutSlice').innerHTML=arr;

document.getElementById('slice').innerHTML=arr.slice(1,4);