// listening input
let conditionVar=20;
document.getElementById('condition').innerHTML =
 `Condition:  if(userInput>${conditionVar}) `;
function listenToInput() {
   
    let userinput = document.getElementById("userInput").value;
    // if 
    if(userinput>conditionVar){
        document.getElementById("result").innerHTML = 
        `${userinput} is greater than ${conditionVar} (True Condition - if executed)`;
    }
    // else
    else{
        document.getElementById("result").innerHTML =
         `${userinput} is less than ${conditionVar} (False Condition - Else executed)`;
    }
}



// else if 


function listenToInput2() {
    let userinput = document.getElementById("userInput2").value.toLowerCase();
    // using lowerCase() to convert userinput to lower case
    // if condition 
    if(userinput=="a"){
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Grade is Amazing 😍 (True Condition - if executed)`;
    }
    else if(userinput=="b"){
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Grade is Good 😎 (True Condition - 2nd else if executed)`;
    }
    else if(userinput=="c"){
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Grade is Average 😐 (True Condition - 3rd else if executed)`;
    }
    else if(userinput=="d" || userinput=="e"){
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Grade is Poor 😕 (True Condition - 4th else if executed)`;
    }
    else if(userinput=="f"){
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Grade is Fail 😭 (True Condition - 5th else if executed)`;
    }
    else{
        document.getElementById("result2").innerHTML = 
        `'${userinput}' Invalid Choice (False Condition - else executed)`;
    }
}