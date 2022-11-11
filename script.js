const advice=document.getElementById("advice");
const adviceId=document.getElementById("adviceid");
const tweetButton=document.getElementById("tweet");

const getNewAdvice = async () =>
{
    //api for quotes
    var url="https://api.adviceslip.com/advice";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const adviceRes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    // const indx = Math.floor(Math.random()*allQuotes.length);
    // console.log()

    //Store the quote present at the randomly generated index
    // const quote=allQuotes[indx].slip;

    //Store the adviceId of the respective quote
    // const auth=allQuotes[indx].adviceId;

    // if(auth==null)
    // {
    //     adviceId = "Anonymous";
    // }

    //function to dynamically display the quote and the adviceId
    advice.innerHTML=adviceRes.slip.advice;
    adviceId.innerHTML="Advice #"+adviceRes.slip.id;

    //tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;


}
getNewAdvice();


// document.getElementById('stybut').addEventListener('click', function() {
//     this.classList.toggle('changed');
//   });