//(function (){
//    
//'use strict';
//    
//angular.module('LunchCheck',[])
//    .controller('LunchCheckController', LunchCheckController);
//
//LunchCheckController.$inject = ['$scope'];
//    
//function LunchCheckController($scope) {
//    // ALWAYS init variables, otherwise is undefined
//    $scope.outputMessage = "";
//    $scope.lunchItems = [];
//        
//    $scope.checkLunch = function () {
//        popEmptyElements();
//        if($scope.lunchItems.length>3)
//            $scope.outputMessage = "too much!";
//        else if($scope.lunchItems.length>0)
//            $scope.outputMessage = "enjoy!";
//        else
//            $scope.outputMessage = "";
//    }
//    
//    function popEmptyElements() {
//        for(var i=0;i<$scope.lunchItems.length;){
//            // remove spaces and if length==0 then no word
//            if (!$scope.lunchItems[i].replace(/\s/g, '').length) {
//                // the item is deleted so all elements decreases the index automatically, so not necessary increase for index
//                $scope.lunchItems.splice(i,1); 
//            }
//            else
//                // manual increase index
//                i++;
//        }       
//    }
//}
//})();


!function(){"use strict";function t(t){t.outputMessage="",t.lunchItems=[],t.checkLunch=function(){!function(){for(var e=0;e<t.lunchItems.length;)t.lunchItems[e].replace(/\s/g,"").length?e++:t.lunchItems.splice(e,1)}(),t.lunchItems.length>3?t.outputMessage="too much!":t.lunchItems.length>0?t.outputMessage="enjoy!":t.outputMessage=""}}angular.module("LunchCheck",[]).controller("LunchCheckController",t),t.$inject=["$scope"]}();