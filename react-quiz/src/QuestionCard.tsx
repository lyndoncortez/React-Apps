import React, { FC } from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  QuestionNum: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  QuestionNum,
  totalQuestion,
}) => (
  <div>
    <p className="number">
      Question: {QuestionNum} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </p>
  </div>
);

export default QuestionCard;
