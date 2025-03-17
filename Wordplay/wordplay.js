const wordsDatabase = [
    { letters: "ent", words: ["ten", "net"] },
    { letters: "tca", words: ["act", "cat", "at"] },
    { letters: "pto", words: ["top", "pot", "otp", "to"] },
    { letters: "rnu", words: ["run", "urn", "un"] },
    { letters: "tdo", words: ["dot", "tod", "do", "to"] },
    { letters: "onw", words: ["won", "own", "now"] },
    { letters: "wlal", words: ["wall", "all", "law"] },
    { letters: "yeas", words: ["yes", "say", "easy", "sea"] },
    { letters: "npal", words: ["plan", "lap", "pan", "pal", "nap"] },
    { letters: "ramf", words: ["farm", "arm", "far", "ram"] },
    { letters: "aedt", words: ["eat", "tea", "ate", "date"] },
    { letters: "myan", words: ["many", "any", "yam", "may", "man"] },
    { letters: "raer", words: ["rear", "rare", "ear", "era", "are"] },
    { letters: "bhusl", words: ["bus", "bush", "hub", "lush", "blush"] },
    { letters: "dcnya", words: ["candy", "can", "any", "day", "and"] },
    { letters: "ihts", words: ["hit", "it", "hi", "is", "hits", "his", "its", "sit", "shit"] }
];

let currentIndex = 0;
let currentLetters = "";
let correctWords = [];
let foundWords = [];

function startGame() {
    if (currentIndex >= wordsDatabase.length) {
        document.getElementById("letters").innerText = "Game Over!";
        document.getElementById("progress").innerText = "All levels completed!";
        document.getElementById("solutionBtn").disabled = true;
        document.getElementById("nextLevelBtn").disabled = true;
        return;
    }

    let currentData = wordsDatabase[currentIndex];
    currentLetters = currentData.letters;
    correctWords = currentData.words;

    document.getElementById("letters").innerText = currentLetters.split("").join(" ");
    document.getElementById("progress").innerText = `Words Found: 0 / ${correctWords.length}`;
    foundWords = [];
    document.getElementById("foundWords").innerHTML = "";
    document.getElementById("nextLevelBtn").disabled = true;
    document.getElementById("solutionBtn").disabled = false;
}

function checkWord() {
    let userWord = document.getElementById("userInput").value.toLowerCase().trim();
    if (correctWords.includes(userWord) && !foundWords.includes(userWord)) {
        foundWords.push(userWord);
        let listItem = document.createElement("li");
        listItem.innerText = userWord;
        document.getElementById("foundWords").appendChild(listItem);

        let progressText = `Words Found: ${foundWords.length} / ${correctWords.length}`;
        document.getElementById("progress").innerText = progressText;

        if (foundWords.length === correctWords.length) {
            document.getElementById("nextLevelBtn").disabled = false;
        }
    }
    document.getElementById("userInput").value = "";
}

function showSolutions() {
    alert("Possible words: " + correctWords.join(", "));
}

function nextLevel() {
    currentIndex++;
    startGame();
}

window.onload = startGame;