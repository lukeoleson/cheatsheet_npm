const _ = require('lodash');

const numbers = [33, 45, 23, 66, 34, 31];

_.each(numbers, function(number, i){
    console.log(number);
});

