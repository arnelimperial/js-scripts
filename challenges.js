/*
 1. A Player looses his ENTIRE score when he rolls 2 six in a row. After that, it's the next player turn.
 Always save the previous dice roll in a separate variable.
 2. Add an input field to the HTML where players can set the winning score.
 3. Add another dice to to the game so that there are two dice now. The player looses his current
 score when one of them is one.

*/

var scores, activePlayer, roundScore, gamePlaying;

var lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. Random Number
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        //var diceDOM = document.querySelector('.dice');
        //diceDOM.style.display = 'block';
        //diceDOM.src = 'dice-' + dice + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        //3. Update the round score IF the rolled score was NOT a 1
       /* if(dice === 6 && lastDice === 6){
            //Player loose score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }else if(dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        lastDice = dice;
        */
       if(dice1 !== 1 && dice2 !== 1){
           //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }


    }

   
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add Cuurent score to Global score
        scores[activePlayer] += roundScore;
        //Update the IU
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;

        //undefined, 0, null or "" are COERCED to false
        //Anything else is COERCED to true

        if(input){
            winningScore = input;
        }else{
            winningScore = 50;
        }

        //Check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.querySelector('.dice').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

     //document.querySelector('.player-0-panel').classList.remove('active');
     //document.querySelector('.player-1-panel').classList.add('active');
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores = [0,0];
    roundScore = 0;

    //Player 0 is 1 and Player 1 is 2
    activePlayer = 0;
    gamePlaying = true;

    //document.querySelector('#current-' + activePlayer).innerHTML = dice;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}
