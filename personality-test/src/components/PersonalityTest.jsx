import React, { useState } from "react";

const questions = [
  {
    question: "How would you describe yourself?",
    options: [
      "Extroverted and social",
      "Balanced, sometimes introverted, sometimes extroverted",
      "Introverted and calm",
    ],
  },
  {
    question: "How do you handle stress?",
    options: [
      "By doing sports or physical activities",
      "By listening to music or watching movies",
      "By meditating or spending time alone",
    ],
  },
  {
    question: "How do you feel about meeting new people?",
    options: [
      "Very easy, I start conversations right away",
      "Moderate, I observe first",
      "Difficult, because I'm shy",
    ],
  },
  {
    question: "What makes you happiest on a weekend?",
    options: [
      "Going out with friends",
      "Staying home with books and movies",
      "Going on a solo nature trip",
    ],
  },
  {
    question: "How do you like spending time with your partner?",
    options: [
      "Going out (traveling, concerts, dining out)",
      "Spending cozy time at home (movies, cooking, relaxing)",
      "A mix of both, depending on the mood",
    ],
  },
  {
    question: "What do you value most in a relationship?",
    options: ["Trust and loyalty", "Fun and harmony", "Communication and understanding"],
  },
  {
    question: "How do you prefer your partner to show affection?",
    options: [
      "Through small surprises",
      "By spending quality time together",
      "Through verbal expressions of love",
    ],
  },
  {
    question: "How do you react during an argument?",
    options: [
      "I want to solve it immediately by talking",
      "I take a break to cool down before discussing",
      "I withdraw and need time alone",
    ],
  },
  {
    question: "What lifestyle suits you best?",
    options: [
      "Adventurous and spontaneous",
      "Organized and planned",
      "Balanced between planned and spontaneous",
    ],
  },
  {
    question: "What type of relationship are you looking for?",
    options: [
      "A long-term, serious relationship",
      "I just go with the flow and see what happens",
      "I'm not sure yet, getting to know someone is important",
    ],
  },
  {
    question: "How do you feel about pets?",
    options: [
      "I love them! I have one or more pets",
      "I like them but I'm unsure about owning one",
      "Not really interested in pets",
    ],
  },
  {
    question: "What's your favorite vacation type?",
    options: [
      "Relaxing on a beach",
      "Exploring cities and cultural spots",
      "Being in nature, hiking, or camping",
    ],
  },
  {
    question: "Which activities do you enjoy most?",
    options: [
      "Arts and culture (music, theater, exhibitions, etc.)",
      "Sports and outdoor activities (swimming, hiking, cycling, etc.)",
      "Technology and gaming (computer, console games, etc.)",
    ],
  },
  {
    question: "What do you usually do in your free time during the weekdays?",
    options: [
      "Reading books or watching movies",
      "Hanging out with friends",
      "Learning new things or developing a hobby",
    ],
  },
];

const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const totalQuestions = questions.length;

  const handleSelect = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Test completed! Your results will be processed.");
      console.log("User Answers:", selectedAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        {/* Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>

        {/* Question */}
        <h2 style={styles.questionText}>{questions[currentQuestion].question}</h2>

        {/* Options */}
        <div style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} style={styles.optionButton} onClick={() => handleSelect(option)}>
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div style={styles.navigationContainer}>
          <button onClick={handlePrevious} disabled={currentQuestion === 0} style={styles.navButton}>
            ◀ Previous
          </button>
          <button disabled style={styles.navButton}>
            {currentQuestion + 1} / {totalQuestions}
          </button>
        </div>
      </div>
    </div>
  );
};

// **Updated Styles**
const styles = {
  pageContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#6a0dad",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
  },
  container: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    width: "90%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  progressBarContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressBar: {
    height: "10px",
    backgroundColor: "#6a0dad",
    transition: "width 0.3s ease",
  },
  questionText: {
    fontSize: "22px",
    color: "#333",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  optionButton: {
    width: "100%",
    padding: "14px",
    margin: "8px 0",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#6a0dad",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  navButton: {
    padding: "12px 18px",
    backgroundColor: "#ddd",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default PersonalityTest;