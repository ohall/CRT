/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 7/3/13
 * Time: 11:51 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('CRTApp', ['ui.bootstrap','$strap.directives']);
function IntroCtrl($scope) {
    $scope.oneAtATime = true;

    $scope.citySelect = function(pVal){
        $scope.myRun.city = pVal;
        $scope.cityList.open = false;
        $scope.runType.open = true;
    }

    $scope.runSelect = function(pVal){
        $scope.myRun.type = pVal;
        $scope.runType.open = false;
        $scope.datepicker.open = true;

    }

    $scope.myRun = {
        city:{},
        date:"",
        type:""
    }

    $scope.cityList = {
        cities:[
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

            },
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

            },
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

app.value('$strap.config', {
    datepicker: {
        language: 'en',
        format: 'MM dd, yyyy'
    }
});


//-----Start
//1. Welcome Screen (CRT Logo for brief pause)
//2. Open Screen Select City (Drop down menu of cities) -->
// Select Group Run or Individualized Run
//
//A. If Indy Run
//1. User selects from one of five pre-selected routes (hard coded, do not change)
//2. User selects date of run
//3. Then to C
//
//B. If Group Run
//1. User selects date
//2. User selects group runs on that date
//3. Then to C
//
//C. Run Registration
//1.1 User is taken directly to registration page in web browser for this run
//2.1 Finish/Confirmation Page
//--OR--
//1.2 User is prompted to enter phone number and email address and email is sent to
// City Manager notifying them of a run request. (Manager follows up via phone to get payment info
//2.2 Finish
//--OR--
//1.3 Incorporate Square API to process payment in app
//2.3 Finish
