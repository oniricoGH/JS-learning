(function (){
    
'use strict';
    
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('MenuUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);
    
function FoundItemsDirective() {
    var ddo = {
        //template: '{{ item.name }} ({{item.short_name}}): {{ item.description}}',
        templateUrl: 'foundItems.html',
        scope: {
          list: '<',  //same name in template and html
          onRemove: '&'
        }
    };
    
    return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService){
    // required for controller as syntax?
    var ctrl = this;
    // keyword to filter result array
    ctrl.keyWord = "";
    // array with matched elements
    ctrl.found = [];
    
    // function called from UI that checks if there is a keyword and starts the data provider service     
    ctrl.showMenuList = function () {
       if(ctrl.keyWord===""){
           ctrl.found = [];
           console.log("Keyword not found!");
        }
        else {
            ctrl.found = [];
            var promise = MenuSearchService.getMatchedMenuItems();
            promise.then(httpSuccess,httpError);
        }
        
    }
    
    // the argument index comes from the directive
    ctrl.removeItem = function (itemIndex){
        console.log("Next to be deleted: ", this.found[itemIndex], "index: ", itemIndex);
        this.found.splice(itemIndex, 1);
        console.log("Current array", this.found);
    }
    
    function httpSuccess(response){
        var objArray=response.data.menu_items;

        console.log("Success in HTTP request");
        console.log("objs: ", objArray);
        console.log("keyword: ", ctrl.keyWord);

        for (var i=0;i<objArray.length;i++) {                                   if(objArray[i].description.search(ctrl.keyWord)!==-1){
                ctrl.found.push(objArray[i]);
            }
        }
        
        console.log("found items size: ", ctrl.found.length, " , found items array: ", ctrl.found);
    }
    
    function httpError(response){
        console.log("Error in HTTP request, status: ", response.status);
    }
    
}
    
MenuSearchService.$inject = ['$http', 'MenuUrl'];
function MenuSearchService($http, MenuUrl){
    var srvc = this;
    
    // main function to start the http process
    srvc.getMatchedMenuItems = function(keyword){
        return $http({ url: MenuUrl});
    }  
}
    
})();