/* //addEventListener
var button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML = "Click Me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    console.log("Hello World");
} */

//Date manipulation
var parentdiv = document.createElement("div");
parentdiv.className = "main";
var dateElement = document.createElement("input");
dateElement.setAttribute("type","date");
dateElement.id = "dob";

var button = document.createElement("button");
button.innerHTML = "Click Me";
button.className = "btn btn-primary";
button.addEventListener("click",date_manipulation)

parentdiv.append(dateElement,button);
document.body.append(parentdiv);

var display_ele = document.createElement("div");
display_ele.className = "main1";

function date_manipulation(){
    var input = document.getElementById("dob").value;
    //console.log(input);
    var time_stamp = Date.parse(input);
    //console.log(time_stamp);

    if(time_stamp){
        var inputdate = new Date(time_stamp);
        var currentdate = new Date();
        console.log(inputdate);
        console.log(currentdate);
        var millisecDiff = parseInt(currentdate.getTime()-inputdate.getTime());
        //var millisecDiff = (currentdate.getTime()-inputdate.getTime());
        console.log(millisecDiff);
        var secondsdiff = Mathfloor(millisecDiff,1000);
        console.log(secondsdiff);
        var minutesdiff = Mathfloor(secondsdiff,60);
        console.log(minutesdiff);
        var hoursdiff = Mathfloor(minutesdiff,60);
        console.log(hoursdiff);
        var daydiff = Mathfloor(hoursdiff,24);
        console.log(daydiff);
        var yeardiff = year_diff(inputdate,currentdate);
        console.log(yeardiff);
        var monthdiff = month_diff(inputdate,currentdate);
        console.log(monthdiff);

        //Display the hole value
        display_ele.innerHTML = `
        Given date is ${inputdate}<br>
        Year ${yeardiff}<br>
        Month ${monthdiff}<br>
        Day ${daydiff}<br>
        Hour ${hoursdiff}<br>
        Minute ${minutesdiff}<br>
        Second ${secondsdiff}<br>
        Milli Second ${millisecDiff}
        `

        document.body.append(display_ele);
    }
}
function Mathfloor(value1,value2){
    return Math.floor(value1/value2);
}
function year_diff(value1,value2){
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}
function month_diff(value1,value2){
    var year = year_diff(value1,value2);
    var month = (year*12)+(value2.getMonth()-value1.getMonth());
    return month;
}
