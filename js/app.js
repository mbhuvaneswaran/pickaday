/**
 * Created by bhuvaneshwaranm on 7/5/15.
 */
var app=angular.module("Test",[]);
app.controller("TestController",['$scope','$interval',function($scope,$interval){
    debugger;
    $scope.datemodel="hai";
    $scope.count=1;
    $interval(function(){
        //$scope.datemodel="bye";
    })
    $scope.changeModel=function(){
        $scope.datemodel="bye"+$scope.count++;
    }

}]);
app.directive("datePicker",function(){
    var picker;
    var directive={
        link:function($scope,element,attr){
                debugger;
            picker = new Pikaday(
                {
                    field:element[0],
                    onSelect:function(date){
                        $scope.datepickerModel=picker.toString();

                    }
            });

        },
        restrict:"A",
        scope:{
            datepickerModel: '='
        }

    }
    return directive;
})