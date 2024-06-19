import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { data } from "../components/data";
import { useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Quiz() {
  let [quizNumber, setQuizNumber] = useState(0);

  const query = useQuery();
  const type = query.get("type");

  console.log("value of type is ", type);
  const questions = data[type]["questions"];
  const totalQuestions = questions.length; // to get the length of array
  console.log("Questions are ", data[type]["questions"][1]);

  const option_A = data[type]["options"]["A"];
  const option_B = data[type]["options"]["B"];
  const option_C = data[type]["options"]["C"];
  const option_D = data[type]["options"]["D"];
  //console.log("Optin A is", option_A);
  let question = questions[quizNumber];

  const nextQuiz = () => {
    if (quizNumber < totalQuestions - 1) {
      // to stop function when quizNumber more than last index
      setQuizNumber(++quizNumber);
    }
  };

  return (
    <div>
      <div className="relative flex justify-center items-center  fixed inset-0 z-50 py-[100px]">
        <NavBar />
        <div className="flex flex-col grid gap-5 bg-white  w-[700px]  rounded-3xl">
          {" "}
          {/*w-[700px] for the fix width*/}
          <p className="flex font-serif justify-center pt-5  text-[30px] text-[#262626]">
            Your Path to Better Mental Health
          </p>
          <hr className="h-[2px] border-none bg-[#707070] mx-10" />
          <p className="flex font-serif font-medium  text-[20px] text-[#262626] px-10">
            {quizNumber + 1}.{question}
          </p>
          <ul className="flex flex-col px-[70px]  justify-center ">
            <li className="flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif  cursor-pointer hover:bg-gray-100">
              {option_A}
            </li>
            <li className="flex  py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100">
              {option_B}
            </li>
            <li className="flex i py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100">
              {option_C}
            </li>
            <li className="flex py-1 px-10 border border-gray-600 rounded-8 mb-3 text-[18px] text-[#262626] font-serif cursor-pointer hover:bg-gray-100">
              {option_D}
            </li>
          </ul>
          <button
            className="m-auto w-[200px] h-[50px] bg-[#553f9a] text-[#fff] text-[18px] font-serif rounded-lg cursor-pointer"
            onClick={() => nextQuiz()}
          >
            Next
          </button>
          <div className="flex font-serif text-[17px] text-[#262626] px-10 py-5 m-auto">
            {quizNumber + 1} of {totalQuestions} questions
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Quiz;
