import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tema renkleri
const themeColor = "#7A52A1"; // Koyu pastel mor
const backgroundColor = "#EAE6F2"; // Lavanta gri

const questions = [
  { question: "How would you describe yourself?", options: ["Extroverted and social", "Balanced, sometimes introverted, sometimes extroverted", "Introverted and calm"] },
  { question: "How do you handle stress?", options: ["By doing sports or physical activities", "By listening to music or watching movies", "By meditating or spending time alone"] },
  { question: "How do you feel about meeting new people?", options: ["Very easy, I start conversations right away", "Moderate, I observe first", "Difficult, because I'm shy"] },
  { question: "What makes you happiest on a weekend?", options: ["Going out with friends", "Staying home with books and movies", "Going on a solo nature trip"] },
  { question: "How do you like spending time with your partner?", options: ["Going out (traveling, concerts, dining out)", "Spending cozy time at home (movies, cooking, relaxing)", "A mix of both, depending on the mood"] },
  { question: "What do you value most in a relationship?", options: ["Trust and loyalty", "Fun and harmony", "Communication and understanding"] },
  { question: "How do you prefer your partner to show affection?", options: ["Through small surprises", "By spending quality time together", "Through verbal expressions of love"] },
  { question: "How do you react during an argument?", options: ["I want to solve it immediately by talking", "I take a break to cool down before discussing", "I withdraw and need time alone"] },
  { question: "Which lifestyle suits you better?", options: ["Adventurous and spontaneous", "Planned and organized", "A balance between the two"] },
  { question: "What kind of relationship do you envision for the future?", options: ["Long-term and serious", "Living in the moment, I go with the flow", "Not sure, getting to know someone is important"] },
  { question: "How do you feel about pets?", options: ["Love them, I have or want one", "Like them, but not sure about having one", "Not really interested"] },
  { question: "What's your ideal vacation?", options: ["Relaxing on a beach", "Exploring cities and sightseeing", "Being in nature, camping or hiking"] },
  { question: "Which activities interest you the most?", options: ["Art and culture (music, theater, museums)", "Sports and outdoor activities (swimming, hiking, cycling)", "Tech and gaming (computers, consoles)"] },
  { question: "What do you usually do in your free time?", options: ["Read books or watch movies", "Hang out with friends", "Learn new things or explore hobbies"] }
];

const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const totalQuestions = questions.length;
  const navigate = useNavigate(); // Sayfa yönlendirme

  const handleSelect = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("User Answers:", selectedAnswers);
      navigate("/personal-info"); // 📌 Son sorudan sonra yeni ekrana geçiş
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundColor }}>
      {/* 🔹 SoulM Logo */}
      <h1 style={styles.logo}>SoulM</h1>

      <div style={styles.container}>
        <h1 style={{ ...styles.title, color: themeColor }}>Personality Test</h1>

        {/* 🔹 Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              backgroundColor: themeColor,
            }}
          ></div>
        </div>

        {/* 🔹 Question */}
        <h2 style={styles.questionText}>{questions[currentQuestion].question}</h2>

        {/* 🔹 Options */}
        <div style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={{ ...styles.optionButton, backgroundColor: themeColor }}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* 🔹 Navigation Buttons */}
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
    fontFamily: "'Poppins', sans-serif",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #FFA500, #7A52A1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  container: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "60px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    width: "90%",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "50px",
  },
  questionText: {
    fontSize: "30px",
    fontWeight: "600",
    marginBottom: "50px",
  },
  progressBarContainer: {
    width: "100%",
    height: "12px",
    backgroundColor: "#ddd",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "25px",
  },
  progressBar: { height: "12px", transition: "width 0.3s ease" },
  optionButton: {
    fontFamily: "'Poppins', sans-serif",
    width: "100%",
    padding: "16px",
    margin: "10px 0",
    fontSize: "18px",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "25px",
  },
  navButton: {
    fontFamily: "'Poppins', sans-serif",
    padding: "14px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#BFA2DB",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

export default PersonalityTest;