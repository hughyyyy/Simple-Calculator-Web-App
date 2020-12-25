var storednum = 0;
var storedstr = "";

var application = angular.module('myApp',[]);

application.controller('function',['$scope',function($scope){
    $scope.num1 = 0;
    $scope.passege = storedstr;
    var printfunc = storedstr;
    function print(){
        $scope.passege = printfunc;
        storedstr = printfunc;
    }
    $scope.add = function(){
        storednum = $scope.num1;
        var addstr = " + ";
        printfunc = storedstr + $scope.num1.toString();
        printfunc = printfunc.concat(addstr);
        print();
        $scope.num1 = 0;
    };
    $scope.sub = function(){
        storednum = $scope.num1;
        var substr = " - ";
        printfunc = storedstr + $scope.num1.toString();
        printfunc = printfunc.concat(substr);
        print();
        $scope.num1 = 0;
    };
    $scope.mult = function(){
        storednum = $scope.num1;
        var mltstr = " * ";
        printfunc = storedstr + $scope.num1.toString();
        printfunc = printfunc.concat(mltstr);
        print();
        $scope.num1 = 0;
    };
    $scope.div = function(){
        storednum = $scope.num1;
        var divstr = " / ";
        printfunc = storedstr + $scope.num1.toString();
        printfunc = printfunc.concat(divstr);
        print();
        $scope.num1 = 0;
    };
    $scope.ce = function(){
        printfunc = "";
        $scope.ans = "";
        storednum = 0;
        $scope.num1 = 0;
        print();
    }
    $scope.equal = function(){
        printfunc = storedstr + $scope.num1.toString();
        print();
        $scope.ans = eval(printfunc);
        $scope.num1 = 0;
    };

}]);
