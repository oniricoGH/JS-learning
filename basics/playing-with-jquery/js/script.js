//$(document).ready(function(){  // executed after page is loaded, same as below

//jQuery(document).ready(function(){});


$(function(){
    console.log("hello");
    
    
    $("button").click(function(){
        console.log($("p").css("display"));
        // directly shows/hides the selected element
        //$("p").toggle();
        
        console.log($("p").text());
        $("p").html("Te <strong>cambio</strong> por esto");
        
        $("p").css("color", "red");
    });
    
//$.noConflict(); //release $ value ($=jQuery)
});