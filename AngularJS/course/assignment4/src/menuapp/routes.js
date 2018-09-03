(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
    
  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  // Premade categories page
  .state('listCategories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'categoriesController as ctrl',
    resolve: {
      categoriesRequest: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // $stateParams is a service to retrieve parameters
  .state('listItems', {
    url: '/items/{shortCategory}',
    templateUrl: 'src/menuapp/templates/main-items.template.html',
    controller: 'itemsController as ctrl',
    resolve: {
        itemsRequest: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortCategory);
      }]
    }
  });
    
    
}
})();