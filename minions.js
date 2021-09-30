
var btTranslate= document.querySelector("#bt-translate");
var inputTxt= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output-div");

var serverUrl= "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text;
}

function eHandler(error){
    console.log("error occured : ", error);
    alert("try after some time!");
}
function clickHandler(){
    var input = inputTxt.value;
    fetch(getTranslationURL(input))
    .then(Response => Response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }).catch(eHandler)

}

btTranslate.addEventListener("click",clickHandler);

