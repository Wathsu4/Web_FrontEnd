import React from "react";

import NavBar from "../components/navbar/NavBar.js";
import Footer from "../components/footer/Footer.js";
import Background from "../components/background/Background.js";
import { Link } from "react-router-dom";


import Doctor1img from "../assets/ProfessionalSupport/Doctor1img.jpg";
import Doctor2img from "../assets/ProfessionalSupport/Doctor2img.jpg";
import Doctor3img from "../assets/ProfessionalSupport/Doctor3img.jpg";
import arrow from "../assets/arrow-right 1.png";

function ProfessionalSupportPage2() {
    return (
      <div>
        <NavBar/>
        <Background/>

    
        <div className="flex mt-20 bg-[#A9BDF0]">
          <div className="text-white shadow-xl shadow-stone-700 bg-gradient-to-b from-[rgba(29,109,163,0.92)] to-[rgba(107,107,110,0.1)] relative w-auto h-auto border-solid border-2 border-sky-500 mx-56 font-sans  ">
            
            <h4 className="flex flex-col m-4 text-xl text-slate-100 text-pretty hover:underline decoration-slate-800"><b>Dr Mohamed Niyas Lukmanul Hakeem </b></h4>
            <br></br>
            <img className="flex -mt-6 -ml-16 border-2 rounded-full border-slate-900 h-44 w-44 " src={Doctor1img} alt=""/>
            
            <div className="text-white bg-gradient-to-b from-[rgba(206,207,211,0.7)] to-[rgba(39,39,42,0.1)]  rounded-3xl ml-48  -mt-14 ">
              
              <div className="p-3 text-sm -mt-44">
                  <h5>Position          - Mental health Doctor</h5>
                  <h5>WorkEnvironment   - Medihelp Hospital (Colombo) </h5>
              </div>
              
              <p className="pb-4 m-3 ml-4 text-sm text-pretty">More than 12 years of experience working with individuals, families and couples. Speclized in mental health and Abnormal Psychology, emotional intelligence, family counseling, sexual health, NLP, CBT, IPSRT, ART PSYCHOTHERAPY, COACHING, Career Counseling, Relationship Counseling, Psychometric testing and so on ...</p>
            
            </div>
          </div>
        </div>

        <div className=" bg-gradient-to-b from-[rgba(187,209,224,0.92)] to-[rgba(107,107,110,0.1)] m-10 ">
          <h1 className="p-10 text-2xl text-[#0A2351] font-bold ">Services Details</h1>
          <br></br>
          <br></br>

          <div className="grid grid-cols-3 gap-3 p-10 -mt-20">
          
            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">FEES:</h1>
              <ul className="pl-10 list-disc text-">
                <li>Cash practice</li>
              </ul>
            </div> 

            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">CONSULTATION:</h1>
              <ul className="pl-10 list-disc text-">
                <li>Online consultations offered</li>
              </ul>
            </div> 

            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">LANGUAGE PROFICIENCY:</h1>
              <ul className="pl-10 list-disc text-">
                <li>English</li>
                <li>Sinhala</li>
                <li>Tamil</li>
              </ul>
            </div> 

            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">CLIENT DEMOGRAPHICS:</h1>
              <ul className="pl-10 list-disc text-">
                <li>Adolescents</li>
                <li>Adults</li>
                <li>Couples</li>
                <li>Families</li>
                <li>Individuals</li>
                <li>Parents</li>
              </ul>
            </div> 

            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">CORE SERVICES: </h1>
              <ul className="pl-10 list-disc text-">
                <li>Assessment (Intellectual)</li>
                <li>Assessment (Psychometric)</li>
                <li>Coaching</li>
                <li>Consultation</li>
                <li>Counselling (Divorce)</li>
                <li>Counselling (Marriage)</li>
                <li>Emotional Intelligence</li>
                <li>Individual and Couple Therapy</li>
                <li>Relationship Counselling</li>
                <li>Counselling (Divorce)</li>
                <li>Counselling (Marriage)</li>
              </ul>
            </div> 

            <div>
              <h1 className="text-lg text-[#0A2351] font-semibold">SCOPE OF PRACTICE: </h1>
              <ul className="pl-10 list-disc text-">
                <li>Behavioural and Emotional Problems</li>
                <li>Depression</li>
                <li>Family Problems</li>
                <li>Personal Growth</li>
                <li>Relationship Problems </li>
                <li>Relationship Problems (Marriage)</li>
                <li>Stress Management</li>
              </ul>
            </div> 


          </div> 
        </div>

         <div className="flex flex-col mb-10 mx-36">
          <div className="flex flex-col p-5 text-white bg-blue-950">Book with Dr.Mohamed Niyas Lukmanul Hakeem
          </div>
          <div className="flex flex-col pt-5 pb-10 pl-10 text-lg bg-[#7091E6] text-blue-950 font-semibold">Fill the Patient Information Here,
          
          <div className="p-3 space-y-3 font-light">
            <h1>Full Name :</h1>
            <div className="flex p-3 text-black bg-white cursor-text"></div>

            <h1>Age :</h1>
            <div className="flex p-3 text-black bg-white cursor-text"></div>

            <h1>Gender :</h1>
            <div className="flex p-3 text-black bg-white cursor-text"></div>

            <h1>Mobile Number :</h1>
            <div className="flex p-3 text-black bg-white cursor-text"></div>

            <h1>Email :</h1>
            <div className="flex p-5 text-black bg-white cursor-text"></div>

            <h1>Address :</h1>
            <div className="flex p-5 text-black bg-white cursor-text"></div>

            <h1>Purpose of the appointment :</h1>
            <div className="flex p-5 text-black bg-white cursor-text"></div>
         
          </div>
          
          {<>
            <button className="bg-[#adbbda] text-black drop-shadow-xl ml-[700px] hover:bg-white mt-6 mr-[50px] px-[30px] py-[5px] mb-3 text-sm  rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
              Submit Application
            </button>
          </>
          }
          

          </div>
         </div>

        

        <Footer/>
      </div>
    )
  
  }
  export default ProfessionalSupportPage2;