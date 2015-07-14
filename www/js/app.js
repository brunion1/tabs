var app = angular.module('app', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url : '/home',
    views : {
      'tab-home':{
        templateUrl : 'templates/home.html'
      }
    }
  });
  
  $stateProvider.state('settings', {
    url : '/settings',
    views : {
      'tab-settings':{
        templateUrl : 'templates/settings.html'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/home');
  
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
