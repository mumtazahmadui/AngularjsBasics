angular.module('myapp', [])
.controller('mycont', ['$scope', function($scope){
  $scope.arr = [];
   $scope.add = function(){
     $scope.arr.push({
      Name:$scope.username,
      Surname:$scope.usersurname,
      mail:$scope.useremail
     });
     $scope.username = " "; 
     $scope.usersurname = " "; 
     $scope.useremail = " "; 
   };
   $scope.fordelet = function(a){
    $scope.arr.splice(a,1);
   }  
}]);
