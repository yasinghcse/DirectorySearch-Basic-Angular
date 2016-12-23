var myApp = angular.module("myApp",['ngRoute']);

//configuring routes
myApp.config(['$routeProvider', function($routeProvider){
  
    $routeProvider.when('/',{
      templateUrl: 'main.html',
      controller: 'Ctrl'
    })
    .when('/about',{
       templateUrl: 'about.html',
        controller: 'Ctrl1'
    })
    .when('/contact',{
       templateUrl: 'contact.html',
        controller: 'Ctrl'
    });
    //console.log($routeProvider);
}]);


//configuring controller
myApp.controller("Ctrl",Ctrl);

function Ctrl($scope){
 // console.log("Hello");
}

//configuring controller for about us
myApp.controller("Ctrl1",Ctrl1);

function Ctrl1($scope,$http){
  $scope.UserList={};
  $scope.artistOrder= "name";
   $scope.UserList = $http.get('data.json').
                      then(function(response){
                        $scope.UserList =response.data.artists;
                        console.log(response.data.artists);
                      });
}