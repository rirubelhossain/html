var number = 10 ;
var number1 = 20 ;
var result = number + number1 ;
document.getElementById('result').innerHTML = "The result is = " + result ;
document.getElementById('hl').innerHTML = "Hello World";

const person ={
    Name: 'Rubel' ,
    age : 27 ,
    dept: 'cse',
    fun : function()
    {
        return this.Name + " age is "+ this.age + " and department is " + this.dept ;
    }
};
const info ={
    studentName: 'Rubel',
    lastName : 'Hossain',
    studentId : 1516310326 ,
    department: 'CSE',
    studentfunction : function(){
        return "The student name is " +this.studentName +" "+this.lastName+" and id is "+this.studentId+" and department is "+this.department ;
    }
};
document.getElementById('che').innerHTML = person.fun();
document.getElementById('cse').innerHTML = info.studentfunction();

var hello ;
hello = function(){
    return"Hello World";
}
document.getElementById('hello').innerHTML = hello();

var funn ;

funn = ()=>{
    var a , b , c ;
    a = 10 ;
    b = 20 ;
    c = a + b ;
    return c ;
}
document.getElementById('res').innerHTML = "The additional result = " + funn();
class yer{
    constructor(name,result){
        this.name = name ;
        this.result = result ;
    }
}   
let catch_ = new yer('Rubel',3.55);
document.getElementById('cl').innerHTML = catch_.name + " and " + catch_.result ;