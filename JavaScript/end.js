const input = document.getElementById("username");
const btnSave = document.getElementById("saveScoreBtn");
const finalScoreElemnt = document.getElementById("finalScore");
const STORAGE = window.localStorage;
const finalScore = STORAGE.getItem('score');

main = () => {
    displayFinalScore();
    handleInput();
}

displayFinalScore = () => {
    finalScoreElemnt.innerText = finalScore;
    STORAGE.removeItem('score');
}

isNameTaken = (name) => {
    for(var i = 0; i < STORAGE.length; i++){
        let key = STORAGE.key(i);
        if(name == key){
            return true;
        }
    }
    return false;

}

handleInput = () => {
    input.addEventListener('input', e => {
        if(input.value.length == 0){
            btnSave.disabled = true;
        }else if(input.value === "score"){
            btnSave.disabled = true;
            alert("Invalid name! Please choose a diffrent name")
        }else if(isNameTaken(input.value)){
            btnSave.disabled = true;
            alert("name is unavailable! Please choose a diffrent name")
        }else{
            btnSave.disabled = false;
        }
    })
}

saveHighScore = () => {
    console.log("btn")
    let name = input.value;
    STORAGE.setItem(name, finalScore);
    return window.location.assign('/HTML/index.html');
}

main();
