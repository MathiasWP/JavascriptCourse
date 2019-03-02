game();

function game() {
var Question = function(question, answers, corrAnswer) {
    this.question = question,
    this.answers = answers,
    this.corrAnswer = corrAnswer
}

var q1 = new Question('Is javascript cool?', ['Yes', 'No'], 0);
var q2 = new Question('Is gaming cool?', ['Yes', 'No'], 0);
var q3 = new Question('Is earth a planet?', ['Maybe', 'Yes', 'No'], 1);


var questions = [q1, q2, q3];
var score = 0;


function showQ() {
    var i = Math.floor(Math.random() * questions.length)
    console.log(questions[i].question);
    questions[i].answers.forEach(function(index,item) {console.log(item,index);});
    
    var answerinput = prompt('Please answer the question:');

    if(answerinput == questions[i].corrAnswer) {
        console.log('Correct answer!');
        score = score + 1;
        console.log('Your current score is: ' + score);
        console.log('----------------------');
        showQ();
    }else if(answerinput === 'exit') {
        console.log('Thanks for playing :)')
    }else {
        console.log('Wrong answer. Try again:)');
        console.log('Your corrent score is: ' + score);
        console.log('----------------------');
        showQ();
    }
}
    showQ();
}

