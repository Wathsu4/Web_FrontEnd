import React, { useState } from "react";
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

const musicData = [
  {
    type: "Emotional Expression Music",
    image: Emotional,
    color: "bg-gray-600 bg-opacity-85",
    mp3s: [
      {
        title: "Emotional Song 1",
        src: "Song1.mp3",
      },
      {
        title: "Emotional Song 2",
        src: "Song2.mp3",
      },
    ],
  },
  {
    type: "Meditation Music",
    image: Meditation,
    color: "bg-[#78716c]",
    mp3s: [
      {
        title: "Meditation Song 1",
        src: "Song3.mp3",
      },
      {
        title: "Meditation Song 2",
        src: "Song4.mp3",
      },
    ],
  },
  {
    type: "Mood Regulation Music",
    image: Mood,
    color: "bg-gray-600 bg-opacity-85",
    mp3s: [
      { title: "Mood Song 1", src: "Song5.mp3" },
      { title: "Mood Song 2", src: "Song6.mp3" },
    ],
  },
  {
    type: "Zen Music",
    image: Zen,
    color: "bg-[#78716c]",
    mp3s: [
      { title: "Zen Song 1", src: "Song1.mp3" },
      { title: "Zen Song 2", src: "Song3.mp3" },
    ],
  },
  {
    type: "Relaxation Piano",
    image: Relaxation,
    color: "bg-gray-600 bg-opacity-85",
    mp3s: [
      {
        title: "Relaxation Song 1",
        src: "Song4.mp3",
      },
      {
        title: "Relaxation Song 2",
        src: "Song6.mp3",
      },
    ],
  },
  {
    type: "Pain Management Music",
    image: Pain,
    color: "bg-[#78716c]",
    mp3s: [
      { title: "Pain Song 1", src: "Song2.mp3" },
      { title: "Pain Song 2", src: "Song4.mp3" },
    ],
  },
];

function MusicTherapy() {
  const [currentMp3s, setCurrentMp3s] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = (mp3s) => {
    setCurrentMp3s(mp3s);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="flex pt-[120px] justify-center">
        <img className="h-[500px] rounded-lg" src={mainimg} alt="Main" />
      </div>
      <p className="text-white bg-gradient-to-b from-[rgba(39,39,42,0.7)] to-[rgba(39,39,42,0.1)] text-center flex justify-center items-center font-sans border-solid border border-gray-400 px-[100px] py-[20px] mx-[300px] rounded-lg mb-20">
        At SoulCare+, we use music therapy to boost mental well-being. It's not
        just about listening; it's about joining in and connecting with others.
        Our approach incorporates music to ease depression, anxiety,
        schizophrenia, sleep issues, and dementia, with singing proving
        especially effective. Music brings people together, promoting overall
        wellness. Join us to experience the powerful impact of music on mental
        health and form meaningful connections.
      </p>
      <div className="flex flex-wrap justify-center px-5 mx-[100px] mb-[150px]">
        {musicData.map((music, index) => (
          <div
            key={index}
            className={`flex flex-col w-1/5 mb-5 items-center ${music.color} text-white rounded-[40px] mx-10 py-5 justify-between`}
          >
            <img
              src={music.image}
              alt={music.type}
              className="object-scale-down w-40 h-40"
            />
            <p className="mb-5 font-bold text-center">{music.type}</p>
            <button
              className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer outline-none inline-flex items-center font-serif"
              onClick={() => handlePlayClick(music.mp3s)}
            >
              Play
              <img
                src={Play}
                alt="Play"
                className="object-scale-down h-5 w-7"
              />
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-zinc-300 p-5 rounded-lg max-w-lg w-full ">
            <h2 className="text-2xl font-bold  mb-5">Now Playing</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg mb-5"
              onClick={handleCloseModal}
            >
              Close
            </button>
            {currentMp3s.map((mp3, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">{mp3.title}</p>
                <audio controls>
                  <source src={mp3.src} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default MusicTherapy;
