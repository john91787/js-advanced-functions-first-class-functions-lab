// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2,4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (a){
    return function(b){
        return a*b;
    }
}

const fareDoubler = function (a){
    return a*2;
}

const fareTripler = function (){
    return 12*3;
}

const selectDifferentDrivers = function (drivers,arrayofDrivers){
    return arrayofDrivers(drivers);
}