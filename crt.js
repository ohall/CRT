/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 7/3/13
 * Time: 11:51 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('CRTApp', ['ui.bootstrap','$strap.directives']);

function CRTCtrl($scope,$location) {

    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });

    document.addEventListener("backbutton", $scope.backButtonPressed, false);

    $scope.backButtonPressed = function(){
         alert("back!");
    }

    $scope.citySelect = function(pVal){
        $scope.myRun.city = pVal;
        $location.path('runTypeView');
        $("#cityList").hide(300).delay(900);
        $("#runList").show(300).delay(900);
    }

    $scope.runSelect = function(pVal){
        $scope.myRun.type = pVal;

    }

    $scope.myRun = {
        city:{},
        date:"",
        type:""
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
                name:"San Fransisco",
                manager:"Karl",
                routes:[],
                image:"crtsf00"

            }],
        cities3:[
            {
                name:"Washington D.C.",
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

    $scope.runType =
    {names:["Individual Run",
        "Group Run"],
        open:false};


    $scope.datepicker = {date:"",
                         open:false};

    $scope.$watch('datepicker', function() {
       // $('#register').tab('show');
    });

    $scope.regClick = function(){
        window.location = "http://www.active.com/running-membership/washington-dc/city-running-tours---washington-dc-personalized-running-tours-2017";
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

app.config(function ($routeProvider){ //, $locationProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'views/cityView.html',
            controller: 'CRTCtrl'
        })
        .when('/runTypeView',{
            templateUrl:'views/runTypeView.html',
            controller: 'CRTCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    // $locationProvider.html5Mode(true);
});