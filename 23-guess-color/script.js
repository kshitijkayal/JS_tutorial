const colorCode = document.getElementById('color-code')
const options = document.getElementById("options-container")
const scoreContainer = document.getElementById("score");
let randomColor = null
let score = 0

function genNumbers(min,max){
    return min + Math.floor(Math.random() * (max-min+1));
}

function incrementScore(){
    score+=1;
    scoreContainer.innerText = score;
}

function generateRandomRGB(){
    const red = genNumbers(0,255);
    const green = genNumbers(0,255);
    const blue = genNumbers(0,255);
    return `rgb(${red}, ${green}, ${blue})`
}

function validateResult(el){
    const selectedColor = el.target.style.backgroundColor;
    if(selectedColor===randomColor){
        incrementScore();
    }
    else{
        score = 0;
    }
    window.localStorage.setItem("score",score);
    startGame();
}

function startGame(){
    scoreContainer.innerText = window.localStorage.getItem('score') ?? 0 
    options.innerHTML = null
    randomColor = (generateRandomRGB());
    colorCode.innerText = randomColor;
    const randomInd = genNumbers(0,5);

    for(let i=0;i<6;i++){
        const div = document.createElement("div");
        div.addEventListener("click", validateResult);
        div.style.backgroundColor = i===randomInd ? randomColor: generateRandomRGB();
        options.append(div);
    }
}
window.addEventListener("load", ()=>startGame())