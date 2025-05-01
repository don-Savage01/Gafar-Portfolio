import React, { useState, useEffect } from "react";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Quiz questions data
  const questions = [
    {
      question: "What is the correct syntax for a React functional component?",
      options: [
        "class MyComponent extends React.Component",
        "function MyComponent() { return <div>Hello</div> }",
        "const MyComponent = () => <div>Hello</div>",
        "Both 2 and 3",
      ],
      answer: 3,
    },
    {
      question: "Which method is used to update state in React?",
      options: [
        "this.updateState()",
        "this.setState()",
        "this.modifyState()",
        "this.changeState()",
      ],
      answer: 1,
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax",
        "JavaScript Execute",
      ],
      answer: 0,
    },
    {
      question: "Which hook is used for side effects in functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: 1,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A lightweight copy of the actual DOM",
        "A 3D representation of components",
        "A database for storing components",
        "A testing environment",
      ],
      answer: 0,
    },
    {
      question:
        "Which JavaScript method is used to add an item to the end of an array?",
      options: [
        "array.unshift()",
        "array.push()",
        "array.pop()",
        "array.shift()",
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the key prop in React lists?",
      options: [
        "To provide style information",
        "To help React identify which items have changed",
        "To make items clickable",
        "To add animation effects",
      ],
      answer: 1,
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      options: ["==", "===", "=", "!=="],
      answer: 1,
    },
    {
      question: "What is the output of: console.log(typeof [])?",
      options: ["array", "object", "list", "undefined"],
      answer: 1,
    },
    {
      question: "How do you create a controlled component in React?",
      options: [
        "By using refs",
        "By letting the DOM handle the state",
        "By connecting form elements to component state",
        "By using external libraries",
      ],
      answer: 2,
    },
    {
      question: "What is the purpose of the dependency array in useEffect?",
      options: [
        "To specify which props to watch",
        "To list required npm packages",
        "To define component styles",
        "To declare state variables",
      ],
      answer: 0,
    },
    {
      question: "Which method converts a JavaScript object to a JSON string?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "object.toJSON()",
        "stringifyJSON()",
      ],
      answer: 1,
    },
    {
      question:
        "What is the correct way to render multiple components in React?",
      options: [
        "Wrap them in a <div>",
        "Use React.Fragment",
        "Return them as an array",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The global object",
        "The object that owns the executing code",
        "The parent component",
      ],
      answer: 2,
    },
    {
      question: "Which lifecycle method is called after a component renders?",
      options: [
        "componentWillMount",
        "componentDidMount",
        "componentWillUpdate",
        "componentDidUpdate",
      ],
      answer: 1,
    },
    {
      question: "What is the output of: console.log(1 + '1') in JavaScript?",
      options: ["2", "11", "NaN", "Error"],
      answer: 1,
    },
    {
      question: "How do you pass data from parent to child component?",
      options: ["Using state", "Using props", "Using refs", "Using context"],
      answer: 1,
    },
    {
      question: "What is the purpose of the map() function in JavaScript?",
      options: [
        "To create a new array by transforming each element",
        "To filter array elements",
        "To reduce an array to a single value",
        "To sort array elements",
      ],
      answer: 0,
    },
    {
      question: "Which hook should you use for performance optimization?",
      options: ["useMemo", "useCallback", "useRef", "Both 1 and 2"],
      answer: 3,
    },
    {
      question: "What is closure in JavaScript?",
      options: [
        "A function bundled with its lexical environment",
        "A way to close browser tabs",
        "A method to hide variables",
        "A React component lifecycle phase",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of PropTypes?",
      options: [
        "To validate component props",
        "To define component types",
        "To create new properties",
        "To style components",
      ],
      answer: 0,
    },
    {
      question:
        "Which method returns the first element that matches a CSS selector?",
      options: [
        "document.querySelector()",
        "document.getElementById()",
        "document.getElementsByClassName()",
        "document.findElement()",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of the useReducer hook?",
      options: [
        "To manage complex state logic",
        "To reduce component size",
        "To combine multiple hooks",
        "To optimize rendering",
      ],
      answer: 0,
    },
    {
      question: "What does the spread operator (...) do in JavaScript?",
      options: [
        "Expands iterables into individual elements",
        "Combines objects into one",
        "Creates copies of arrays/objects",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question:
        "Which method is used to change the URL without reloading the page?",
      options: [
        "window.location.replace()",
        "window.location.href",
        "window.history.pushState()",
        "document.url.change()",
      ],
      answer: 2,
    },
    {
      question: "What is the purpose of React.memo?",
      options: [
        "To memorize component state",
        "To prevent unnecessary re-renders",
        "To create memoized selectors",
        "To optimize context usage",
      ],
      answer: 1,
    },
    {
      question: "Which array method modifies the original array?",
      options: ["map()", "filter()", "slice()", "splice()"],
      answer: 3,
    },
    {
      question: "What is the purpose of the key prop in React lists?",
      options: [
        "To provide style information",
        "To help React identify which items have changed",
        "To make items clickable",
        "To add animation effects",
      ],
      answer: 1,
    },
    {
      question: "Which method returns a promise in JavaScript?",
      options: [
        "setTimeout()",
        "fetch()",
        "console.log()",
        "document.querySelector()",
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the useContext hook?",
      options: [
        "To use context in functional components",
        "To create new contexts",
        "To replace Redux",
        "To manage component state",
      ],
      answer: 0,
    },
    {
      question: "What does the Array.reduce() method do?",
      options: [
        "Reduces array length",
        "Executes a reducer function on each element",
        "Filters array elements",
        "Sorts array elements",
      ],
      answer: 1,
    },
  ];

  // Shuffle questions on component mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (selectedIndex) => {
    setSelectedOption(selectedIndex);
    const correct =
      selectedIndex === shuffledQuestions[currentQuestion]?.answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (shuffledQuestions.length === 0) {
    return <div className="text-white text-center">Loading quiz...</div>;
  }

  if (showScore) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">
            Your score: {score}/{shuffledQuestions.length}(
            {Math.round((score / shuffledQuestions.length) * 100)}%)
          </p>
          <button
            onClick={restartQuiz}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition text-lg font-medium"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg font-medium">
            Question {currentQuestion + 1}/{shuffledQuestions.length}
          </span>
          <span className="text-lg font-medium">Score: {score}</span>
        </div>

        <h3 className="text-xl font-semibold mb-6">
          {shuffledQuestions[currentQuestion]?.question}
        </h3>

        <div className="space-y-3">
          {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
              className={`w-full p-3 rounded-lg text-left transition
                ${
                  selectedOption === null
                    ? "bg-indigo-700 hover:bg-indigo-600"
                    : index === shuffledQuestions[currentQuestion]?.answer
                    ? "bg-green-600"
                    : selectedOption === index
                    ? "bg-red-600"
                    : "bg-indigo-700 opacity-70"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption !== null && (
          <div className="mt-4">
            <div
              className={`p-3 rounded-lg ${
                isCorrect ? "bg-green-900" : "bg-red-900"
              } mb-4`}
            >
              {isCorrect ? (
                <p className="text-green-300">✓ Correct!</p>
              ) : (
                <p className="text-red-300">
                  ✗ Wrong! The correct answer is:{" "}
                  <span className="text-green-300">
                    {
                      shuffledQuestions[currentQuestion]?.options[
                        shuffledQuestions[currentQuestion]?.answer
                      ]
                    }
                  </span>
                </p>
              )}
            </div>
            <button
              onClick={handleNextQuestion}
              className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
