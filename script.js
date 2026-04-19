const quizData = [
    {
        question: "HAVE YOU PRACTICED SPORT OR ANY PHYSICAL ACTIVITY OUT OF YOUR WORKING HOURS AT LEAST 30 MIN OR MORE DURING THE LAST MONTH?",
        options: ["A. 3 times or more per week", "B. 1 or 2 times per week", "C. Less than 4 times per month", "D. I don't practice sport during the month"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let userScore = 0;
let selectedOptionIndex = null;

const homeArea = document.getElementById('homeArea');
const playArea = document.getElementById('playArea');
const questionText = document.getElementById('questionText');
const optionsContainer = document.querySelector('.options-grid');
const progressText = document.getElementById('progress');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

progressText.innerText = `Online Quiz Platform`;

function startQuiz() {
    homeArea.classList.add('hidden');
    playArea.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    progressText.innerText = `QUESTION ${currentQuestionIndex + 1}/${quizData.length}`;
    
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
}

function selectOption(index) {
    selectedOptionIndex = index;
    const allOptions = document.querySelectorAll('.option-btn');
    
    allOptions.forEach(opt => opt.classList.remove('selected'));
    allOptions[index].classList.add('selected');
}

function nextQuestion() {
    if (selectedOptionIndex !== null) {
        if (selectedOptionIndex === quizData[currentQuestionIndex].correct) {
            userScore++;
        }
        
        selectedOptionIndex = null;
        
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Please select an option!");
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function endQuiz() {
    playArea.classList.add('hidden');
    alert(`Quiz Finished! Your Score: ${userScore}/${quizData.length}`);
    location.reload();
}