// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(stringParam = '*'){
    return function(param1 = 'special') {
        return `You are ${stringParam}${param1}${stringParam}!`
    }
}