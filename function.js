const body= document.querySelector("body"),
      sidebar= body.querySelector(".sidebar"),
      toggle= body.querySelector(".toggle"),
      modeSwitch= body.querySelector(".toggle-switch"),
      modeText= body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar .classList.toggle("close");
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText="Light Mode"
        }
        else{
            modeText.innerText= "Dark Mode"
        }
      });

// Function for quiz
const answerOptions= document.querySelector(".answer-options");
const nextQuestionBtn= document.querySelector(".next-question-btn");
const questionStatus= document.querySelector(".question-status");
const timerDisplay= document.querySelector(".timer-duration");
const resultContainer= document.querySelector(".result-container");
const quizContainer= document.querySelector(".quiz-container");
const configContainer= document.querySelector(".config-container");
const quizTimeLimit= 15;

let currentTime= quizTimeLimit;
let timer= null;
let quiztimeline = "before-1945";
let currentQuestion= null;
let numberOfquestion= 5;
const questionIndexHistory= [];
let correctAnswerCount =0;

// reset time when get in next one
const resetTimer=() =>{
    clearInterval(timer);
    currentTime= quizTimeLimit;
    timerDisplay.textContent=`${currentTime}sec`
}

// start. the timer for each question
const startTimer=() =>{
    timer= setInterval(() =>{
        currentTime--;
        timerDisplay.textContent=`${currentTime}sec`
        if(currentTime<=0){
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility="visible";
            quizContainer.querySelector(".quiz-timer").style.background="#c31402";

            // disable chose when selected answer
            answerOptions.querySelectorAll(".answer-options").forEach((option)=> (option.style.pointerEvents= "none"));
        }
    }, 1000);
}

const showQuizResult=() =>{
    quizContainer.style.display= "none";
    resultContainer.style.display= "block";

    const resultText=`You answered <b>${correctAnswerCount}</b> out of <b>${numberOfquestion}</b> Questions correct, Great Job!!`;
    document.querySelector(".show-message").innerHTML =resultText;
}

// Get random question from category
const getRandomQuestion=() =>{
    const categoryQuestion = questions.find(cat => cat.category.toLowerCase() === quiztimeline.toLowerCase())?.questions || [];

    // show result after all question
    if(questionIndexHistory.length >= Math.min(categoryQuestion.length,numberOfquestion)){
        return showQuizResult();
    }

    // filter out chosen question and get new one
    const availableQuestion= categoryQuestion.filter((_,index)=> !questionIndexHistory.includes(index));
    
    const randomQuestion= availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
    questionIndexHistory.push(categoryQuestion.indexOf(randomQuestion));
    return randomQuestion;
}

// Paint green to answer
const highlightCorrectAnswer=() =>{
    const correctOption =answerOptions.children[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    // Insert tick and X to correct and wrong answer
    const iconHTML=`<div class="quiz-timer">`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// detect which answer is correct
const handleAnswer=(option, answerIndex) =>{
    clearInterval(timer);
    const isCorrect =currentQuestion.correctAnswer ===answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    !isCorrect ? highlightCorrectAnswer(): correctAnswerCount++;
    // Insert tick and X to correct and wrong answer
    const iconHTML=`<span style="font-size: 20px;">${isCorrect ? '✓' :'✗'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // disable chose when selected answer
    answerOptions.querySelectorAll("li").forEach(option=> option.style.pointerEvents= "none");
    nextQuestionBtn.style.visibility="visible";
}

// put current question to the ui
const renderQuestion=() =>{
    currentQuestion= getRandomQuestion();
    if(!currentQuestion) return;
    console.log(currentQuestion);

    resetTimer();
    startTimer();

    quizContainer.querySelector(".quiz-timer").style.background="var(--text-color)";

    // Update QUestion and show new one
    answerOptions.innerHTML="";
    nextQuestionBtn.style.visibility="hidden";
    document.querySelector(".question-text").textContent =currentQuestion.question;
    questionStatus.innerHTML=`<b>${questionIndexHistory.length}</b> of <b>${numberOfquestion}</b> Questions`
    currentQuestion.options.forEach((option, index) =>{
        const li=document.createElement("li");
        li.classList.add("answer-options");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li,index))
    })
}

const resetQuiz=() =>{
    resetTimer();
    correctAnswerCount=0;
    questionIndexHistory.length=0;

    configContainer.style.display="block";
    resultContainer.style.display="none";
}

const startQuiz=() =>{
    configContainer.style.display="none";
    quizContainer.style.display="block";

    // select for challenges option
    quiztimeline = configContainer.querySelector(".time-line .chosen-time.active").textContent;
    numberOfquestion = parseInt(configContainer.querySelector(".num-question .question_optionNum.active").textContent);

    renderQuestion();
}

// select new number of question chosen
configContainer.querySelectorAll(".num-question .question_optionNum").forEach(option =>{
    option.addEventListener("click", ()=>{
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add('active');
    });
});

configContainer.querySelectorAll(".time-line .chosen-time").forEach(option =>{
    option.addEventListener("click", ()=>{
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add('active');
    });
});

nextQuestionBtn.addEventListener("click", renderQuestion);
resultContainer.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
configContainer.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);