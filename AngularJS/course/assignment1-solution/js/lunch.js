(function (){
    
'use strict';
    
angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
    
function LunchCheckController($scope) {
    // ALWAYS init variables, otherwise is undefined
    $scope.outputMessage = "Please enter data first (spaces are not considered as list elements)";
    $scope.lunchItems = [];
    $scope.outMsgStyle = {color: 'red'};
    $scope.inputStyle = {borderColor: 'red'};
    
    
    $scope.checkLunch = function () {
        popEmptyElements();
        
        if($scope.lunchItems.length>0) {
            if($scope.lunchItems.length>3)
                $scope.outputMessage = "TOO MUCH FOOD!";
            else
                $scope.outputMessage = "ENJOY!";
            $scope.outMsgStyle = {color: 'green'};
            $scope.inputStyle = {borderColor: 'green'};
        }else {
            $scope.outputMessage = "Please enter data first (spaces are not considered as list elements)";
            $scope.outMsgStyle = {color: 'red'};
            $scope.inputStyle = {borderColor: 'red'};
        }
    }
    
    function popEmptyElements() {
        for(var i=0;i<$scope.lunchItems.length;){
            // remove spaces and if length==0 then no word
            if (!$scope.lunchItems[i].replace(/\s/g, '').length) {
                // the item is deleted so all elements decreases the index automatically, so not necessary increase for index
                $scope.lunchItems.splice(i,1); 
            }
            else
                // manual increase index
                i++;
        }       
    }
}
})();


//!function(){"use strict";function e(e){e.outputMessage="Please enter data first (spaces are not considered as list elements)",e.lunchItems=[],e.outMsgStyle={color:"red"},e.inputStyle={borderColor:"red"},e.checkLunch=function(){!function(){for(var t=0;t<e.lunchItems.length;)e.lunchItems[t].replace(/\s/g,"").length?t++:e.lunchItems.splice(t,1)}(),e.lunchItems.length>0?(e.lunchItems.length>3?e.outputMessage="TOO MUCH FOOD!":e.outputMessage="ENJOY!",e.outMsgStyle={color:"green"},e.inputStyle={borderColor:"green"}):(e.outputMessage="Please enter data first (spaces are not considered as list elements)",e.outMsgStyle={color:"red"},e.inputStyle={borderColor:"red"})}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();