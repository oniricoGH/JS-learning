var a=5;
var b=1;
var tipo = {firstName:"Adrian", lastName:"Campa", age:30, birthyear: function(){return 2018-this.age;}};    // Object
var cars = ["Saab", "Volvo", "BMW"];    // Array

document.getElementById("fparagraph").style.color = "red";
console.log(a+b);
console.log(tipo.firstName + " " + tipo["lastName"] + " nacido en el año "+tipo.birthyear());
console.log(cars[1]);

var numbers = [4, 9, 16, 25];
console.log(numbers);

numbers.forEach(incrementados);
console.log(numbers);

function incrementados(value, index, array) {
    array[index]+=2;
}

function buttonFunction(){
    //window.alert("quieto ahí!");
    window.alert(window.plus);
}