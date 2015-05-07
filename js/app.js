/**
 * Created by bhuvaneshwaranm on 7/5/15.
 */
var app=angular.module("Test",[]);
app.controller("TestController",['$scope',function($scope){
    debugger;
    $scope.datemodel="hai";

}]);
app.directive("datePicker",function(){
    var picker;
    var directive={
        link:function($scope,element,attr){
                debugger;
            picker = new Pikaday(
                {
                    field:element[0],
                    onselect:function(date){
                        $scope.datepickerModel=date;

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