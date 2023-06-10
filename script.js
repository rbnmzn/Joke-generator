const btnEL =document.getElementById("btn");
const jokeEl= document.getElementById("joke");



const apiKey = "f1sbxapwmKfOnQIi2r+uZQ==dYvXBRq6TD8zHjAi";

const options={
    method: "GET",
    headers:{
        "X-Api-key":apiKey,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/jokes?limit=";

async function getJoke(){
    
    try{

        jokeEl.innerText="Generating......";
        btnEL.disabled =true;
        btnEL.innerText="Loading";
        const response = await fetch(apiURL,options)
        const data= await response.json()
        
    
        btnEL.disabled =false;
        btnEL.innerText="Tell Me A Joke";
    
    
        jokeEl.innerText=data[0].joke;
    } catch(error) {
        jokeEl.innerText="An error occured";
        console.log(error);
    }
    

}
btnEL.addEventListener("click", getJoke);