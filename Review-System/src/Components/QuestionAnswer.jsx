function QuestionAnswer({ QuestionsData, CurrentQ, setAnswer, answer }) {
  const handelSelectOption = (e) => {
    console.log(QuestionsData[CurrentQ - 1].Question);
    let NewAnswer = [...answer];
    NewAnswer[CurrentQ - 1] = e.target.id;
    setAnswer(NewAnswer);
  };
  const handelOnChange = (e) => {
    let NewAnswer = [...answer];
    NewAnswer[CurrentQ - 1] = e.target.value;
    setAnswer(NewAnswer);
  };

  return (
    <>
      <h5>{QuestionsData[CurrentQ - 1].Question}</h5>
      <div className="ButtonContainer">
        {String(QuestionsData[CurrentQ - 1].Options) == "" ? (
          <textarea
            className="form-control"
            placeholder="Leave a Review here"
            onChange={handelOnChange}
            value={answer[CurrentQ - 1]}
          ></textarea>
        ) : (
          QuestionsData[CurrentQ - 1].Options.map((option) => {
            return (
              <button
                className={`btn btn-secondary OptionButton ${
                  answer[CurrentQ - 1] == option && "text-white bg-primary"
                }`}
                key={option}
                id={option}
                onClick={handelSelectOption}
              >
                {option}
              </button>
            );
          })
        )}
      </div>
    </>
  );
}
export default QuestionAnswer;
