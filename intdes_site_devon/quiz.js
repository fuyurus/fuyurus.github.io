let currentQuestion = 1;
const totalQuestions = 5;

function showQuestion(index) {
    document.querySelectorAll(".quiz-question").forEach((q) => q.classList.add("hidden"));
    document.getElementById(`question-${index}`).classList.remove("hidden");

    document.querySelectorAll(".step").forEach((step, i) => {
        step.classList.toggle("active", i + 1 === index);
    });

    document.querySelector(".prev-btn").style.display = index === 1 ? "none" : "inline-block";
    document.querySelector(".next-btn").style.display = index === totalQuestions ? "none" : "inline-block";
    document.querySelector(".submit-btn").classList.toggle("hidden", index !== totalQuestions);
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function submitQuiz() {
    let score = 0;
    const answers = { q1: "C", q2: "B", q3: "B", q4: "A", q5: "A" };

    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    document.getElementById("userScore").textContent = `${score}/${totalQuestions}`;
    document.getElementById("leaderboardContainer").style.display = "block";
}

function saveScore() {
    const userName = document.getElementById("userName").value.trim();
    const userScore = document.getElementById("userScore").textContent;
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (!userName) {
        alert("Please enter your name.");
        return;
    }

    leaderboard.push({ name: userName, score: userScore });
    leaderboard.sort((a, b) => parseInt(b.score) - parseInt(a.score));
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.forEach((entry) => {
        const li = document.createElement("li");
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboardElement.appendChild(li);
    });
}

window.onload = () => {
    showQuestion(1);
    displayLeaderboard();
};
