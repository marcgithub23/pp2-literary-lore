const homeScreen = document.getElementById('home-screen')
const startButton = document.getElementById('start-btn')
const quizScreen = document.getElementById('quiz-screen')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    homeScreen.classList.add('hide')
    quizScreen.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}