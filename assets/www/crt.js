
function CityCtrl($scope) {

	$scope.selectedCity;

	$scope.cities = [
		{	text:'New York', 
			visted:false, 
			routes:[{name:'Alpha'},
					{name:'Bravo'},
					{name:'Charlie'}
					]},

		{	text:'Austin', 
			visted:false, 
			routes:[{name:'Delta'},
					{name:'Echo'},
					{name:'Foxtrot'}
					]},

		{	text:'Washington DC', 
			visted:false, 
			routes:[{name:'Golf'},
					{name:'Hotel'},
					{name:'India'}
					]},

		{	text:'Portland', 
			visted:false, 
			routes:[{name:'Juliet'},
					{name:'Kilo'},
					{name:'Lima'}
					]},

		];

	$scope.addCity = function(){
		$scope.cities.push({text:$scope.formCityText, visted:false});
		$scope.formCityText = "";
	};


	$scope.selectCity = function(pCity){
		//window.alert(pCity);
		$scope.selectedCity = pCity;
	}


	$scope.getSelectedCity = function(){
		for (var i=0,len=$scope.cities.length; i<len; i++){ 
			if(	$scope.cities[i].text == $scope.selectedCity){
				return $scope.cities[i];
			}
		}
	}






}