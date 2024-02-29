
// Task - 3
// Write an async/await function that fetch data from an api and logs a message.

// Input:
// https://v2.jokeapi.dev/joke/Programming?type=single


// Note: you can use an api of your choice
// Output:
// Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"


// Note: output may change according to the api you used


// ans:
const anyName = async () => {
    try{
        const link = await fetch(`https://v2.jokeapi.dev/joke/Programming?type=single`);
        // console.log(link);
        if (!link.ok) {
            throw new Error ('failed to face joke')
        }
        const documents = await link.json();
        console.log(documents.joke);

    }catch (error) {

        console.error('error fatching joke',error.message)
    }
}
anyName()
