/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 7/3/13
 * Time: 11:51 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('CRTApp', ['ui.bootstrap','$strap.directives']);

function CRTCtrl($scope,$location, getRunPaths) {

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


        var therun = runs['indy'];

        window.location = therun;

    }

    $scope.cityList = {
        cities1:[
            {
                name:"New York",
                manager:"Karl",
                routes:[],
                image:"crtnyc00"
            },
            {
                name:"Austin",
                manager:"Karl",
                routes:[],
                image:"crtaus0"

            },
            {
                name:"Chicago",
                manager:"Karl",
                routes:[],
                image:"crtch0"

            }],
        cities2:[
            {
                name:"Minneapolis",
                manager:"Karl",
                routes:[],
                image:"crtmsp0"

            },
            {
                name:"Philadelphia",
                manager:"Karl",
                routes:[],
                image:"crtph0"

            },
            {
                name:"San Francisco",
                manager:"Karl",
                routes:[],
                image:"crtsf00"

            }],
        cities3:[
            {
                name:"Washington DC",
                manager:"Karl",
                routes:[],
                image:"crtdc00"

            },
            {
                name:"Portland",
                manager:"Karl",
                routes:[],
                image:"crtpor3"

            },
            {
                name:"Boston",
                manager:"Karl",
                routes:[],
                image:"crtbos0"
            }],
        open:false
    };

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

    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    $routeProvider
        .when('/',{
            templateUrl:'views/cityView.html',
        })
        .when('/runTypeView',{
            templateUrl:'views/runTypeView.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});