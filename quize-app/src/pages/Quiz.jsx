import React, { useEffect, useState } from "react";
import "../style/quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../Reducer/quizAction";
import { useNavigate } from "react-router-dom";
import { count } from "../Reducer/Scrose";
export const Quiz = () => {
  const naviget = useNavigate();
  const [opction, setOpctions] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quiz);
  const [page, sePage] = useState(1);
  const [scro, setScro] = useState(0);
  const data2 = data && data.data && data.data.data;
  const total = data && data.data && data.data.totalPages;

  useEffect(() => {
    dispatch(fetchApi(page));
  }, [dispatch, page]);

  const handleChange = (e) => {
    const answer = e.target.value;
    setOpctions(answer);
  };

  const handleNext = () => {
    data2.map((el, i) => {
      if (opction == el.correctOptionIndex) {
        setScro((prev) => prev + 1);
      }
    });
    sePage((prev) => prev + 1);
    if (total == page) {
      naviget("/resuld");
      dispatch(count(scro))
    }
  };
  const handlePrev = () => {
    setScro((prev) => prev - 1);
    sePage((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{scro}</h1>
      <div className="quiz-question">
        <div className="question-box">
          {data2 &&
            data2.map((el, i) => {
              // console.log(el.options);
              return (
                <div key={i}>
                  <h1>
                    Q{page} {el.question}
                  </h1>

                  <div className="opction-box">
                    <div className="opctions">
                      <div className="opction-selection">
                        <input
                          type="radio"
                          onChange={handleChange}
                          value={0}
                          name="a"
                        />
                        <p className="opction-wrap">1. {el.options[0]}</p>
                      </div>
                      <div className="opction-selection">
                        <input
                          type="radio"
                          onChange={handleChange}
                          value={1}
                          name="a"
                        />
                        <p className="opction-wrap">2. {el.options[1]}</p>
                      </div>
                      <div className="opction-selection">
                        <input
                          type="radio"
                          onChange={handleChange}
                          value={2}
                          name="a"
                        />
                        <p className="opction-wrap">3. {el.options[2]}</p>
                      </div>
                      <div className="opction-selection">
                        <input
                          type="radio"
                          onChange={handleChange}
                          value={3}
                          name="a"
                        />
                        <p className="opction-wrap">4. {el.options[3]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="btn-box">
          <button onClick={handlePrev}>Prev</button>
          <h4>{page}</h4>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};
