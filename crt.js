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
    $scope.selectedIndex = -1;
    $scope.runType = "";

    $scope.city = "";

    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });

    document.addEventListener("backbutton", $scope.backButtonPressed, false);

    $scope.backButtonPressed = function(){
         alert("back!");
    }

    $scope.citySelect = function(pVal){
        $scope.city = pVal.name;
        $location.path('runTypeView');
//        $("#cityList").hide(300).delay(900);
//        $("#runList").show(300).delay(900);
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
            if(indy.cities[i].city.toLowerCase() == $scope.city.toLowerCase()){
                runs = indy.cities[i].runs;
                break;
            }
        }


        if(pVal === 'Individual'){
            var therun = runs['indy'];
            window.location = therun;
        }else{
            $scope.runs = runs;
            $location.path('groupRun');
        }

    }

    $scope.getContacts = function(){
        $location.path('contacts');
    }

    $scope.groupRunSelected = function(pRun, pIndex){
        $scope.selectedIndex = pIndex;
        window.location = pRun.url;
    }

    $scope.email ="Runners@CityRunningTours.com";
    $scope.crtPhone ="877.415.0058";

    $scope.cityList = [
            {
                name:"New York",
                manager:"Karl",
                ext:"11",
                image:"crtnyc00"
            },
            {
                name:"Austin",
                manager:"Karl",
                ext:"19",
                image:"crtaus0"

            },
            {
                name:"Chicago",
                manager:"Karl",
                ext:"12",
                image:"crtch0"

            },
            {
                name:"Minneapolis",
                manager:"Karl",
                ext:"18",
                image:"crtmsp0"

            },
            {
                name:"Philadelphia",
                manager:"Karl",
                ext:"14",
                image:"crtph0"

            },
            {
                name:"San Francisco",
                manager:"Karl",
                ext:"15",
                image:"crtsf00"

            },
            {
                name:"Washington DC",
                manager:"Karl",
                ext:"13",
                image:"crtdc00"

            },
            {
                name:"Portland",
                manager:"Karl",
                ext:"20",
                image:"crtpor3"

            },
            {
                name:"Boston",
                manager:"Karl",
                ext:"16",
                image:"crtbos0"
            },
            {
                name:"Seattle",
                manager:"Karl",
                ext:"17",
                image:"crtsea0"
            },
            {
                name:"Denver",
                manager:"Karl",
                ext:"21",
                image:"crtden0"
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

app.value('$strap.config', {
    datepicker: {
        language: 'en',
        format: 'MM dd, yyyy'
    }
});

app.config(function ($compileProvider, $routeProvider ){ //, $locationProvider) {

   // $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    $routeProvider
        .when('/',{
            templateUrl:'cityView.html'
        })
        .when('/runTypeView',{
            templateUrl:'runTypeView.html'
        })
        .when('/groupRun',{
            templateUrl:'groupRunList.html'
        })
        .when('/contacts',{
            templateUrl:'contacts.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});