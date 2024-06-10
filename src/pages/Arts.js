import React from "react";
import { useArtContext } from "../ArtContext";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

function Arts() {
  const { submissions } = useArtContext();

  return (
    <div>
      <NavBar />
      <div className="flex py-[130px]">
        <p className="text-white bg-[#3D638A] bg-opacity-70 text-[40px] flex w-full justify-center font-serif py-[5px] [word-spacing:0.50rem]">
          A Canvas of Soulful Expression
        </p>
      </div>
      <div>
        {/* Render submitted images */}
        {submissions.map((submission, index) => (
          <div key={index}>
            <img src={submission.image} alt={`Art ${index}`} />
            <p>Name: {submission.name}</p>
            <p>Email: {submission.email}</p>
            <p>Art Type: {submission.artType}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Arts;
