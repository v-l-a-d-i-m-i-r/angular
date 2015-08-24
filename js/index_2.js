var app = angular.module('demoApp', []);


app.service("getObj",function($http){
    return $http.get('http://127.0.0.1:1337/getObj');
});

app.controller('mainController', function($scope, getObj){

    $scope.main = {
        init: function mainControllerInit(){
            var self = this;

            self.getData();
        },
        getData: function(){
            var self = this;

            getObj.then(function(data){
                self.persones = data.data;
            });
        },
        persones: {},
        isShow: true,
        buttonLabel: 'Hide',
        toggleShow: function(isShow){
            var self = this;

            self.buttonLabel = isShow ? 'show' : 'hide';
            self.isShow = !isShow;
        }
    }

    $scope.main.init();
});




















/*app.factory('myFactory', function(){
    return function(message){
        console.log(message);
    }
});*/







