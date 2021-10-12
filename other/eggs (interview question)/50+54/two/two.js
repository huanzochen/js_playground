// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const whichDay = week.findIndex((element, i) => element === S)

    return week[(whichDay + K) % 7]
}

solution('Wed', 20)
