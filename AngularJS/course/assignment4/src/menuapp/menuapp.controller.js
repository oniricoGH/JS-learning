(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


// instead of injecting the service, use directly with resolve on the ui-router
MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {
    var ctrl = this;
    ctrl.categories = [];
    
    // categories is an http response object, not directly the whole data array
    
    //console.log("categories object: ",categories);
    
    if(categories.status === 200){
        ctrl.categories = categories.data;
    }
    else {
        console.log("Error in HTTP request: status is not 200 (" , categories.status ,")");
    }

    console.log("categories: ",ctrl.categories);
    }

})();