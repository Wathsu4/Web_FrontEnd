import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function Arts() {
  return (
    <div>
      <NavBar />
      <div className="flex  py-[130px] ">
        <p className="text-white bg-[#3D638A] bg-opacity-70  text-[40px] flex w-full justify-center  font-serif   py-[5px] [word-spacing:0.50rem] ">
          {" "}
          A Canvas of Soulful Expression
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Arts;
