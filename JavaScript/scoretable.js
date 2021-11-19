const scoreList = document.getElementById("scoreList");
const STORAGE = window.localStorage;
const scoresArray = []

main = () => {
    updateScoresArray();
    displayScoreList();
}

updateScoresArray = () => {
    for(var i = 0; i < STORAGE.length; i++){
        let key = STORAGE.key(i);
        let value = parseInt(STORAGE.getItem(key));
        scoresArray[i] = {name: key, score: value,};
    }

    //sort Array
    //scoresArray.sort(function(a, b){return a - b});
    for(var i = 0; i < scoresArray.length - 1; i++){
        for(var j = i + 1; j < scoresArray.length; j++){
            if(scoresArray[j].score > scoresArray[i].score){
                let temp = scoresArray[i];
                scoresArray[i] = scoresArray[j];
                scoresArray[j] = temp;
            }
        }
    }

    console.log(scoresArray);
}

displayScoreList = () => {
    for(var i = 0; i < scoresArray.length; i++){
        let name = scoresArray[i].name;
        let score = scoresArray[i].score;

        const li = document.createElement('li');
        li.innerHTML = `${name} - ${score}`;
        scoreList.appendChild(li);
    }
}

main();