import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Question, initQuestions } from "./questinos";

type Timer = {
  secs: number;
  mins: number;
};

const initTimer = {
  secs: 0,
  mins: 5,
};

function App() {
  let intervalId = useRef<number>();
  const [timer, setTimer] = useState<Timer>(initTimer);
  const [questions, setQuestions] = useState<Question[]>(initQuestions);
  const [current, setCurrent] = useState<number>(0);
  const [selectWarn, setSelectWarn] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [passed, setPassed] = useState(false);
  const [score, setScore] = useState(0);

  const intervalSet = () => {
    intervalId.current = setInterval(() => {
      setTimer((prevTimer: Timer) => {
        const timerUpdate = { ...prevTimer };
        if (prevTimer.secs === 0) {
          if (prevTimer.mins === 0) {
            return prevTimer;
          }
          timerUpdate.mins -= 1;
          timerUpdate.secs = 59;
        } else {
          timerUpdate.secs -= 1;
        }
        return timerUpdate;
      });
     
    }, 1000);
  };

  useEffect(() => {
    if (timer.secs === 0 && timer.mins === 0) {
      clearInterval(intervalId.current);
        setScore(getScore());
        setQuizEnd(true);
    }
  }, [timer])



  useEffect(() => {
    intervalSet();
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const submitHandler = () => {
    if (typeof questions[current].selected == "object") {
      setSelectWarn(true);
      return;
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      clearInterval(intervalId.current);
      setQuizEnd(true);
      if (getScore() >= questions.length / 2) {
        setPassed(true);
      }
      setScore(getScore());
    }
  };

  const selectHandler = (optionIndex: number) => {
    setQuestions(
      questions.map((q, i) => {
        if (i == current) {
          return {
            ...q,
            selected: optionIndex,
          };
        }
        return { ...q };
      })
    );
    setSelectWarn(false);
  };

  const getScore = (): number => {
    let score = 0;
    questions.forEach((q) => {
      if (typeof q.selected === "number") {
        if (q.selected === q.answer) ++score;
      }
    });

    return score;
  };

  const retakeHandler = () => {
    setQuestions(initQuestions);
    setPassed(false);
    setTimer(initTimer);
    setQuizEnd(false);
    setCurrent(0);
    intervalSet();
  };

  // result view
  if (quizEnd) {
    return (
      <div className="wrapper">
        <div className="result-wrapper">
          {passed ? (
            <div className="passed">You successfully passed the Quiz.</div>
          ) : (
            <div className="fail">Unfortunately you can't pass the Quiz.</div>
          )}
          <div className="score">
            You got {score} from {questions.length}{" "}
          </div>
          <button className="result-btn" onClick={retakeHandler}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // quiz view
  const question = questions[current];
  return (
    <>
      <div className="timer">
        <span className="mins">
          {timer.mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
        :
        <span className="secs">
          {timer.secs.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </div>
      <div className="wrapper">
        <div className="question">
          <div className="title">{question.title}</div>
          {selectWarn ? (
            <div className="warning">Please select an option !</div>
          ) : null}
          <div className="options-container">
            {question.options.map((option, index) => {
              let selected = false;
              if (index === question.selected) {
                selected = true;
              }
              return (
                <div
                  key={option + index}
                  onClick={() => selectHandler(index)}
                  className={`option ${selected ? "selected" : ""}`}
                >
                  {option}
                </div>
              );
            })}
          </div>
          <button className="submit" onClick={submitHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
