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
    controller: 'MenuAppController as ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        var promise = MenuDataService.getAllCategories();
        return promise;
      }]
    }
  });
    
    
}
})();