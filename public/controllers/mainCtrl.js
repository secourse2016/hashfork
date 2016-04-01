
App.controller('mainCtrl', function($scope) {
    //$scope.pageClass = 'page-home';

    $scope.f1="active";
    $scope.f2="";
    $scope.S1=function(){
        $scope.f1="active";
        $scope.f2="";

    }
    $scope.S2=function(){
        $scope.f2="active";
        $scope.f1="";

    }
});
