const h2 = document.getElementById('h2');
const result = document.getElementById('result');
const images = document.querySelectorAll('.images');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');

let arr = ['rock', 'paper', 'scissors'];
let win = 0;
let loss = 0;

let randomizer = () => {
    let random = Math.floor((Math.random() * (2+1)));
    return arr[random];
}

/*images.forEach(image => {
    image.addEventListener('click', event =>{
        if(event.target.id == `paper` && randomizer() == `paper`){
            console.log(`${ event.target.id} ${randomizer()}`);
        }
        else if(event.target.id == `rock` && randomizer() == `rock`){
            console.log(`${ event.target.id} ${randomizer()}`);
        }
        else if(event.target.id == `scissors` && randomizer() == `scissors`){
            console.log(`${ event.target.id} ${randomizer()}`);
        }
        else{
            console.error(`${ event.target.id} ${randomizer()}`);
        }
            
    })
})*/

function rockClick(){
    h2.textContent = `You selected ROCK`;
    if (randomizer() == 'rock') {
        result.textContent = `Well, It's a Tie`;
    }
    else if(randomizer() == 'paper') {
        result.textContent = `Paper wraps Rock!`;
        loss++;
        losses.textContent = loss;
    }
    else {
        result.textContent = `Rock breaks Scissors`;
        win++;
        wins.textContent = win;
    }
}

function paperClick(){
    h2.textContent = `You selected Paper`;
    if (randomizer() == 'paper') {
        result.textContent = `Well, It's a Tie`;
    }
    else if(randomizer() == 'rock') {
        result.textContent = `Paper wraps Rock!`;
        win++;
        wins.textContent = win;
    }
    else {
        result.textContent = `Scissors cuts Paper`;
        loss++;
        losses.textContent = loss;
    }
}

function scissorsClick(){
    h2.textContent = `You selected Scissors`;
    if (randomizer() == 'scissors') {
        result.textContent = `Well, It's a Tie`;
    }
    else if(randomizer() == 'rock') {
        result.textContent = `Rock breakes Scissors`;
        loss++;
        losses.textContent = loss;
    }
    else {
        result.textContent = `Scissors cuts Paper`;
        win++;
        wins.textContent = win;
    }
}
