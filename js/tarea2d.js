angular.module("blog", []);
angular.module("blog").controller("posts", function($scope, $http) {
    //var contentful = require('contentful');
    var client = contentful.createClient({
        accessToken: '57f58ed178b581f11721fd074ea6389819c9be228849651aefa469cc738094f7',
        space: 'f3pqce1rhitw'
    });


    client.entries({
        content_type: '1IRv2C6nV6YMI0mEk6k6Yq'
    }).then(function(contenido) {
        $scope.postejemplo = contenido;
        $scope.$digest();
    })


    $scope.detallepost = function(item){
        $scope.article = item;
        console.log(item);
    }
});
