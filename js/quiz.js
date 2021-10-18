const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.c-text'))
const pText = document.querySelector('#pText')
const sText = document.querySelector('#score')
const pBarFull = document.querySelector('#pBarFull')

let cQuestion = {}
let aAnswers = true
let score = 0
let qCounter = 0
let aQuestions =[]

let questions = [
        {
         question: 'Booleans are generally used for conditional testing?',
          Choice1: 'True',
          Choice2: 'False',
          Choice3: 'None',
          answer: 1,
        },
    
        {
        question: 'What does DOM stand for?',
        Choice1: 'Domain of Mine', 
        Choice2: 'Due on Monthend', 
        Choice3: 'Document Object Model',
        answer: 3,
        },
      
        {
          question: 'Within a loop, what does the break do?',
          Choice1: 'break your competitors code', 
          Choice2: 'exits the loop immediately', 
          Choice2: 'repeats the loop',
          answer: 2,
        },
      
        {
          question: 'Properties in a JavaScript oject is refferred to what?',
          Choice1: 'nested properties', 
          Choice2: 'key-value pairs', 
          Choice3: 'undefined',
          answer: 2,
        },
      
        {
          question: 'What is a callback function?',
          Choice1: 'a data type similar to a string or a boolean', 
          Choice2: 'a function that is used as an argument to another function.', 
          Choice3: 'A function that performs an HTTP request',
          answer: 'a function that is used as an argument to another function.',
        } 
]

const S_POINTS = 100
const M_QUESTIONS = 5

sGame = () => {
    qCounter = 0
    score = 0
    aQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(aQuestions.length === 0 || qCounter > M_QUESTIONS) {
        localStorage.setItem('recentScore', score)

        return window.location.assign('/end.html')
    }

    qCounter++
   pText.innerText = 'Question ${qCounter} of ${M_QUESTIONS}'
    pBarFull.style.width = '${(qCounter/M_QUESTIONS) * 100}%'

    const qIndex = Math.floor(Math.random() * aQuestions.length)
    cQuestion = aQuestions[qIndex]
    question.innerText = cQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = cQuestion['choice' + number]
     })
     
     aQuestions.splice(qIndex, 1)

     aAnswers = true
}

    choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!aAnswers) return

        aAnswers = false
        const sChoice = e.target
        const sAnswer = sChoice.dataset['number']

        let classToApply = sAnswer == cQuestion.answer ? 'right' : 'wrong'

        if(classToApply === 'right') {
            iScore(S_POINTS)
        }

        sChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            sChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

iScore = num => {
    score +=num
    sText.innerText = score
}

sGame()