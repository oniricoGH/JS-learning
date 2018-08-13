// @ Adrián Campa Gafo
// v0.1 - Analogic trendy wWatch 
// v0.2 - Objects and improvements

// constants
const secMinDegConv = [90, 84, 78, 72, 66, 60, 54, 48, 42, 36, 30, 24, 18, 12, 6, 0, 354, 348, 342, 336, 330, 324, 318, 312, 306, 300, 294, 288, 282, 276, 270, 264, 258, 252, 246, 240, 234, 228, 222, 216, 210, 204, 198, 192, 186, 180, 174, 168, 162, 156, 150, 144, 138, 132, 126, 120, 114, 108, 102, 96];

const hourDegConv = [90, 60, 30, 0, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30, 0, 330, 300, 270, 240, 210, 180, 150, 120];

// objects
var watch = {
    radius : 150,  // fixed
    hElem : function() { return document.getElementById("watch"); }, 
    
    topPos : function() { return 150; },
    leftPos : function() { 
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;
        return 0.5*x - this.radius;
    },
    
    setTopPos : function() {this.hElem().style.top = this.topPos() +"px";},
    
    setLeftPos : function() {this.hElem().style.left = this.leftPos() +"px";},
};
var secondHand = new Hand (20, 0, 0, document.getElementById("secondPoint"), 0, watch);
var minuteHand = new Hand (20, 0, 0, document.getElementById("minutePoint"), 100, watch);
var hourHand = new Hand (20, 0, 0, document.getElementById("hourPoint"), 50, watch);

// bucle and screen event handler
var animation = setInterval(updateTime, 1000);

//////////////////////////////////////////////////////

// hand constructor
function Hand(elementRadius, currentDegree, currentTime, docElement, orbitOffset, watch) {
    this.elemRadius = elementRadius;
    this.curDeg = currentDegree;
    this.curTime = currentTime;
    this.hElem = docElement;
    this.orbitOffset = orbitOffset;
    this.watch = watch;
        
    this.leftPos = function () {
        return (Math.cos(this.curDeg * (Math.PI/180)) * (this.watch.radius+this.orbitOffset)) + this.watch.leftPos() + this.watch.radius - this.elemRadius;
    };
    
    this.topPos = function () {
        return (Math.sin(this.curDeg * (Math.PI/180)) * (this.watch.radius+this.orbitOffset)*(-1)) + this.watch.topPos() + this.watch.radius - this.elemRadius;
    };
}

// exec every sec
function updateTime() {
    var theDate = new Date();
    updateHand(secondHand, theDate.getSeconds(), secMinDegConv[theDate.getSeconds()]);
        
    updateHand(minuteHand, theDate.getMinutes(), secMinDegConv[theDate.getMinutes()]);

    updateHand(hourHand, theDate.getHours(), hourDegConv[theDate.getHours()]);
    
    updateOutputInfo();
}

function updateHand(hand, time, deg) {
    hand.curTime = time;
    hand.curDeg = deg;
    if(hand.hElem === null) {
        console.log("Element does not exist in HTML");
        return;
    }
    
    hand.hElem.style.top = hand.topPos() + "px";
    hand.hElem.style.left = hand.leftPos() + "px";
}

function updateOutputInfo() {
    
    document.getElementById("plainTime").innerHTML = hourHand.curTime + ":" + addZero(minuteHand.curTime) + ":" + addZero(secondHand.curTime);
    
    document.getElementById("sPos").innerHTML = "* Second-Hand * <br /> Seconds: "+ secondHand.curTime + ", Deg: " + secondHand.curDeg + "<br /> X= "+ secondHand.leftPos().toFixed(2) + ", Y= " + secondHand.topPos().toFixed(2);
    
    document.getElementById("mPos").innerHTML = "* Minute-Hand * <br /> Minutes: "+ minuteHand.curTime + ", Deg: " + minuteHand.curDeg + "<br /> X= "+ minuteHand.leftPos().toFixed(2) + ", Y= " + minuteHand.topPos().toFixed(2);
    
    document.getElementById("hPos").innerHTML = "* Hour-Hand * <br /> Hours: "+ hourHand.curTime + ", Deg: " + hourHand.curDeg + "<br /> X= "+ hourHand.leftPos().toFixed(2) + ", Y= " + hourHand.topPos().toFixed(2);
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function setInit () {        
    watch.setTopPos();
    watch.setLeftPos();
    updateTime();
}

/* NOT WORKING
function togglInfo () {
    var info = document.getElementById("moreInfoSection");
    console.log(info.style.display);
    
    if (info.style.display === "none") {
        info.style.display = "block";
    }
    else if (info.style.display === "block") {
        info.style.display = "none";

    }
}
*/

setInit();
window.addEventListener('resize', setInit);


