import React from "react";

import NavBar from "../components/navbar/NavBar.js";
import Footer from "../components/footer/Footer.js";
import Background from "../components/background/Background.js";

import ProffSupimg from "../assets/ProfessionalSupport/ProffSupimg.jpg";
import Doctor1img from "../assets/ProfessionalSupport/Doctor1img.jpg";
import Doctor2img from "../assets/ProfessionalSupport/Doctor2img.jpg";
import Doctor3img from "../assets/ProfessionalSupport/Doctor3img.jpg";
import arrow from "../assets/arrow-right 1.png";

function ProfessionalSupportPage1() {
  return (
    <div>
        <NavBar/>
        <Background/>
        <div className="flex pt-[120px] justify-center">
          <div className="relative">
            <img className=" transition-transform w-[1200px] -mt-10 rounded-lg max-h-[400px] " src={ProffSupimg} alt="professional support img" />
            <h1 className="absolute inset-0 flex items-center justify-center font-bold text-8xl text-transparent bg-gradient-to-r from-[rgb(7,11,48)] to-[rgba(33,33,151,0.51)] bg-clip-text rounded-lg hover:animate-pulse">Professional Support</h1>
          </div>
        </div> 
        <div>
            <p className="text-white bg-gradient-to-b from-[rgba(39,39,42,0.7)] to-[rgba(39,39,42,0.1)] text-center flex justify-center items-center font-sans border-solid border border-gray-400 px-[100px] py-[20px] mx-[200px] rounded-lg mb-20 ">
            On our mental healthcare platform, we prioritize your well-being by offering seamless 
            and confidential professional referrals. Our platform streamlines the process, connecting 
            you with trusted therapists or counselors who specialize in addressing your specific concerns. 
            Whether you're seeking support for anxiety, depression, or any other mental health challenge,
             our website provides a safe and supportive space to find the right expert for you. Take the 
             first step towards a happier, healthier you by exploring our referral services today.
            </p>
        </div>


    <div className="flex flex-col space-y-4">

      <div className="text-white shadow-xl shadow-stone-700 bg-gradient-to-b from-[rgba(29,109,163,0.92)] to-[rgba(107,107,110,0.1)] relative w-auto h-auto border-solid border-2 border-sky-500 mx-56 font-sans  ">
          <h4 className="m-4 text-xl text-slate-100 text-pretty hover:underline decoration-slate-800 "><b>Dr Mohamed Niyas Lukmanul Hakeem </b></h4>
           <br></br>
          <img className="flex flex-col -mt-6 -ml-16 border-2 rounded-full border-slate-900 h-44 w-44 " src={Doctor1img} alt=""/>
            
            <div className="text-white bg-gradient-to-b from-[rgba(206,207,211,0.7)] to-[rgba(39,39,42,0.1)]  rounded-3xl ml-48  -mt-14 ">
              
              <div className="p-3 text-sm -mt-44">
                  <h5>Position          - Mental health Doctor</h5>
                  <h5>WorkEnvironment   - Medihelp Hospital (Colombo) </h5>
              </div>
              
              <p className="pb-4 m-3 ml-4 text-sm text-pretty">More than 12 years of experience working with individuals, families and couples. Speclized in mental health and Abnormal Psychology, emotional intelligence, family counseling, sexual health, NLP, CBT, IPSRT, ART PSYCHOTHERAPY, COACHING, Career Counseling, Relationship Counseling, Psychometric testing and so on ...</p>
              
              <button  className="absolute bottom-0 right-0 bg-[#adbbda] text-sm text-black px-[30px] p-[5px]  mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif hover:bg-[#87a4e0d0]">
                View Profile
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>

            </div>
      </div>

      <div className="text-white shadow-xl shadow-stone-700 bg-gradient-to-b from-[rgba(29,109,163,0.92)] to-[rgba(107,107,110,0.1)] relative w-auto h-auto border-solid border-2 border-sky-500 mx-56 font-sans  ">
          <h4 className="m-4 text-xl text-slate-100 text-pretty hover:underline decoration-slate-800"><b>Dr Shanez Fernando</b></h4>
           <br></br>
          <img className="flex flex-col -mt-6 -ml-16 border-2 rounded-full border-slate-900 h-44 w-44 " src={Doctor2img} alt=""/>
            
            <div className="text-white bg-gradient-to-b from-[rgba(206,207,211,0.7)] to-[rgba(39,39,42,0.1)]  rounded-3xl ml-48  -mt-14 ">
              
              <div className="p-3 text-sm -mt-44">
                  <h5>Position          - psychologists</h5>
                  <h5>WorkEnvironment   - MDK Hospital (Horana) </h5>
              </div>
              
              <p className="pb-4 m-3 ml-4 text-sm text-pretty">More than 12 years of experience working with individuals, families and couples. Speclized in mental health and Abnormal Psychology, emotional intelligence, family counseling, sexual health, NLP, CBT, IPSRT, ART PSYCHOTHERAPY, COACHING, Career Counseling, Relationship Counseling, Psychometric testing and so on ...</p>
              
              <button  className="absolute bottom-0 right-0 bg-[#adbbda] text-sm text-black px-[30px] p-[5px]  mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif hover:bg-[#87a4e0d0]">
                View Profile
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>

            </div>
      </div>

      <div className="text-white shadow-xl shadow-stone-700 bg-gradient-to-b from-[rgba(29,109,163,0.92)] to-[rgba(107,107,110,0.1)] relative w-auto h-auto border-solid border-2 border-sky-500 mx-56 font-sans  ">
          <h4 className="m-4 text-xl text-slate-100 text-pretty hover:underline decoration-slate-800"><b>Dr Mohamed Niyas Lukmanul Hakeem</b></h4>
           <br></br>
          <img className="flex flex-col -mt-6 -ml-16 border-2 rounded-full border-slate-900 h-44 w-44 " src={Doctor3img} alt=""/>
            
            <div className="text-white bg-gradient-to-b from-[rgba(206,207,211,0.7)] to-[rgba(39,39,42,0.1)]  rounded-3xl ml-48  -mt-14 ">
              
              <div className="p-3 text-sm -mt-44">
                  <h5>Position          - psychiatrist</h5>
                  <h5>WorkEnvironment   - Lanka Hospital (Colombo) </h5>
              </div>
              
              <p className="pb-4 m-3 ml-4 text-sm text-pretty">More than 12 years of experience working with individuals, families and couples. Speclized in mental health and Abnormal Psychology, emotional intelligence, family counseling, sexual health, NLP, CBT, IPSRT, ART PSYCHOTHERAPY, COACHING, Career Counseling, Relationship Counseling, Psychometric testing and so on ...</p>
              
              <button  className="absolute bottom-0 right-0 bg-[#adbbda] text-sm text-black px-[30px] p-[5px]  mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif hover:bg-[#87a4e0d0]">
                View Profile
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>

            </div>
      </div>

      

    </div>


    <br></br>
    <br></br>

      <Footer/>
    </div>
  )

}
export default ProfessionalSupportPage1;