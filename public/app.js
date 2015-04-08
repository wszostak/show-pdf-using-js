(function(angular){
    var app = angular.module('PdfPOC', []);

    app.controller('ShowPdfController', ['$scope', '$http', '$sce', function($scope, $http, $sce){
        $scope.showPdf = function () {        	
        	$http.get('/response.pdf', {responseType: 'arraybuffer'}).success(function(data){
        		var blob = new Blob([data], {type: 'application/pdf'});
        		var url = URL.createObjectURL(blob);
        		$scope.content = $sce.trustAsResourceUrl(url);
        		// console.log($scope.content);
        	});
        };
    }])
}(angular))
