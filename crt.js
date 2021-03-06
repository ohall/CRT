/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 7/3/13
 * Time: 11:51 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('CRTApp', ['ui.bootstrap','$strap.directives']);

function CRTCtrl($scope,$location, getRunPaths) {
    $scope.mouseDown = false;
    $scope.runType = "";
    $scope.city = "";
    $scope.crtPhone="877.415.0058";



    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
        $scope.showBackButton = (next.$$route.templateUrl === "views/cityView.html")?false:true;
    });


    $scope.citySelect = function(pVal){
        $scope.city = pVal;
        $location.path('runTypeView');
    }

    $scope.runSelect = function(pVal){
        $scope.runType = pVal;
        var paths = getRunPaths.paths();

        var indy;

        for(var i=0;i<paths.length;i++){
            if(paths[i].type.toLowerCase() == pVal.toLowerCase()){
                indy = paths[i];
            }
        }

        var runs;

        for(var i=0;i<indy.cities.length;i++){
            if(indy.cities[i].city.toLowerCase() == $scope.city.name.toLowerCase()){
                runs = indy.cities[i].runs;
                break;
            }
        }


        if(pVal === 'Individual'){
            var therun = runs['indy'];
            var ref = window.open(therun, '_blank');
        }else{
            $scope.runs = runs;
            $location.path('groupRun');
        }

    }

    var contactEmailConsts = {
        'SUBJECT'   :"City Running Tours Customer Inquiry for ",
        'ROOTEMAIL' :"Runners@CityRunningTours.com"
    };

    $scope.emailManager = function(cityemail, cityName){
        var ref = window.open ( "mailto:"+cityemail+
                                "?subject=Customer Inquiry "+cityName+
                                "&cc="+contactEmailConsts.ROOTEMAIL, '_system');


    }

    $scope.phoneCall = function(){
        var ref = window.open("tel:"+$scope.crtPhone, '_system');
    }



    $scope.groupRunSelected = function(pRun, pIndex){
        var ref = window.open(pRun.url, '_blank');
    }

    $scope.cityList = [

        {
            name:"Austin",
            manager:"Lee Ackerley",
            email: "Lee@CityRunningTours.com",
            ext:"19",
            image:"crtaus0"

        },
        {
            name:"Boston",
            manager:"Brian McCarthy",
            email: "Brian@CityRunningTours.com",
            ext:"16",
            image:"crtbos0"
        },
        {
            name:"Chicago",
            manager:"",
            email: "Runners@CityRunningTours.com",
            ext:"12",
            image:"crtch0"

        },
        {
            name:"Denver",
            manager:"Lee Herndon",
            email: "Herndon@CityRunningTours.com",
            ext:"21",
            image:"crtden0"
        },
        {
            name:"Minneapolis",
            manager:"Nate Herrington",
            email: "Nate@CityRunningTours.com",
            ext:"18",
            image:"crtmsp0"

        },
        {
            name:"New York",
            manager:"Karl Pawlewicz",
            email: "Karl@CityRunningTours.com",
            ext:"11",
            image:"crtnyc00"
        },
        {
            name:"Philadelphia",
            manager:"Annie Gianola",
            email: "Annie@CityRunningTours.com",
            ext:"14",
            image:"crtph0"

        },
        {
            name:"Portland",
            manager:"Pete Johnson",
            email: "Pete@CityRunningTours.com",
            ext:"20",
            image:"crtpor3"

        },
        {
            name:"San Francisco",
            manager:"John Kamola",
            email: "John@CityRunningTours.com",
            ext:"15",
            image:"crtsf00"

        },
        {
            name:"Seattle",
            manager:"Dennis Armstrong",
            email: "Dennis@CityRunningTours.com",
            ext:"17",
            image:"crtsea0"
        },
        {
            name:"DC",
            manager:"Sara Murphy",
            email: "Sara@CityRunningTours.com",
            ext:"13",
            image:"crtdc00"

        }];
}

app.directive('onTap', function () {
        return function (scope, element, attrs) {
            return $(element).hammer({
                prevent_default: false,
                drag_vertical: false
            })
                .bind("tap", function (ev) {
                    return scope.$apply(attrs['onTap']);
                });
        };
    });

app.directive('animateMe', function() {
    return function(scope, element, attrs) {
        scope.$watch(attrs.animateMe, function() {
            if(element[0].hidden){
                element.show(300).delay(900);
            }else{
                element.hide(300).delay(900);
            }
        })
    }
});


app.config(function ($compileProvider, $routeProvider ){ //, $locationProvider) {

   // $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    $routeProvider
        .when('/',{
            templateUrl:'views/cityView.html'
        })
        .when('/cityView',{
            templateUrl:'views/cityView.html'
        })
        .when('/runTypeView',{
            templateUrl:'views/runTypeView.html'
        })
        .when('/groupRun',{
            templateUrl:'views/groupRunList.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});