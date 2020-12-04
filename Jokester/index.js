const jokes = require("give-me-a-joke");
const colors = require("colors");

let fn = 'Sharon'
let ln = 'Watkins'

jokes.getCustomJoke(fn, ln, function (joke) {
    console.log(joke.rainbow);
});

//console.dir(jokes)