// testing language and communications
var a=5;
var b=1;
var tipo = {firstName:"Adrian", lastName:"Campa", age:30, birthyear: function(){return 2018-this.age;}};    // Object
var cars = ["Saab", "Volvo", "BMW"];    // Array
var bom_output = "";

document.getElementById("fparagraph").style.color = "red";
console.log(a+b);
console.log(tipo.firstName + " " + tipo["lastName"] + " nacido en el año "+tipo.birthyear());
console.log(cars[1]);

var numbers = [4, 9, 16, 25];
console.log(numbers);

numbers.forEach(incrementados);
console.log(numbers);

// json data storage
var myObj, myJSON, text, obj;
//Storing data:
myObj = { name: "adrian", age: 30, city: "la pola" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("jsonData").innerHTML = obj.name;

// json from file
function loadJson() {
    var jhttp = new XMLHttpRequest();
    jhttp.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200) {
          displayJsonInfo(this);
      }  
    };
    jhttp.open("GET", "json_demo.txt", true);
    jhttp.send();
}
function displayJsonInfo(json){
    var jsonTxt= json.responseText;
    console.log("aqui");
    console.log(jsonTxt);
    var jsonObj = JSON.parse(jsonTxt);
    document.getElementById("jsonData2").innerHTML = jsonObj.pets[0].name;
}


// ajax
function loadXml() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayXmlInfo(this);
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}
function displayXmlInfo(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("ajaxData").innerHTML = table;
}  
// aux functions
function outputBOM () {
    console.log("hello?");
    var bom_output = "";
    bom_output += screen.width;
    document.getElementById("bom").innerHTML = bom_output; 
}
function alertaMaxima () {
    alert("maxima");
}
function incrementados(value, index, array) {
    array[index]+=2;
}
function buttonFunction(){
    //window.alert("quieto ahí!");
    window.alert(window.plus);
}