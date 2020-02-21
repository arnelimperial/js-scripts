
//Ensure privacy of code so that it will not interfere with other programmers code
//IIFE
(function(){
    //1. Build afunction constructor
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

// Use the concepts of prototypes and prototype chain
    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(var i=0; i< this.answers.length; ++i){
            console.log(i +': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if(ans === this.correctAnswer){
            console.log('You\'ve got it.');
            sc = callback(true);
        }else{
            console.log('Wrong. ' + this.correctAnswer + ' is the correct answer.');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    //Function to display score in the console
    Question.prototype.displayScore = function(score){
        console.log('Your current score: ' + score);
        console.log('---------------------------------------------');
    }

    var q1 = 'Is Python the coolest programming language in the world?';
    var q2 = 'What is the programming language use in front-end?';
    var q3 = 'What paradigm do Javascript is classified?';


    var arrQ1 = ['Yes', 'No'];
    var arrQ2 = ['Java', 'Go', 'JS', 'Haskell', 'C++'];
    var arrQ3 = ['Data-driven', 'Metaprogramming', 'Natural-language', 'Symbolic', 'Event-driven'];


    var question1 = new Question(q1, arrQ1, 0);

    var question2 = new Question(q2, arrQ2, 2);

    var question3 = new Question(q3, arrQ3, 4);


    //2. Store in a array and select random question

    var questions = [question1, question2, question3];

    //Track/update the score of the user using closures; Right minus wrong 

    function score(){
        var sc = 0;
        //function returning function
        return function(correctAns){
            if(correctAns){
                sc++;
            }else{
                sc--;
            }
            
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();


        // Use the prompt function to ask for the user answer

        var answer = prompt("Enter your answer with the corresponding numerical value:\nEnter 'quit' to exit the quiz.");

        if(answer !== 'quit'){
            //Pass also the keepScore variable
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion()
        }

    }

    nextQuestion();

})();


