(function (){
    
'use strict';
    
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// inject the service to communicate between controllers
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
    //needed for labeling
    var tbc = this;
    
    tbc.toBuyList = ShoppingListCheckOffService.getToBuy();
    
    tbc.checkBoughtItem = function(index){
        ShoppingListCheckOffService.itemIsBought(index);
    }
}

// inject the service to communicate between controllers
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
function AlreadyBoughtController (ShoppingListCheckOffService){
    //needed for labeling
    var abc = this;
    
    // cannot access directly to the property, it must be with a get function
    abc.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBought();
}

    
function ShoppingListCheckOffService (){
    var service = this;
    var alreadyBought = [];
    var toBuy = [
       {name: "chocolate",
       quantity: 3},
       {name: "mayo",
       quantity: 1},
        {name: "turrón",
       quantity: 1},
        {name: "tomates",
       quantity: 8},
        {name: "doritos",
       quantity: 2},
        {name: "brocoli",
       quantity: 250},
    ];
    
    // cannot access directly to the property, it must be with a get function
    service.getToBuy = function(){
        return  toBuy;
    }
    
    service.getAlreadyBought = function(){
        return  alreadyBought;
    }
    
    service.itemIsBought = function (index){
        alreadyBought.push(toBuy[index]);
        toBuy.splice(index,1);
    }
    
    
}    

})();