//questions and answers
const quizData = [
  { question: "1) What does CSS Stand for?", 
    options: ["Cascading Style Sheets","Computer Style Sheets","Create Style Sheets","Color Style Sheets"], 
    answer: "Cascading Style Sheets" 
  },
  { question: "2) Which CSS Selector is used to target a specific class?", 
    options: ["#classname",".classname","classname","[classname]"], 
    answer: ".classname" 
  },
  { question: "3) Which CSS selector is used to target a specific ID?", 
    options: ["#idname",".idname","idname","[idname]"], 
    answer: "#idname" 
  },
  { question: "4) Which property value makes an element flow along with other elements in same line?", 
    options: ["block","inline","none","flex"], 
    answer: "inline" 
  },
  { question: "5) Which property value causes an element to start on a new line and take up the full width available?",
    options: ["absolute","inline","inline-block","block"], 
    answer: "block" 
  },
  { question: "6) Which Pseudo-class targets a link that has been visited by the user?",
    options: [":hover",":active",":link",":visited"], 
    answer: ":visited" 
  },
  { question: "7) Which Pseudo-class targets a link when it is being clicked?", 
    options: [":hover",":active",":link",":visited"],
    answer: ":active" 
  },
  { question: "8) Which Pseudo-class targets a link when the mouse is over it?", 
    options: [":hover",":active",":link",":visited"], 
    answer: ":hover" 
  },
  { question: "9) Which Pseudo-class targets a link that has not been visited?", 
    options: [":hover",":link",":active",":focus"],
    answer: ":link" 
  },
  { question: "10) Which CSS property controls the display style of an element?",
    options: ["visibility","position","display","float"], 
    answer: "display" 
  },
 { question: "11) What is the correct HTML tag to link an external CSS file?", 
  options: [
    "&lt;style src=&quot;style.css&quot;&gt;",
    "&lt;css href=&quot;style.css&quot;&gt;",
    "&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;",
    "&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;"
  ], 
  answer: "&lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;" 
},
{ 
  question: "12) Which is the correct way to apply inline CSS?", 
  options: [
    "&lt;p style=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;",
    "&lt;p css=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;",
    "&lt;style=&quot;color: red;&quot;&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;/style&gt;",
    "&lt;css&gt;color:red;&lt;/css&gt;"
  ], 
  answer: "&lt;p style=&quot;color: red;&quot;&gt;Hello&lt;/p&gt;" 
},
{ 
  question: "13) Internal CSS is written inside:", 
  options: [
    "&lt;body&gt;",
    "&lt;style&gt; inside &lt;head&gt;",
    "&lt;script&gt;",
    "&lt;link&gt;"
  ], 
  answer: "&lt;style&gt; inside &lt;head&gt;" 
},

{ question: "14) What is the correct CSS syntax to select all <p> elements?", 
  options: ["p {}","#p {}",".p {}","<p> {}"], 
  answer: "p {}" 
},
  { question: "15) Which selector selects an element with id='main'?", 
    options: [".main","#main","main","*main"], 
    answer: "#main" 
  },
  { question: "16) Which property is used to change the background color?", 
    options: ["bgcolor","background-color","color-background","bg-color"], 
    answer: "background-color" 
  },
  { question: "17) Which property is used to change text font?", 
    options: ["text-font","font-family","font-text","font"], 
    answer: "font-family" 
  },
  { question: "18) Which CSS property is used to position an element relative to its normal position?", 
    options: ["absolute","relative","fixed","sticky"], 
    answer: "relative" },
  { question: "19) What does :hover refer to in CSS?", 
    options: ["A JavaScript event","A pseudo-class","A font style","A CSS variable"], 
    answer: "A pseudo-class" 
  },
  { question: "20) Which of the following is a pseudo-element in CSS?", 
    options: [":checked",":first-child","::before",":focus"], 
    answer: "::before" 
  },
  { question: "21) Which of the following is NOT a part of the CSS Box Model?", 
    options: ["Content","Padding","Border","Display"], 
    answer: "Display" 
  },
  { question: "22) Which of the following CSS orders has the highest precedence?", 
    options: ["External CSS","Internal CSS","Inline CSS","Browser default"], 
    answer: "Inline CSS" 
  },
  { question: "23) In the rule div > p, the > symbol is called:", 
    options: ["Descendant Selector","Child Selector","Sibling Selector","Parent Selector"], 
    answer: "Child Selector" 
  },
  { question: "24) Which property is used to align text to the center?", 
    options: ["text-position: center;","text-center: true;","align-text: middle;","text-align: center;"], 
    answer: "text-align: center;" 
  },
  { question: "25) Which CSS property is used to add shadow to text?", 
    options: ["text-shadow","font-shadow","box-shadow","shadow-text"], 
    answer: "text-shadow" 
  },
  { question: "26) Which font family ensures better fallback?", 
    options: ['font-family: Arial;','font-family: "Roboto", Arial, sans-serif;','font-family: sans-serif, Arial;','font-style: Roboto;'], 
    answer: 'font-family: "Roboto", Arial, sans-serif;' 
  },
  { question: "27) Which property is used to remove bullet points from a list?", 
    options: ["text-decoration: none;","bullet: 0;","list-style: none;","display: inline;"], 
    answer: "list-style: none;" 
  },
  { 
  question: "28) What is the default display value of &lt;div&gt;?", 
  options: ["inline","block","inline-block","flex"], 
  answer: "block" 
},

  { question: "29) What is the display type of &lt;span&gt; by default?", 
  options: ["block","inline","inline-block","table"], 
  answer: "inline" },

  { question: "30) Which CSS method is considered best practice for large websites?", 
    options: ["Inline CSS","Internal CSS","External CSS","HTML style attribute"], 
    answer: "External CSS" 
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const quizContainer = document.getElementById("quizQuestions");
  const progressBar = document.getElementById("quizProgress");

  // Generate quiz
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("card", "quiz-card", "p-3", "mb-3", "shadow-sm");
    questionDiv.setAttribute("id", `question-${index}`);
    let optionsHTML = "";

    q.options.forEach((opt, optIndex) => {
      const safeOptId = `q${index}_opt${optIndex}`;
      optionsHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q${index}" value="${opt}" id="${safeOptId}" onchange="updateProgress()">
          <label class="form-check-label" for="${safeOptId}">${opt}</label>
        </div>
      `;
    });

    questionDiv.innerHTML = `<h5>${q.question}</h5>${optionsHTML}<div class="answer-text mt-2" id="correct-${index}"></div>`;
    quizContainer.appendChild(questionDiv);
  });

  // Timer
  let totalTime = 10 * 60; 
  const timerDisplay = document.getElementById("timer");

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    totalTime--;

    if (totalTime < 0) {
      clearInterval(timerInterval);
      alert("Time is up! Submitting your quiz automatically.");
      submitQuiz();
    }
  }, 1000);

  window.updateProgress = function() {
    let answered = 0;
    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if(selected) answered++;
    });
    const percent = Math.floor((answered / quizData.length) * 100);
    progressBar.style.width = percent + '%';
    progressBar.textContent = `${percent}%`;
  }

  window.submitQuiz = function() {
    clearInterval(timerInterval); 
    let score = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      const allOptions = document.querySelectorAll(`input[name="q${index}"]`);
      const answerTextDiv = document.getElementById(`correct-${index}`);

      allOptions.forEach(option => {
        const label = document.querySelector(`label[for="${option.id}"]`);
        label.classList.remove("correct", "wrong");
        if(option.value === q.answer){
          label.classList.add("correct");
        }
      });

      if (selected) {
        if (selected.value === q.answer) {
          score++;
          correctAnswers++;
        } else {
          wrongAnswers++;
          const label = document.querySelector(`label[for="${selected.id}"]`);
          label.classList.add("wrong");
        }
      } else {
        wrongAnswers++;
      }

      answerTextDiv.innerHTML = `<strong>Correct Answer:</strong> ${q.answer}`;
    });

   const resultDiv = document.getElementById("quizResult");
resultDiv.innerHTML = `
  <div class="result-card p-4">
    <div class="score-circle">${score} / ${quizData.length}</div>
    <h3> Quiz Completed! </h3>
    <div class="mt-3">
      <span class="badge bg-success me-2">Correct: ${correctAnswers}</span>
      <span class="badge bg-danger me-2">Wrong: ${wrongAnswers}</span>
      <span class="badge bg-warning text-dark">Total: ${quizData.length}</span>
    </div>
    <p class="mt-3 fs-5">Your Score: <strong>${score} / ${quizData.length}</strong></p>
  </div>
`;

    resultDiv.scrollIntoView({ behavior: "smooth" });
  };
});
