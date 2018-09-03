(function () {
'use strict';
    
angular.module('data')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});
})();