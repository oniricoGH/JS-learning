//// no local variables in global scope (iife) inmmediatly invoke function expression
//
////()();
//
//(function () {
//    
//    'use strict';
//    
//    // name and dependencies array
//    // bind to the html element
//    // name calculator
//    angular.module('ncApp', [])
//        
//    // $ -> ng provides this object
//    /*.controller('ncController', function($scope){
//        $scope.name = "";
//        $scope.totalValue = 0;
//        
//        $scope.displayNumeric = function (){
//            var totalNameValue = calcNumForString($scope.name);
//            
//            $scope.totalValue = totalNameValue;
//        }
//        
//        function calcNumForString(string){
//            var total = 0;
//            for(var i=0;i<string.length;i++) {
//                total += string.charCodeAt(i);
//            }
//            return total;
//        }
//
//    });*/
//    
//    // array with args and function at the end
//    .controller('ncController', ncController);
//    
//    // needed for minification
//    ncController.$inject=['$scope'];
//        
//    function ncController($scope){
//        $scope.name = "";
//        $scope.totalValue = 0;
//        
//        $scope.displayNumeric = function (){
//            var totalNameValue = calcNumForString($scope.name);
//            
//            $scope.totalValue = totalNameValue;
//        }
//        
//        function calcNumForString(string){
//            var total = 0;
//            for(var i=0;i<string.length;i++) {
//                total += string.charCodeAt(i);
//            }
//            return total;
//        }
//
//    }
//    
//})();

// https://javascript-minifier.com

!function(){"use strict";function n(n){n.name="",n.totalValue=0,n.displayNumeric=function(){var t=function(n){for(var t=0,e=0;e<n.length;e++)t+=n.charCodeAt(e);return t}(n.name);n.totalValue=t}}angular.module("ncApp",[]).controller("ncController",n),n.$inject=["$scope"]}();
