import React, { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Madrid", "London", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Neptune"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra"
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo"
    ],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correctAnswer: "Jupiter"
  },
  {
    question: "In which country is the Great Barrier Reef located?",
    answers: ["Australia", "Brazil", "Mexico", "Indonesia"],
    correctAnswer: "Australia"
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Ag", "Au", "Fe", "Cu"],
    correctAnswer: "Au"
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "What is the smallest prime number?",
    answers: ["1", "2", "3", "5"],
    correctAnswer: "2"
  },
  {
    question: "Which river is the longest in the world?",
    answers: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River"
    ],
    correctAnswer: "Nile River"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain"
    ],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Which planet is known as the 'Evening Star'?",
    answers: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    question: "What is the main function of the human heart?",
    answers: ["Pumping blood", "Digestion", "Producing hormones", "Breathing"],
    correctAnswer: "Pumping blood"
  },
  {
    question: "Which famous document begins with the words 'We the People'?",
    answers: [
      "Universal Declaration of Human Rights",
      "Gettysburg Address",
      "Declaration of Independence",
      "United States Constitution"
    ],
    correctAnswer: "United States Constitution"
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Euro", "Yen", "Dollar", "Pound"],
    correctAnswer: "Yen"
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    answers: [
      "Amelia Earhart",
      "Sally Ride",
      "Valentina Tereshkova",
      "Bessie Coleman"
    ],
    correctAnswer: "Amelia Earhart"
  },
  {
    question: "What is the tallest mountain in Africa?",
    answers: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount McKinley",
      "Mount Fuji"
    ],
    correctAnswer: "Mount Kilimanjaro"
  },
  {
    question: "Which gas do humans breathe in?",
    answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correctAnswer: "Oxygen"
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "O2", "N2"],
    correctAnswer: "H2O"
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'?",
    answers: [
      "Emily Brontë",
      "Jane Austen",
      "Charlotte Brontë",
      "Louisa May Alcott"
    ],
    correctAnswer: "Jane Austen"
  },
  {
    question: "What is the world's largest ocean?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    correctAnswer: "Pacific Ocean"
  }
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer("");
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container">
      {currentQuestion < questions.length ? (
        <div>
          <h1>
            Quiz App <span> By Abdullah</span>
          </h1>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <p>{questions[currentQuestion].question}</p>
          <ul className="question">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSelect(answer)}
                  className={selectedAnswer === answer ? "selected" : ""}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Quiz Results</h1>
          <p>
            Your Score: {score} out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
