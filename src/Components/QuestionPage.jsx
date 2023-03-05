import React, { useEffect, useState } from "react";
import { MathJax } from "better-react-mathjax";
const QuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [navigate, setNavigate] = useState(0);

  useEffect(() => {
    const qArr = [
      "AreaUnderTheCurve_901",
      "BinomialTheorem_901",
      "DifferentialCalculus2_901",
    ];
    fetch(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${qArr[navigate]}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data[0].Question);
        setQuestion(data[0].Question);
        // console.log("Ajju=>         ", question);
      });
  }, [question, navigate]);

  const increment = () => {
    if (navigate < 2) {
      setNavigate(navigate + 1);
    }
  };
  const decrement = () => {
    if (navigate > 0) {
      setNavigate(navigate - 1);
    }
  };
  return (
    <div>
      <div
        id="default-carousel"
        className="relative mt-16 pl-14 pr-8"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-96 overflow-hidden rounded-lg ">
          <div
            className={` ${
              navigate === 0 ? "block" : "hidden"
            }  duration-700 ease-in-out`}
            data-carousel-item
          >
            <MathJax>
              <h1>1. {question}</h1>
            </MathJax>
          </div>

          <div
            className={` ${
              navigate === 1 ? "block" : "hidden"
            }  duration-700 ease-in-out`}
            data-carousel-item
          >
            <MathJax>
              <h1>2. {question}</h1>
            </MathJax>
          </div>

          <div
            className={` ${
              navigate === 2 ? "block" : "hidden"
            }  duration-700 ease-in-out`}
            data-carousel-item
          >
            <MathJax>
              <h1>3. {question}</h1>
            </MathJax>
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() => decrement()}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => increment()}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only ">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
