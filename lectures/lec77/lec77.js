let var1=20;
let var2=30;
let var3="30";
// displaying variables 
document.getElementById("var1").innerHTML=`var1=${var1}`;
document.getElementById("var2").innerHTML=`var2=${var2}`;
document.getElementById("var3").innerHTML=`var3="${var3}"`;
//-------> comparing variables
// equal to 
document.getElementById('equalTo').innerHTML=`var1 == var2 is ${var1==var2}`;
// equal to and equal type
document.getElementById('eqToAndType').innerHTML=`var2 === var3 is ${var2===var3}`;
// no equal to
document.getElementById('notEqual').innerHTML=`var2 != var3 is ${var2!=var3}`;
// not equal to or not equal type
document.getElementById('notEqualorType').innerHTML=`var2 !== var3 is ${var2!==var3}`;
// greater than 
document.getElementById('greaterThan').innerHTML=`var1 > var2 is ${var1>var2}`;
// less than
document.getElementById('lessThan').innerHTML=`var1 < var2 is ${var1<var2}`;
// greater than or equal to
document.getElementById('greaterThanEqual').innerHTML=`var1 >= var2 is ${var1>=var2}`;
// less than or equal to
document.getElementById('lessThanEqual').innerHTML=`var1 <= var2 is ${var1<=var2}`;

//------> logical operators

// and
document.getElementById('and').innerHTML=`var1 > var2 && var1 < var2 is ${var1>var2 && var1<var2}`;
// or
document.getElementById('or').innerHTML=`var1 > var2 || var1 < var2 is ${var1>var2 || var1<var2}`;
// not
document.getElementById('not').innerHTML=`!(var1 > var2) is ${!(var1>var2)}`;
