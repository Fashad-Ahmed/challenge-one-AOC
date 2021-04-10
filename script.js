const file = require('fs');

function quest() {
    file.readFile('./input.txt', (err, data) => {
        console.time('timeSpan ---> ');
        const directions = data.toString();
        const directionsArray = directions.split('');
        // console.log(directionsArray);
        const answer = directionsArray.reduce((acc, curVal) => {
            if( curVal === '(') {
                return acc += 1
            }
            else if( curVal === ')') {
                return acc -= 1
            }
        }, 0);
        console.timeEnd('timeSpan ---> ');
        console.log('floors ---> ', answer);
    })
}

quest();