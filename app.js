var app = angular.module('app', []);

app.controller('blogCtrl', function ($scope, $http) {

    var pageIndex = 0;
    var pageSize = 3;


    var getData = function () {

        $http.get('http://api-express2.azurewebsites.net/blogs/' + pageIndex + '/' + pageSize)
            .then(function (response) {
                $scope.response = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    $scope.prev = function () {
        if (pageIndex > 0) {
            pageIndex--;
            getData();
        }
    };

    $scope.next = function () {
        if (pageIndex < $scope.response.metadata.pages-1) {
            pageIndex++;
            getData();
        }
    };

    getData();

});