const homeScreen = document.getElementById('home-screen')
const startButton = document.getElementById('start-btn')
const quizScreen = document.getElementById('quiz-screen')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    homeScreen.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizScreen.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {

}

// Questions and answers
const questions = [
    {
        question: "Who is the author of Alice's Adventures in Wonderland?",
        answers: [
            {text: 'Lewis Carroll', correct: true},
            {text: 'Roald Dahl', correct: false},
            {text: 'C.S. Lews', correct: false},
            {text: 'Enid Blyton', correct: false}
        ]
    },
    {
        question: 'What does Alice use to shrink herself down to a small size?',
        answers: [
            {text: "A piece of cake labelled 'Eat Me'", correct: true},
            {text: "A piece of cake labelled 'Shrink Me'", correct: false},
            {text: "A bottle of potion labelled 'Drink Me'", correct: false},
            {text: "A bottle of potion labelled 'Shrink Me'", correct: false}
        ]
    },
    {
        question: 'What is the name of the grinning cat in Wonderland?',
        answers: [
            {text: 'Cheshire', correct: true},
            {text: 'Tom', correct: false},
            {text: 'Garfield', correct: false},
            {text: 'Crookshanks', correct: false}
        ]
    },
    {
        question: 'Who leads Alice to the tea party in Wonderland?',
        answers: [
            {text: 'The March Hare and the Mad Hatter', correct: true},
            {text: 'The White Queen and the Queen of Hearts', correct: false},
            {text: 'Tweedledum and Tweedledee', correct: false},
            {text: 'Mr Tumnus and Aslan', correct: false}
        ]
    },
    {
        question: 'What does the Caterpillar smoke on top of a mushroom?',
        answers: [
            {text: 'A hookah', correct: true},
            {text: 'A cigarette', correct: false},
            {text: 'A tobacco', correct: false},
            {text: 'A vape', correct: false}
        ]
    },
    {
        question: "What is the Queen of Hearts' favourite method of punishment?",
        answers: [
            {text: 'Beheading', correct: true},
            {text: 'Dungeon', correct: false},
            {text: 'Burning at the stake', correct: false},
            {text: 'Drowning', correct: false}
        ]
    },
    {
        question: 'What does the White Rabbit drop in his hurry, which Alice follows?',
        answers: [
            {text: 'His white fan', correct: true},
            {text: 'His pocket watch', correct: false},
            {text: 'His monocle', correct: false},
            {text: 'His bow tie', correct: false}
        ]
    },
    {
        question: "Which playing card soliders are used as archers in the Queen's army?",
        answers: [
            {text: 'The Two and Five of Spades', correct: true},
            {text: 'The Two and Five of Clubs', correct: false},
            {text: 'The Six and Eight of Hearts', correct: false},
            {text: 'The Six and Eight of Diamonds', correct: false}
        ]
    },
    {
        question: 'What does the Queen turn into mallets and balls for a game of croquet?',
        answers: [
            {text: 'Flamingoes and hedgehogs', correct: true},
            {text: 'Flamingoes and squirrels', correct: false},
            {text: 'Herons and hedgehogs', correct: false},
            {text: 'Herons and squirrels', correct: false}
        ]
    },
    {
        question: "Who says the line 'We're all mad here'?",
        answers: [
            {text: 'The Cheshire Cat', correct: true},
            {text: 'The Mad Hatter', correct: false},
            {text: 'The Caterpillar', correct: false},
            {text: 'The White Rabbit', correct: false}
        ]
    }
]