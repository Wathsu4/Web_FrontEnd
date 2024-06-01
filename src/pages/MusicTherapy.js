import React from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import mainimg from "../assets/MusicMain.png";
import Emotional from "../assets/MusicTherapy/Emotional.png";
import Meditation from "../assets/MusicTherapy/Meditation.png";
import Mood from "../assets/MusicTherapy/Mood.png";
import Zen from "../assets/MusicTherapy/Zen.png";
import Relaxation from "../assets/MusicTherapy/Relaxation.png";
import Pain from "../assets/MusicTherapy/Pain.png";
import Play from "../assets/MusicTherapy/Play.png";
function MusicTheropy() {
  return (
    <div>
      <NavBar />

      <div className=" flex  pt-[120px]  justify-center">
        <img className="h-auto rounded-lg" src={mainimg} alt="" />
      </div>
      <p className="text-white bg-gradient-to-b from-[rgba(39,39,42,0.7)] to-[rgba(39,39,42,0.1)] text-center flex justify-center items-center font-sans border-solid border border-gray-400 px-[100px] py-[20px] mx-[300px] rounded-lg mb-20 ">
        At SoulCare+, we use music therapy to boost mental well-being. It's not
        just about listening; it's about joining in and connecting with others.
        Our approach incorporates music to ease depression, anxiety,
        schizophrenia, sleep issues, and dementia, with singing proving
        especially effective. Music brings people together, promoting overall
        wellness. Join us to experience the powerful impact of music on mental
        health and form meaningful connections.
      </p>
      <div className="flex flex-wrap justify-center px-5  mx-[100px]  mb-[150px]">
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-blue-950 text-white rounded-[40px] mx-10  py-5  justify-between "
        >
          <img
            src={Emotional}
            alt=""
            className="object-scale-down w-40 h-40 "
          />
          <p className="mb-5 font-bold text-center">
            Emotional Expression Music
          </p>

          <button className="bg-[#adbbda] text-black px-[30px] p-[5px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#78716c] text-white rounded-[40px] mx-10 justify-between py-5"
        >
          <img
            src={Meditation}
            alt=""
            className="object-scale-down w-40 h-40 "
          />
          <p className="mb-5 font-bold text-center">Meditation Music</p>

          <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#64748b] text-white rounded-[40px] mx-10 justify-between py-5"
        >
          <img src={Mood} alt="" className="object-scale-down w-40 h-40 " />
          <p className="mb-5 font-bold text-center">Mood Regulation Music</p>
          <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#3f3f46] text-white rounded-[40px] mx-10 justify-between py-5"
        >
          <img src={Zen} alt="" className="object-scale-down w-40 h-40 " />
          <p className="mb-5 font-bold text-center">Zen Music</p>

          <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#78716c] text-white rounded-[40px] mx-10 justify-between py-5"
        >
          <img
            src={Relaxation}
            alt=""
            className="object-scale-down w-40 h-40 "
          />
          <p className="mb-5 font-bold text-center">Relaxation Piano</p>

          <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
        <div
          className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#78716c] text-white rounded-[40px] mx-10 justify-between py-5"
        >
          <img src={Pain} alt="" className="object-scale-down w-40 h-40 " />
          <p className="mb-5 font-bold text-center">Pain Management Music</p>

          <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
            Play
            <img src={Play} alt="" className="object-scale-down h-5 w-7" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MusicTheropy;
