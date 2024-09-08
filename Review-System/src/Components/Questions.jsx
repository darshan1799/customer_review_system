import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import QuestionAnswer from "./QuestionAnswer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Questions() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState([]);
  const QuestionsData = useLoaderData();
  const [CurrentQ, setCurrentQ] = useState(1);

  const handelPrevBtn = () => {
    if (CurrentQ > 1) {
      setCurrentQ(CurrentQ - 1);
    }
  };
  const handelNextBtn = () => {
    if (CurrentQ < QuestionsData.length) {
      setCurrentQ(CurrentQ + 1);
    } else {
      const a = [];
      const question = QuestionsData.map((el) => {
        return el.Question;
      });
      for (let i in question) {
        a.push({ question: question[i], answer: answer[i] || null });
      }
      fetch("https://customer-review.onrender.com/api/answer", {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(a),
        credentials: "include",
      })
        .then((res) => {
          if (res.status == 200) {
            res.json().then((data) => {
              toast.success(data.msg);
              navigate("/thankyou");
            });
          } else if (res.status == 401) {
            res.json().then((data) => {
              toast.error(data.msg);
            });
          } else {
            res.json().then((data) => {
              toast.error(data.msg);
            });
          }
        })
        .catch((e) => {
          console.log("Review Not Submitted");
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="QuestionContainer">
        <h3 style={{ margin: "auto" }}>Customer Survey</h3>
        <h4>{CurrentQ}/5</h4>
        <QuestionAnswer
          QuestionsData={QuestionsData}
          CurrentQ={CurrentQ}
          answer={answer}
          setAnswer={setAnswer}
        ></QuestionAnswer>
        <div className="BtnDiv">
          <button className="btn btn-primary" onClick={handelPrevBtn}>
            Prev
          </button>
          <button className="btn btn-success" onClick={handelNextBtn}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default Questions;
export const LoadQuestions = () => {
  return fetch("https://customer-review.onrender.com/api/getquestions", {
    method: "GET",
    headers: { "Content-Type": "Application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log("Please Try Again");
    });
};
