console.log("Script Running")
async function fetchJokes(){
    try{
    const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=edef2c055e6d657d4d08b102b590');
    const responseData = await response.json();
    console.log("Jokes In Json ->",responseData)
    const actualJokes = responseData.jokeContent;
    return actualJokes;
    }

    catch(err){
        console.log("Error in Finding The jokes: Error is:", err)
    }

    finally{
        console.log("fetchJokes Function is runnig");
    }
    

}

 async function jokesGenerator(){
    var actualJokes = await fetchJokes()
    var jokeText = document.querySelector(".jokeText")
    jokeText.innerHTML = actualJokes;
    button.innerHTML = "Next Jokes"
    console.log("Actual Jokes ->",actualJokes)


}


// Start from Here
var button = document.querySelector(".btn")
button.addEventListener("click",jokesGenerator)

function run(){

    console.log("Event lIstner Working")
    
}