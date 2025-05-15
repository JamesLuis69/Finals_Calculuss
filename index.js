// Dark Mode Toggle
document.getElementById("dark-toggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

// "Need Help" Button Action
document.getElementById("helpBtn").onclick = () => {
  alert("Use this site to explore calculus lessons and test your skills with quizzes. Toggle dark mode for a comfy view.");
};

// Floating "Back to Top" Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Quiz Logic (Basic Example)
const questions = [
  {
    question: "What is the derivative of f(x) = x²?",
    choices: ["2x", "x", "x²", "1"],
    answer: "2x",
    solution: "The derivative of x² is 2x using the power rule."
  },
  {
    question: "What is ∫2x dx?",
    choices: ["x² + C", "2x²", "x + C", "x²"],
    answer: "x² + C",
    solution: "The integral of 2x is x² + C using the reverse power rule."
  }
];

let current = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const solutionEl = document.getElementById("solution");
const revealBtn = document.getElementById("revealBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = '';
  solutionEl.textContent = '';
  revealBtn.style.display = 'none';
  nextBtn.style.display = 'none';

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      revealBtn.style.display = 'inline-block';
      nextBtn.style.display = 'inline-block';
      if (choice !== q.answer) {
        btn.style.backgroundColor = 'crimson';
      } else {
        btn.style.backgroundColor = 'seagreen';
      }
    };
    choicesEl.appendChild(btn);
  });
}

revealBtn.onclick = () => {
  solutionEl.textContent = questions[current].solution;
};

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    current = 0;
    restartBtn.style.display = 'inline-block';
    showQuestion(current);
  }
};

restartBtn.onclick = () => {
  restartBtn.style.display = 'none';
  showQuestion(current);
};

showQuestion(current);
