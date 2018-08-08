//
const watch_radius = 150;
const point_radius = 20;
const degrees_conversion = [90, 84, 78, 72, 66, 60, 54, 48, 42, 36, 30, 24, 18, 12, 6, 0, 354, 348, 342, 336, 330, 324, 318, 312, 306, 300, 294, 288, 282, 276, 270, 264, 258, 252, 246, 240, 234, 228, 222, 216, 210, 204, 198, 192, 186, 180, 174, 168, 162, 156, 150, 144, 138, 132, 126, 120, 114, 108, 102, 96];
const x_offset = 120;
const y_offset = 20;

var watch = document.getElementById("watch");
var point = document.getElementById("animaPoint");
var animation = setInterval(frame,1000);


function frame () {
    var theDate = new Date();
    var degrees = 90;
    var x_pos = 150 + x_offset;
    var y_pos = 0 + y_offset;
    
    document.getElementById("seconds").innerHTML = "Segundos: " + theDate.getSeconds();
    
    degrees = calculateDegrees(theDate.getSeconds());
    
    document.getElementById("degrees").innerHTML = "Grados: " + degrees;
    
    x_pos = calculateXpos(degrees);
    y_pos = calculateYpos(degrees);
    
    document.getElementById("position").innerHTML = "X:" + x_pos + " Y:" + y_pos; 
    
    // coordinate system transformation
    x_pos = x_pos + x_offset + watch_radius - point_radius;
    y_pos = -y_pos + y_offset + watch_radius - point_radius;
    
    point.style.top = y_pos +"px";
    point.style.left = x_pos +"px";

}


function calculateDegrees(seconds) {
    return degrees_conversion[seconds];
}

function calculateXpos(degrees) {
    var res = degrees * (Math.PI/180);
    res = Math.cos(res) * watch_radius;
    return res;
}

function calculateYpos(degrees) {
    var res = degrees * (Math.PI/180);
    res = Math.sin(res) * watch_radius;
    return res; 
}

(function setInitCss () {
    console.log("Me ejecuto automáticamente la primera vez");
    
    if(x_offset!=0){
        watch.style.left = x_offset +"px";
    }
    if(y_offset!=0){
        watch.style.top = y_offset +"px";
    }
    
})();

