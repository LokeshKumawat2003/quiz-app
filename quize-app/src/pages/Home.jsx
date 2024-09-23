import React from "react";
import "../style/home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const naviget = useNavigate();
  const handleMove = () => {
    naviget("/quiz");
  };

  return (
    <div>
      <div className="quiz-box" onClick={handleMove}>
        <div className="quiz-qusetion">
          <div className="box-quize-title">
            <h2>Cap-11: Deep Dive into React Context API Quiz</h2>
            <h3 className="type-quiz">Javscript</h3>
          </div>
          <div className="date-of-quize">
            <h3>
              Date: <span className="object-color"> 22/5/2024</span>
            </h3>
            <h3 className="type-quiz-subject">
              Subject: <span className="object-color"> Coding</span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
