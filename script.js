let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

function showHome() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
}

function startQuiz(topic) {
  currentQuiz = questions[topic];
  currentQuestion = 0;
  score = 0;

  // Hide home and show quiz section
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  loadQuestion();
}

function loadQuestion() {
  const question = currentQuiz[currentQuestion];
  console.log(`Loading Question ${currentQuestion + 1}: ${question.question}`);  // Debug log

  document.getElementById("question-title").textContent = `Question ${currentQuestion + 1}`;
  document.getElementById("question-text").textContent = question.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";  // Clear previous options

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(button);
  });

  // Hide the "Next" button until the answer is selected
  document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedIndex) {
  const correctIndex = currentQuiz[currentQuestion].answer;
  console.log(`Selected index: ${selectedIndex}, Correct index: ${correctIndex}`);  // Debug log

  if (selectedIndex === correctIndex) {
    score++;
  }

  // Show the "Next" button after an answer is selected
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  console.log(`Moving to the next question. Current question: ${currentQuestion}`);  // Debug log

  // Move to the next question
  currentQuestion++;

  // If there are more questions, load the next one
  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
  } else {
    showResult();  // If no more questions, show the result
  }
}

function showResult() {
  console.log(`Quiz completed. Final score: ${score}`);  // Debug log

  // Hide the quiz section and show the result section
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  // Display the score
  document.getElementById("score").textContent = `${score} / ${currentQuiz.length}`;
}
