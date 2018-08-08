// Analogic trendy wWatch v0.1

const watch_radius = 150;
const seconds_point_radius = 20;
const x_offset = 250;
const y_offset = 100;

const degrees_conversion = [90, 84, 78, 72, 66, 60, 54, 48, 42, 36, 30, 24, 18, 12, 6, 0, 354, 348, 342, 336, 330, 324, 318, 312, 306, 300, 294, 288, 282, 276, 270, 264, 258, 252, 246, 240, 234, 228, 222, 216, 210, 204, 198, 192, 186, 180, 174, 168, 162, 156, 150, 144, 138, 132, 126, 120, 114, 108, 102, 96];

const hours_conversion = [90, 60, 30, 0, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30, 0, 330, 300, 270, 240, 210, 180, 150, 120];

var watch = document.getElementById("watch");
var seconds_point = document.getElementById("secondsPoint");
var minutes_point = document.getElementById("minutesPoint");
var hours_point = document.getElementById("hoursPoint");
var animation = setInterval(secondsFrame,1000);

function secondsFrame () {
    var the_date = new Date();
    var degrees = undefined;
    var x_pos = undefined;
    var y_pos = undefined;
    
    degrees = degrees_conversion[the_date.getSeconds()];
    x_pos = calculateXpos(degrees, 0);
    y_pos = calculateYpos(degrees, 0);
        
    // coordinate system transformation from circle center to absolute html
    x_pos = x_pos + x_offset + watch_radius - seconds_point_radius;
    y_pos = -y_pos + y_offset + watch_radius - seconds_point_radius;
    
    // update seconds position
    seconds_point.style.top = y_pos +"px";
    seconds_point.style.left = x_pos +"px";
    
    if (degrees === 90) {
        updateMinute();
    }
    
    // update output data
    document.getElementById("time").innerHTML = the_date.getHours() + ":" + the_date.getMinutes() + ":" + the_date.getSeconds();
    document.getElementById("degrees").innerHTML = "Degrees in sphere: " + degrees +"º";
    document.getElementById("position").innerHTML = "X-abs-pos: " + x_pos.toFixed(2) + "px <br /> Y-abs-pos: " + y_pos.toFixed(2) + "px";   
}

function updateMinute () {
        
    var the_date = new Date();
    var degrees = undefined;
    var x_pos = undefined;
    var y_pos = undefined;
    
    degrees = degrees_conversion[the_date.getMinutes()];
    x_pos = calculateXpos(degrees, 50);
    y_pos = calculateYpos(degrees, 50);
        
    // coordinate system transformation from circle center to absolute html
    x_pos = x_pos + x_offset + watch_radius - seconds_point_radius;
    y_pos = -y_pos + y_offset + watch_radius - seconds_point_radius;
    
    // update seconds position
    minutes_point.style.top = y_pos +"px";
    minutes_point.style.left = x_pos +"px";
    
    if(degrees===0)
        updateHour();
}

function updateHour () {
            
    var the_date = new Date();
    var degrees = undefined;
    var x_pos = undefined;
    var y_pos = undefined;
    
    degrees = hours_conversion[the_date.getHours()];
    x_pos = calculateXpos(degrees, 100);
    y_pos = calculateYpos(degrees, 100);
        
    // coordinate system transformation from circle center to absolute html
    x_pos = x_pos + x_offset + watch_radius - seconds_point_radius;
    y_pos = -y_pos + y_offset + watch_radius - seconds_point_radius;
    
    // update seconds position
    hours_point.style.top = y_pos +"px";
    hours_point.style.left = x_pos +"px";
}

function calculateDegrees(seconds) {
    return degrees_conversion[seconds];
}

function calculateXpos(degrees, offset) {
    var res = degrees * (Math.PI/180);
    res = Math.cos(res) * (watch_radius + offset);
    return res;
}

function calculateYpos(degrees, offset) {
    var res = degrees * (Math.PI/180);
    res = Math.sin(res) * (watch_radius + offset);
    return res; 
}

(function setInitCss () {
    console.log("Automatically executed for the first time");
    if(x_offset!=0){
        watch.style.left = x_offset +"px";
    }
    if(y_offset!=0){
        watch.style.top = y_offset +"px";
    }
    
    secondsFrame ();
    updateMinute ();
    updateHour ();
    
})();

