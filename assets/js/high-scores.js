var scoreArray = JSON.parse(localStorage.getItem("High Scores"));
var scoreList = document.getElementById("score-list");
var clearScores = document.getElementById("clear");


scoreArray.sort(function (a, b) {
    return b.score-a.score;
})

scoreArray.forEach((score) => {
    var li = document.createElement("li")
    li.textContent = score.initials + " -- " + score.score;
    scoreList.appendChild(li);
});

clearScores.addEventListener("click", function () {
    localStorage.clear();
    scoreList.innerHTML = " ";
})
