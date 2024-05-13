// versjon 1
let bigColors = [
    'yellow', 'yellow', 'blue', 'blue',
    'purple', 'red', 'red', 'yellow',
    null, null, null, null,
];
let smallColors = [
    null, null, 'white', null,
    null, null, 'red', 'white',
];
let correctAnswer = [
    'green', 'blue', 'red', 'purple',
];
let hiddenAnswer = true;

// versjon 2
const model = {
    bigColors: [
        'yellow', 'yellow', 'blue', 'blue',
        'purple', 'red', 'red', 'yellow',
        null, null, null, null,
    ],
    smallColors: [
        null, null, 'white', null,
        null, null, 'red', 'white',
    ],
    correctAnswer: [
        'green', 'blue', 'red', 'purple',
    ],
    hiddenAnswer: true,
};



/*
 null     - tom
 false    - tom
 ''       - tom
 'gul'    - gul
 'yellow' - gul
 '#ff0000' - rød
 0     - tom
 1     - gul
 2     - blå
 3     - rød
*/