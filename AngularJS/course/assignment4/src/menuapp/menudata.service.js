(function () {
'use strict';
    
angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('categoriesUrl', "http://davids-restaurant.herokuapp.com/categories.json")
.constant('itemsUrl', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http','categoriesUrl','itemsUrl'];
function MenuDataService ($http,categoriesUrl,itemsUrl){
    var menuData = this;    
    menuData.getAllCategories = function (){
        // return a promise
        // return a promise    
        return $http({
            url: categoriesUrl
        });
    };
    
    menuData.getItemsForCategory = function (categoryShortName) {
    // return a promise result of $http    
    };
}    

})();