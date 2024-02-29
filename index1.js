// Task - 2
// The function tellJoke() below logs a funny message every 2 seconds and after 10 seconds, it stops. Complete the code below and see the output.

// function tellJoke() {
//  console.log("Why don't scientists trust atoms? Because they make up
//  everything!");
// }

// const jokeInterval = setInterval(?, ?);

// After 10 seconds, stop telling jokes

// setTimeout(() => {

 //write code

// }, ?)

// ans:
function tellJoke() {
    console.log("why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(() => {
tellJoke();
},2000);
// clearInterval(jokeInterval);

setTimeout(() => {
    clearTimeout(jokeInterval);

},10000);