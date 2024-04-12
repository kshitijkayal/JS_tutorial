let num = 40;
let guess = 0;
do{
    guess = parseInt(prompt("Guess a no."));
    if(guess == num){
        alert('winner')
        break;
    }
}while(guess!=0)