const quizData = [
    {
        question: "Who is the current Prime Minister of India?",
        options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
        answer: "Narendra Modi"
    },
    {
        question: "Who is the current President of the United States?",
        options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
        answer: "Donald Trump"
    },
    {
        question: "Who is the current President of Russia?",
        options: ["Dmitry Medvedev", "Vladimir Putin", "Alexei Navalny", "Boris Yeltsin"],
        answer: "Vladimir Putin"
    },
    {
        question: "Who is the current Prime Minister of Pakistan?",
        options: ["Imran Khan", "Bilawal Bhutto", "Asif Ali Zardari", "Shehbaz Sharif"],
        answer: "Shehbaz Sharif"
    },
    {
        question: "Who is the current President of France?",
        options: ["François Hollande", "Nicolas Sarkozy", "Marine Le Pen", "Emmanuel Macron"],
        answer: "Emmanuel Macron"
    },
    {
        question: "Who is the current Chancellor of Germany?",
        options: ["Angela Merkel", "Olaf Scholz", "Frank-Walter Steinmeier", "Markus Söder"],
        answer: "Olaf Scholz"
    },
    {
        question: "Who is the current Prime Minister of the United Kingdom?",
        options: ["Rishi Sunak", "Boris Johnson", "Keir Starmer", "David Cameron"],
        answer: "Keir Starmer"
    },
    {
        question: "Who is the current Prime Minister of Canada?",
        options: ["Stephen Harper", "Andrew Scheer", "Mark Carney", "Jagmeet Singh"],
        answer: "Mark Carney"
    },
    {
        question: "Who is the current President of China?",
        options: ["Xi Jinping", "Li Keqiang", "Hu Jintao", "Mao Zedong"],
        answer: "Xi Jinping"
    },
    {
        question: "Who is the current Prime Minister of Japan?",
        options: ["Shinzo Abe", "Yoshihide Suga", "Shigeru Ishiba", "Taro Aso"],
        answer: "Shigeru Ishiba"
    },
    {
        question: "Who is the current President of India?",
        options: ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "Venkaiah Naidu"],
        answer: "Droupadi Murmu"
    },
    {
        question: "Who is the current Prime Minister of Australia?",
        options: ["Scott Morrison", "Anthony Albanese", "Kevin Rudd", "Malcolm Turnbull"],
        answer: "Anthony Albanese"
    },
    {
        question: "Who is the current President of Brazil?",
        options: ["Luiz Inácio Lula da Silva", "Jair Bolsonaro", "Michel Temer", "Dilma Rousseff"],
        answer: "Luiz Inácio Lula da Silva"
    },
    {
        question: "Who is the current Prime Minister of Italy?",
        options: ["Mario Draghi", "Giuseppe Conte", "Giorgia Meloni", "Silvio Berlusconi"],
        answer: "Giorgia Meloni"
    },
    {
        question: "Who is the current President of South Africa?",
        options: ["Thabo Mbeki", "Cyril Ramaphosa", "Jacob Zuma", "Nelson Mandela"],
        answer: "Cyril Ramaphosa"
    },
    {
        question: "Who is the current President of Mexico?",
        options: ["Vicente Fox", "Enrique Peña Nieto", "Claudia Sheinbaum Pardo", "Felipe Calderón"],
        answer: "Claudia Sheinbaum Pardo"
    },
    {
        question: "Who is the current Prime Minister of Spain?",
        options: ["José María Aznar", "Mariano Rajoy", "Pedro Sánchez", "Pablo Iglesias"],
        answer: "Pedro Sánchez"
    },
    {
        question: "Who is the current Prime Minister of New Zealand?",
        options: ["John Key", "Jacinda Ardern", "Christopher Luxon", "Helen Clark"],
        answer: "Christopher Luxon"
    },
    {
        question: "Who is the current President of Turkey?",
        options: ["Recep Tayyip Erdoğan", "Abdullah Gül", "Ahmet Davutoğlu", "Binali Yildrim"],
        answer: "Recep Tayyip Erdoğan"
    },
    {
        question: "Who is the current President of Ukraine?",
        options: ["Volodymyr Zelenskyy", "Petro Poroshenko", "Viktor Yanukovych", "Yulia Tymoshenko"],
        answer: "Volodymyr Zelenskyy"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";
    feedbackElement.textContent = ""; 
    answered = false;

    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("div");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, button) {
    if (answered) return;
    answered = true;

    const feedbackElement = document.getElementById("feedback");
    const correctAnswer = quizData[currentQuestion].answer;

    if (selected === correctAnswer) {
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "lightgreen";
        button.classList.add("correct");
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is ${correctAnswer}`;
        feedbackElement.style.color = "red";
        button.classList.add("wrong");
    }

    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").textContent = `Your final score: ${score}/${quizData.length}`;
        document.getElementById("feedback").style.color = "yellow";
    }
}

loadQuestion();