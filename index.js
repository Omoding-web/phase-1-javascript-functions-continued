function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
};

function wrapAdjective(sign){
    return function(adjective){
        return (`You are ${sign}${adjective}${sign}!`);
    };
    }

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));