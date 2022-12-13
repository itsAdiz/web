const array1 = [1, 2, 3, 4, 5];
document.getElementById('array').innerHTML = `[${array1}]`;
// checking type 
document.getElementById('typeOf').innerHTML = typeof array1;
//isArray
document.getElementById('isArray').innerHTML = Array.isArray(array1);