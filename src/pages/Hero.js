import React from "react";
import "./Hero.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

import homeimg from "../assets/homepagefirst.png";
import profsup from "../assets/prof_sup.png";
import annsup from "../assets/ann_sup.png";
import mhassest from "../assets/mhassest.png";
import mtheropy from "../assets/mtheropy.png";
import exgallley from "../assets/exgallery.png";
import arrow from "../assets/arrow-right 1.png";
import about1 from "../assets/aboutimg1.png";
import about2 from "../assets/aboutimg2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <NavBar />
      <div className="w-full hero">
        <div className="text-center max-w-[800px] text-[#1a3857] pt-[150px] pb-[50px] m-0 font-bold text-2xl">
          <h2 className="flex overflow-hidden whitespace-nowrap text-ellipsis ">
            A Comprehensive Web based Solution for Mental Well being
          </h2>
        </div>
        <div className="h-auto max-w-full">
          <img src={homeimg} alt="" />
        </div>
        <p className="text-white bg-gradient-to-b from-[rgba(0,34,68,0.7)] to-[rgba(0,34,68,0.1)] text-center flex justify-center items-center font-sans border-solid border border-gray-400 px-[100px] py-[70px] mx-10">
          At SoulCare+ Mental Health Support Network, we're committed to making
          mental health support accessible. Our platform offers online
          counseling and therapy sessions, connecting users directly with
          professionals. We also foster a supportive online community for peer
          support and provide music therapy sessions for relaxation and stress
          reduction. Plus, we celebrate creative expression by showcasing users'
          artistic works.
        </p>
        <h1 className="flex mt-[80px] mb-[50px] text-black font-bold text-4xl font-sans">
          Our Services
        </h1>
        <div className="flex flex-wrap justify-center ">
          <div
            className="flex flex-col 
        w-1/5 mb-5  items-center bg-blue-950 text-white rounded-[80px] mx-10 justify-between "
          >
            <img
              src={profsup}
              alt=""
              className="object-scale-down h-48 w-96 "
            />
            <p className="mb-5 font-bold text-center">Professional Support</p>
            <p className="w-full px-10 pb-10 text-xs text-center">
              Get personalized professional support for your mental health needs
              on our website. Our team includes counselors, psychiatrists, and
              psychologists who offer therapy sessions and consultations online.
              Pay for the services you need to prioritize your mental
              well-being.
            </p>
            <button className="bg-[#adbbda] text-black px-[30px] p-[5px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif">
              Click More
              <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
            </button>
          </div>
          <div
            className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#78716c] text-white rounded-[80px] mx-10 justify-between"
          >
            <img src={annsup} alt="" className="object-scale-down h-48 w-96 " />
            <p className="mb-5 font-bold text-center">
              {" "}
              Anonymous Peer Support
            </p>
            <p className="w-full px-10 pb-10 text-xs text-center">
              Find understanding and encouragement in our anonymous peer support
              service. Connect with others who share similar experiences in a
              safe and confidential space. Receive and provide support without
              revealing your identity. Join our community and feel heard on your
              mental health journey.
            </p>
            <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
              Click More
              <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
            </button>
          </div>
          <div
            className="flex flex-col w-1/5
        w-1/5 mb-5  items-center bg-[#64748b] text-white rounded-[80px] mx-10 justify-between "
          >
            <img
              src={mhassest}
              alt=""
              className="object-scale-down h-48 w-96 "
            />
            <p className="mb-5 font-bold text-center">
              Mental Health Assessment
            </p>
            <p className="w-full px-10 pb-10 text-xs text-center">
              Through a series of questions and evaluations, our platform
              provides a deeper understanding of your mental health status and
              take proactive steps towards greater well-being. Access this
              service to start your journey towards a happier and healthier
              life.
            </p>
            <Link to="/assessment">
              <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
                Click More
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>
            </Link>
          </div>
          <div
            className="flex flex-col 
        w-1/5 mb-5  items-center bg-[#3f3f46] text-white rounded-[80px] mx-10 justify-between"
          >
            <img
              src={mtheropy}
              alt=""
              className="object-scale-down h-48 w-96 "
            />
            <p className="mb-5 font-bold text-center">Music Therapy</p>
            <p className="w-full px-10 pb-10 text-xs text-center">
              Explore a curated selection of meditation, calm, and relaxing
              music designed to promote mental well-being and relaxation.
              Whether you're seeking stress relief, mindfulness, or emotional
              balance, our music therapy sessions offer a soothing escape from
              life's pressures. Join us to experience the transformative effects
              of music on your mental health journey.
            </p>
            <Link to="/musictherapy">
              <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none inline-flex items-center font-serif">
                Click More
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>
            </Link>
          </div>
          <div
            className="flex flex-col 
        w-1/5 mb-5  items-center bg-blue-950 text-white rounded-[80px] mx-10 justify-between"
          >
            <img
              src={exgallley}
              alt=""
              className="object-scale-down h-48 w-96 "
            />
            <p className="mb-5 font-bold text-center">Expression Gallery</p>
            <p className="w-full px-10 pb-10 text-xs text-center">
              Share your thoughts, poems, artistic works, and more in a
              supportive and empowering community space. Whether through words,
              visuals, or other forms of expression, our platform provides a
              safe environment to share your innermost thoughts and feelings.
              Join us to connect with this journey.
            </p>
            <Link to="/expressiongallery">
              <button className="bg-[#adbbda] text-black px-[30px] py-[5px] mb-3 text-s rounded-[30px] cursor-pointer border-0 outline-none inline-flex items-center font-serif">
                Click More
                <img src={arrow} alt="" className="object-scale-down h-5 w-7" />
              </button>
            </Link>
          </div>
        </div>
        <h1 className="flex mt-[80px] mb-[60px] text-black font-bold text-4xl font-sans">
          About Us
        </h1>
        <div className="flex flex-row mx-20 mb-10 space-x-2 felx-wrap ">
          <div className="flex flex-row w-1/2 mx-5">
            <img src={about1} alt="" className="flex size-80 " />
            <img src={about2} alt="" className="flex self-end pr-4 size-80" />
          </div>
          <div className="mx-10 "> </div>
          <div className="w-1/2 ">
            <div>
              <p className="text-[#0A2351] font-bold text-2xl font-sans py-3">
                Our Purpose
              </p>
              <p className="font-serif text-justify text-white">
                At SoulCare+, our purpose is to cultivate a nurturing
                environment where individuals are embraced for who they are in
                this moment, while also fostering the potential for personal
                growth and spiritual expansion. We believe in living life
                consciously, making decisions with awareness, and embracing the
                consequences of our actions, thoughts, and words.
              </p>
            </div>
            <div>
              <p className="text-[#0A2351] font-bold text-2xl font-sans py-3">
                Our Vision
              </p>
              <p className="font-serif text-justify text-white">
                SoulCare+ envisions a society characterized by kindness,
                heightened awareness, and individual accountability. We strive
                to contribute to the creation of a healthier world by promoting
                mental well-being and personal responsibility.
              </p>
            </div>
            <div>
              <p className="text-[#0A2351] font-bold text-2xl font-sans py-3">
                Our Mission
              </p>
              <p className="font-serif text-justify text-white">
                We are a compassionate community dedicated to making mental
                health care accessible to everyone, irrespective of cultural
                identity or socioeconomic status. SoulCare+ achieves this
                mission through our Affordable Counseling Program, which offers
                affordable therapy services, and by overseeing a rigorous
                training program for graduate students in the mental health
                field. Additionally, we provide a platform for holistic and
                mental health professionals to establish private practices, as
                well as opportunities to lead workshops and support groups
                within our collaborative community. Together, we endeavor to
                create a supportive and inclusive space where healing and growth
                are accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
