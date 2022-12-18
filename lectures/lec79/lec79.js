let getDay = new Date().getDay();
// switch statement
switch (getDay){
    case 0:
        document.getElementById('result').innerHTML = "Sunday";
        break;
    case 1:
        document.getElementById('result').innerHTML = "Monday";
        break;
    case 2:
        document.getElementById('result').innerHTML = "Tuesday";
        break;
    case 3:
        document.getElementById('result').innerHTML = "Wednesday";
        break;
    case 4:
        document.getElementById('result').innerHTML = "Thursday";
        break;
    case 5:
        document.getElementById('result').innerHTML = "Friday";
        break;
    case 6:
        document.getElementById('result').innerHTML = "Saturday";
        break;
    default:
        document.getElementById('result').innerHTML = "Error";
        break;
}