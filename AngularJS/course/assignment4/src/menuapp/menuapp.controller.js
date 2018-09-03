(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController)
.controller('itemsController', itemsController);

// instead of injecting the service, use directly with resolve on the ui-router
categoriesController.$inject = ['categoriesRequest'];
function categoriesController(categoriesRequest) {
    var ctrl = this;
    ctrl.categories = [];
    
    // categories is an http response object, not directly the whole data array
    //console.log("categories object: ",categoriesRequest);
    
    if(categoriesRequest.status === 200){
        ctrl.categories = categoriesRequest.data;
        console.log("categories: ",ctrl.categories);
    }
    else {
        console.log("Error in HTTP request: status is not 200 (" , categoriesRequest.status ,")");
    }
}
 
// I had to create a different controller for items because I could not inject the itemsRequest in the other controller
// instead of injecting the service, use directly with resolve on the ui-router
itemsController.$inject = ['itemsRequest'];
function itemsController(itemsRequest) {
    var ctrl = this;
    ctrl.items = [];
    
    // items is an http response object, not directly the whole data array
    //console.log("items object: ",itemsRequest);
    
    if(itemsRequest.status === 200){
        ctrl.items = itemsRequest.data.menu_items;
        console.log("items: ",ctrl.items);
    }
    else {
        console.log("Error in HTTP request: status is not 200 (" , itemsRequest.status ,")");
    }
}
})();