// ===== Questions =====
const quizData = [
  { question: "1) What does CSS Stand for?", 
    options: ["Cascading Style Sheets","Computer Style Sheets","Create Style Sheets","Color Style Sheets"], 
    answer: "Cascading Style Sheets" 
  },

  { question: "2) Which CSS Selector is used to target a specific class?", 
    options: ["#classname",".classname","classname","[classname]"], 
    answer: ".classname" 
  },

  { question: "3) Which selector targets an ID?", 
    options: ["#id",".id","id","[id]"], 
    answer: "#id" 
  },

  { question: "4) What makes an element inline?", 
    options: ["block","inline","none","flex"], 
    answer: "inline" 
  },

  { question: "5) Which property makes an element full-width new line?", 
    options: ["absolute","inline","inline-block","block"], 
    answer: "block" 
  },

  { question: "6) Which pseudo-class selects visited links?", 
    options: [":hover",":active",":link",":visited"], 
    answer: ":visited" 
  },

  { question: "7) Which pseudo-class triggers on mouse click?", 
    options: [":hover",":active",":link",":visited"],
    answer: ":active" 
  },

  { question: "8) Which pseudo-class triggers on hover?", 
    options: [":hover",":active",":link",":visited"], 
    answer: ":hover" 
  },

  { question: "9) Which selects unvisited link?", 
    options: [":hover",":link",":active",":focus"],
    answer: ":link" 
  },

  { question: "10) Which property controls an element’s display type?",
    options: ["visibility","position","display","float"], 
    answer: "display" 
  },

  { question: "11) Correct HTML tag for external CSS?", 
    options: [
      "&lt;style src=&quot;style.css&quot;&gt;",
      "&lt;css href=&quot;style.css&quot;&gt;",
      "&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;",
      "&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;"
    ], 
    answer: "&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;" 
  },

  { question: "12) Correct inline CSS?", 
    options: [
      "&lt;p style=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;",
      "&lt;p css=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;",
      "&lt;style=&quot;color: red;&quot;&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;/style&gt;",
      "&lt;css&gt;color:red&lt;/css&gt;"
    ], 
    answer: "&lt;p style=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;" 
  },

  { question: "13) Internal CSS is written inside:", 
    options: [
      "&lt;body&gt;",
      "&lt;style&gt; inside &lt;head&gt;",
      "&lt;script&gt;",
      "&lt;link&gt;"
    ], 
    answer: "&lt;style&gt; inside &lt;head&gt;" 
  },

  { question: "14) Select all <p> elements", 
    options: ["p {}", "#p {}", ".p {}", "<p> {}"], 
    answer: "p {}" 
  },

  { question: "15) Which selects id='main'?", 
    options: [".main","#main","main","*main"], 
    answer: "#main" 
  },

  { question: "16) Property for background color?", 
    options: ["bgcolor","background-color","color-background","bg-color"], 
    answer: "background-color" 
  },

  { question: "17) Property for font?", 
    options: ["text-font","font-family","font-text","font"], 
    answer: "font-family" 
  },

  { question: "18) Position relative to normal position?", 
    options: ["absolute","relative","fixed","sticky"], 
    answer: "relative" 
  },

  { question: "19) :hover refers to?", 
    options: ["JS event","Pseudo-class","Font style","CSS variable"], 
    answer: "Pseudo-class" 
  },

  { question: "20) Which is a pseudo-element?", 
    options: [":checked",":first-child","::before",":focus"], 
    answer: "::before" 
  },

  { question: "21) NOT part of box-model?", 
    options: ["Content","Padding","Border","Display"], 
    answer: "Display" 
  },

  { question: "22) Highest precedence?", 
    options: ["External","Internal","Inline","Browser default"], 
    answer: "Inline" 
  },

  { question: "23) div > p — > means?", 
    options: ["Descendant","Child","Sibling","Parent"], 
    answer: "Child" 
  },

  { question: "24) Center text?", 
    options: ["text-position:center","text-center:true","align-text:middle","text-align:center"], 
    answer: "text-align:center" 
  },

  { question: "25) Text shadow property?", 
    options: ["text-shadow","font-shadow","box-shadow","shadow-text"], 
    answer: "text-shadow" 
  },

  { question: "26) Good fallback font?", 
    options: ['Arial','"Roboto", Arial, sans-serif','sans-serif, Arial','font-style:Roboto'], 
    answer: '"Roboto", Arial, sans-serif' 
  },

  { question: "27) Remove list bullets?", 
    options: ["text-decoration:none","bullet:0","list-style:none","display:inline"], 
    answer: "list-style:none" 
  },

  {
    question: "28) What is the default display value of &lt;div&gt;?",
    options: ["inline", "block", "inline-block", "flex"],
    answer: "block"
  },

  {
    question: "29) What is the default display value of &lt;span&gt;?",
    options: ["block", "inline", "inline-block", "table"],
    answer: "inline"
  },

  { question: "30) Best CSS method for large websites?", 
    options: ["Inline","Internal","External","HTML style"], 
    answer: "External" 
  }
];


// ====== QUIZ LOGIC ======
document.addEventListener("DOMContentLoaded", function () {

  const quizContainer = document.getElementById("quizQuestions");
  const progressBar = document.getElementById("quizProgress");

  // Decode HTML entities
  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  // Generate questions dynamically
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("card", "quiz-card", "p-3", "mb-3", "shadow-sm");

    let optionsHTML = "";

    q.options.forEach((opt, optIndex) => {
      const optId = `q${index}_opt${optIndex}`;
      const encoded = opt.replace(/"/g, '&quot;');

      optionsHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" 
            name="q${index}" 
            value="${encoded}" 
            id="${optId}" 
            onchange="updateProgress()">
          <label class="form-check-label" for="${optId}">${opt}</label>
        </div>
      `;
    });

    questionDiv.innerHTML = `
      <h5>${q.question}</h5>
      ${optionsHTML}
      <div class="answer-text" id="correct-${index}"></div>
    `;

    quizContainer.appendChild(questionDiv);
  });

  // Timer
  let timeLeft = 10 * 60;
  const timerDisplay = document.getElementById("timer");

  const interval = setInterval(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;

    timerDisplay.textContent = `Time Remaining: ${m}:${s < 10 ? "0" : ""}${s}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      submitQuiz();
    }
  }, 1000);

  // Progress bar
  window.updateProgress = function () {
    let answered = 0;

    quizData.forEach((q, i) => {
      if (document.querySelector(`input[name="q${i}"]:checked`)) {
        answered++;
      }
    });

    const percent = Math.floor((answered / quizData.length) * 100);
    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";
  };

  // Submit quiz
  window.submitQuiz = function () {

    clearInterval(interval);

    let score = 0;
    let correct = 0;
    let wrong = 0;

    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      const allOptions = document.querySelectorAll(`input[name="q${index}"]`);

      allOptions.forEach(option => {
        const label = document.querySelector(`label[for="${option.id}"]`);

        // Mark correct answer
        if (decodeHTML(option.value) === decodeHTML(q.answer)) {
          label.classList.add("correct");
        }

        // Mark wrong selected
        if (selected && option.id === selected.id &&
            decodeHTML(selected.value) !== decodeHTML(q.answer)) {
          label.classList.add("wrong");
        }
      });

      if (selected && decodeHTML(selected.value) === decodeHTML(q.answer)) {
        score++;
        correct++;
      } else {
        wrong++;
      }

      document.getElementById(`correct-${index}`).innerHTML =
        `<strong>Correct Answer:</strong> ${q.answer}`;
    });

    showResult(score, correct, wrong);
  };

  // Show result card
  function showResult(score, correct, wrong) {
    const resultDiv = document.getElementById("quizResult");

    resultDiv.innerHTML = `
      <div class="result-card">
        <div class="score-circle">${score} / ${quizData.length}</div>

        <h3>Quiz Completed!</h3>

        <span class="badge bg-success me-2">Correct: ${correct}</span>
        <span class="badge bg-danger me-2">Wrong: ${wrong}</span>
        <span class="badge bg-warning text-dark">Total: ${quizData.length}</span>

        <p class="fs-4 mt-3"><strong>Your Score: ${score}</strong></p>
      </div>
    `;

    resultDiv.scrollIntoView({ behavior: "smooth" });
  }
});
