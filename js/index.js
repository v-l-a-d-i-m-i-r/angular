var persones = {
    name: 'Vova',
    age: 26,
    profession: 'FE developer',
    car: 'img/red_ferrari.jpg',
    history: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aliquid quod necessitatibus tempore laborum! Numquam quisquam, praesentium delectus quasi provident esse commodi nemo illum. Libero dolore quia placeat, ipsa voluptas non quaerat, veniam odio aperiam veritatis deserunt saepe commodi nam amet numquam! Cum incidunt quia blanditiis magnam fuga doloribus, aut.'
}
/*-------------------------------------------------*/
var app = angular.module('demoApp', []);



app.controller('mainController', function($scope){
    $scope.persones = persones;
    $scope.isShow = true;
    $scope.buttonLabel = 'Hide',
    $scope.toggleShow = function(isShow){
        $scope.buttonLabel = isShow ? 'show' : 'hide';
        $scope.isShow = !isShow;
    }
});













