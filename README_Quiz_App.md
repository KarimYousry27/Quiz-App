# 🧠 Quiz App

An interactive quiz application built with **HTML, CSS, Bootstrap, and vanilla JavaScript**. It uses the [Open Trivia Database API](https://opentdb.com/) to load trivia questions based on the category, difficulty, and number of questions selected by the user.

I built this project to practice working with APIs, JavaScript classes, ES6 modules, and DOM manipulation without using a front-end framework.

## ✨ Features

- Choose a quiz category and difficulty level.
- Select the number of questions.
- Load trivia questions from an external API.
- Answer one question at a time and receive visual feedback.
- Automatically move to the next question after answering.
- Track the score and display the final result.
- Return to the starting screen to play again.
- Responsive interface with Bootstrap and animations using Animate.css.

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Custom styling
- **Bootstrap** – Responsive layout and UI components
- **JavaScript (ES6+)** – Quiz logic and user interactions
- **Fetch API / async-await** – Retrieving questions
- **ES6 Modules & Classes** – Organizing the application
- **Animate.css** – Transitions and animations

## 📁 Project Structure

```text
quiz app/
├── index.html
├── CSS/
│   ├── bootstrap.min.css
│   └── style.css
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── index.js
│   ├── quiz.js
│   └── question.js
├── images/
│   └── quiz.png
├── question card.txt
├── result.txt
└── readme.md
```

## ▶️ Getting Started

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Run `index.html` using the **Live Server** extension or another local development server.
4. Choose your quiz settings and click **Start**.

No installation or build step is required. An internet connection is needed to fetch questions from the API.

## ⚙️ How It Works

1. The user chooses the quiz settings.
2. `index.js` reads the selections and starts a quiz.
3. The `Quiz` class in `quiz.js` fetches questions and keeps track of the score.
4. The `Question` class in `question.js` displays each question, checks the selected answer, and moves to the next one.
5. After the final question, the application displays the total score and offers a way to start again.

## 💡 What I Practiced

This project helped me practice **object-oriented JavaScript**, separating code into modules, making asynchronous API requests, handling click events, updating the DOM, and managing the state of a small interactive application.

## 📝 Notes

Questions are provided by the Open Trivia Database API, so availability depends on the service and the selected quiz settings. This is a front-end learning project; it does not require a backend or user accounts.

## 👨‍💻 Author

**Karim Yousry**  
[GitHub](https://github.com/KarimYousry27)
