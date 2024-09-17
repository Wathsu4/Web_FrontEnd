import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import assessment from "../assets/assessment.png";
import { Link } from "react-router-dom";

function Assessment() {
  return (
    <div>
      <NavBar />
      <div className="flex pt-[115px] pb-[50px]">
        <p className="text-white bg-[#3D638A] bg-opacity-70 text-[40px] flex w-full justify-center font-serif py-[5px] [word-spacing:0.50rem]">
          Evaluate your mental health across various categories
        </p>
      </div>
      <div className="flex justify-center pb">
        <img src={assessment} alt="" className=" " />
      </div>
      <div className="flex  justify-center px-[200px] pt-5 pb-10 ">
        <p className=" text-[25px] font-serif text-justify ">
          Welcome to our Mental Health Assessment tool. Taking care of your
          mental health is just as important as taking care of your physical
          health. Our easy-to-use assessment can help you understand your mental
          well-being across various categories, including depression, anxiety,
          bipolar disorder, schizophrenia, and PTSD (Post-Traumatic Stress
          Disorder).
        </p>
      </div>
      <div className="flex flex-grid  flex-row justify-center space-x-4  py-20 ">
        <Link to="/quiz?type=Depression">
          <button>
            <div className="flex  ">
              <p className="bg-[#002244] bg-opacity-85 rounded-lg text-[20px] font-serif  text-white px-10 py-5">
                Depression +
              </p>
            </div>
          </button>
        </Link>
        <Link to="/quiz?type=Anxiety">
          <button>
            <div className="flex ">
              <p className="bg-[#86878A] bg-opacity-85 text-white rounded-lg text-[20px] font-serif px-10 py-5">
                Anxiety Disorders +
              </p>
            </div>
          </button>
        </Link>
        <Link to="/quiz?type=Bipolar_Disorder">
          <button>
            <div className="flex ">
              <p className="bg-[#4D647C] bg-opacity-85 text-white rounded-lg text-[20px] font-serif px-10 py-5">
                Bipolar Disorder +
              </p>
            </div>
          </button>
        </Link>
        <Link to="/quiz?type=Schizophrenia">
          <button>
            <div className="flex ">
              <p className="bg-[#28252C] bg-opacity-85 text-white rounded-lg text-[20px] font-serif px-10 py-5 ">
                Schizophrenia +
              </p>
            </div>
          </button>
        </Link>
        <Link to="/quiz?type=PTSD">
          <button>
            <div className="flex ">
              <p className="bg-[#002244] bg-opacity-85 text-white rounded-lg text-[20px] font-serif px-10 py-5 ">
                PTSD +
              </p>
            </div>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Assessment;
