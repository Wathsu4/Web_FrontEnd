import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { data } from "../components/data";
import { useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Quiz() {
  let [quizNumber, setQuizNumber] = useState(0);

  let [quizAnswers, setQuizAnswers] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });

  let [totalMarks, setTotalMarks] = useState(0);

  const query = useQuery();
  const type = query.get("type");

  //console.log("value of type is ", type);
  const questions = data[type]["questions"];
  const totalQuestions = questions.length; // to get the length of array
  //console.log("Questions are ", data[type]["questions"][1]);

  const option_A = data[type]["options"]["A"];
  const option_B = data[type]["options"]["B"];
  const option_C = data[type]["options"]["C"];
  const option_D = data[type]["options"]["D"];
  //console.log("Optin A is", option_A);
  let question = questions[quizNumber];

  const nextQuiz = () => {
    let selectedAnswer = quizAnswers[quizNumber.toString()];
    if (!selectedAnswer) {
      alert("Please select an answer before proceeding to the next question.");
      return;
    }

    if (quizNumber < totalQuestions) {
      // to stop function when quizNumber more than last index
      setQuizNumber(++quizNumber);
    }

    if (selectedAnswer === "A") {
      setTotalMarks(totalMarks + 3);
    } else if (selectedAnswer === "B") {
      setTotalMarks(totalMarks + 2);
    } else if (selectedAnswer === "C") {
      setTotalMarks(totalMarks + 1);
    } else {
      setTotalMarks(totalMarks + 0);
    }
  };

  const prevQuiz = () => {
    if (quizNumber > 0) {
      setQuizNumber(quizNumber - 1);
    }
  };

  const recordAnswer = (quizNum, selectedAnswer) => {
    console.log("quiz num is:", quizNum);
    setQuizAnswers((prevState) => ({
      ...prevState,
      [quizNum]: selectedAnswer,
    }));
    console.log("quizAnswers is:", quizAnswers);
  };
  console.log("quiz number is:2", quizNumber);
  console.log("quizAnswers is: 2", quizAnswers);

  const calculateInterpretation = () => {
    if (totalMarks >= 15) {
      return 0;
    } else if (totalMarks > 5) {
      return 1;
    } else {
      return 2;
    }
  };
  return (
    <div>
      <div className="relative flex justify-center items-center  fixed inset-0 z-50 py-[100px]">
        <NavBar />
        <div className="flex flex-col grid gap-5 bg-[#f8edeb]  w-[700px]  rounded-3xl">
          {" "}
          {/*w-[700px] for the fix width*/}
          <p className="flex font-serif justify-center pt-5  text-[30px] text-[#262626]">
            Your Path to Better Mental Health
          </p>
          <hr className="h-[2px] border-none bg-[#707070] mx-10" />
          <p className="flex font-serif font-medium  text-[20px] text-[#262626] px-10">
            {quizNumber === totalQuestions ? (
              "Based on the Selected answers the Interpretation is: "
            ) : (
              <>
                {quizNumber + 1}.{question}
              </>
            )}
          </p>
          {quizNumber === totalQuestions ? (
            <p className="flex font-serif font-medium  text-[23px] text-[#58427c]  justify-center px-[70px] py-10 ">
              {data[type]["results"][calculateInterpretation()]}
            </p>
          ) : (
            <>
              <ul className="flex flex-col px-[70px]  justify-center  ">
                <li
                  className={
                    quizAnswers[quizNumber] === "A"
                      ? "flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif   bg-[#6e7a88]"
                      : "flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif  cursor-pointer hover:bg-gray-100"
                  }
                  onClick={() => recordAnswer(quizNumber.toString(), "A")}
                >
                  {option_A}
                </li>
                <li
                  className={
                    quizAnswers[quizNumber] === "B"
                      ? "flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer bg-[#6e7a88]"
                      : "flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100"
                  }
                  onClick={() => recordAnswer(quizNumber.toString(), "B")}
                >
                  {option_B}
                </li>
                <li
                  className={
                    quizAnswers[quizNumber] === "C"
                      ? "flex i py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer bg-[#6e7a88]"
                      : "flex i py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100"
                  }
                  onClick={() => recordAnswer(quizNumber.toString(), "C")}
                >
                  {option_C}
                </li>
                <li
                  className={
                    quizAnswers[quizNumber] === "D"
                      ? "flex py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer bg-[#6e7a88]"
                      : "flex i py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100"
                  }
                  onClick={() => recordAnswer(quizNumber.toString(), "D")}
                >
                  {option_D}
                </li>
              </ul>
            </>
          )}
          {quizNumber === totalQuestions ? (
            <div className="flex justify-center pb-5">
              <Link to="/assessment">
                <button className="item-center   w-[200px] h-[50px] bg-[#553f9a] text-[#fff] text-[18px]   font-serif rounded-lg cursor-pointer">
                  Refresh
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between px-10 py-5">
                {quizNumber > 0 && (
                  <button
                    className="m-auto w-[100px] h-[35px] bg-[#553f9a] text-[#fff] text-[15px] font-serif rounded-lg cursor-pointer ml-4"
                    onClick={() => prevQuiz()}
                  >
                    Back
                  </button>
                )}
                <button
                  className="m-auto w-[100px] h-[35px] bg-[#553f9a] text-[#fff] text-[15px] font-serif rounded-lg cursor-pointer mr-8 "
                  onClick={() => nextQuiz()}
                >
                  Next
                </button>
              </div>
              <div className="flex font-serif text-[17px] text-[#262626] px-10 py-5 m-auto">
                {quizNumber + 1} of {totalQuestions} questions
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Quiz;
