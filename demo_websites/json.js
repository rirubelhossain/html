
let text = '{"employees":[' +

'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
const obj = JSON.parse(text) ;
document.getElementById('json').innerHTML = obj.employees[1].firstName ;

a = 10 ;
b = 20 ;
c = a + b ;
console.log(c) ;

var myfun = {name:"Rubel", age:27};
console.log(myfun);
/*How to use switches*/
let day ;
var n = new Date().getDate() ;
switch(n){
    case 0 :
        day = "Sunday" ;
        break ;
    case 1:
        day = "Monday" ;
        break ;
    case 2:
        day = "Tuesday" ;
        break ;
    case 3:
        day = "wednesday" ;
        break ;
    case 4:
        day = "Thursday"; 
        break ;
    case 5:
        day = "Friday";
        break ;
    case 6:
        day = "Saturday" ;
        break ;
    default:
        day = "unknown" ;
}
document.getElementById('day').innerHTML = "Today is " + day ; 


let x = 100 ;
switch(x){
    case (101-1): document.getElementById('just').innerHTML = "that is right" ;
}

var a = "Rubel Hossain";
var len = a.length ;
text = "";
for(let i = 0 ; i < len ; ++i)
{   
    text += a[i];
    console.log(a[i]);
}
document.getElementById('dep').innerHTML = "This is my full name = "+text ;

console.log(len) ;

const person1 = {
    fname: "Rubel" ,
    lname: " Hossain" ,
    age : 27 
};
for(let x in person1)
{
    text += person1[x];
}
document.getElementById('obj').innerText = text +"\n";

document.getElementById('oj').innerHTML = JSON.stringify(person1);
document.scripts ;

var k = document.getElementById('oj') ;
var l = document.getElementsByTagName('h2') ;
document.getElementById('p').innerHTML = "just used tag " + l ;



