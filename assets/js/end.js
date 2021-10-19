const player = document.querySelector("#player")
const sScoreBtn = document.querySelector("#sScoreBtn")
const fScore = document.querySelector("#fScore")
const recentScore = localStorage.getItem("recentScore")


const hScores = JSON.parse(localStorage.getItem('hScores')) || []

const M_H_SCORES = 4

fScore.innerText = recentScore

player.addEventListener('keyup', () => {
    sScoreBtn.disabled = !player.value
})

sHighScore = e => {
    e.preventDefault()

    const score =  {
        score: recentScore,
        name: player.value
    }

    hScores.push(score)

    hScores.sort((a,b) => {

        return b.score - a.score
    })

    hScores.splice(4)

    localStorage.serItem('hScores', JSON.stringify(hScores))

    window.location.assign('/')

}
