(function(angular){
    var app = angular.module('PdfPOC', []);

    app.controller('ShowPdfController', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window){

        var getPdfUrl = function (callback) {
            $http.get('/response.pdf', {responseType: 'arraybuffer'}).success(function(data){
                var blob = new Blob([data], {type: 'application/pdf'});
                var url = URL.createObjectURL(blob);
                callback(url)
            });
        };

        $scope.showPdfPopup = function () {
            getPdfUrl(function(url){
                $window.open(url);
            });
        }

        $scope.showPdf = function () {
            getPdfUrl(function(url){
                $scope.content = $sce.trustAsResourceUrl(url);
            });
        };
    }])
}(angular))
