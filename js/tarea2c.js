angular.module("blog",[]);
angular.module("blog").controller("posts", function($scope, $http) {
    //var contentful = require('contentful');
    var client = contentful.createClient({
        accessToken: '0d236cc56db7412848dcf967ae65acca414ccdb9d671ba8192a1e103dcc34a40',
        space: 'vx4jr78zdys0'
    });


    client.entries({
        content_type: '2wKn6yEnZewu2SCCkus4as'
    }).then(function(contenido) {
        $scope.postejemplo = contenido;
        $scope.$digest();
        console.log($scope);
    })
});