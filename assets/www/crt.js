function CityCtrl($scope) {

	$scope.cities = [
		{text:'New York', visted:false},
		{text:'Austin', visted:false},
		{text:'Washington DC', visted:false},
		{text:'Portland', visted:false},

	];

	$scope.addCity = function(){
		$scope.cities.push({text:$scope.formCityText, visted:false});
		$scope.formCityText = "";
	};
}