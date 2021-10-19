const hScoresList = document.querySelector(".hScoresList")
const hScores = JSON.parse(localStorage.getItem("hScores")) || []

hScoresList.innerHTML =
hScores.map(score => {
    return `<li class = "high-score">${score.name} - ${score.score}</li>`
}).join('')
