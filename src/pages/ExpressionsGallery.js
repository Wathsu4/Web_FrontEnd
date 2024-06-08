import React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import image1 from "../assets/expressionsgallery/image1.png";
import image2 from "../assets/expressionsgallery/image2.png";
import image3 from "../assets/expressionsgallery/image3.png";
import image4 from "../assets/expressionsgallery/image4.png";
import image5 from "../assets/expressionsgallery/image5.png";
import image6 from "../assets/expressionsgallery/image6.png";
import arts from "../assets/expressionsgallery/arts.png";
import poems from "../assets/expressionsgallery/poems.png";
import handcraft from "../assets/expressionsgallery/handcraft.png";
import { Link } from "react-router-dom";

function ExpressionsGallery() {
  return (
    <div>
      <NavBar />
      <div className="flex felx-wrap justify-center  ">
        <div className="flex  pt-[120px]   flex-row w-4/6 pb-10 ">
          <div className="flex flex-col">
            <div className="flex ">
              <p className="font-serif text-[45px] font-bold leading-10">
                Discover the <br /> Beauty of
                <br /> Patients
              </p>
            </div>
            <div className="flex py-10 ">
              <p className="font-serif text-[18px]">
                There, you'll find an amazing collection of art, writing, and
                handcraft submitted by people on their own mental health
                journeys. From calming watercolors to powerful poems, this
                gallery offers a space for raw and awesome expressions of
                emotions, providing inspiration and a sense of community you
                won't want to miss.
              </p>
            </div>

            <div className="flex pt-6 ">
              <button className=" bg-[#4D647C] bg-opacity-85 text-black px-[30px] p-[5px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none  items-center font-serif">
                Submit Your Art
              </button>
            </div>
          </div>
          <div className="px-5"></div>

          <div className=" space-y-4 pr-[300px]">
            <div className="flex flex-row space-x-4  ">
              <img src={image1} alt="" className=" " />
              <img src={image2} alt="" className=" " />
              <img src={image3} alt="" className="  " />
            </div>
            <div className="flex flex-row space-x-4">
              <img src={image4} alt="" className=" " />
              <img src={image5} alt="" className="  " />
              <img src={image6} alt="" className="  " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 py-[100px]">
        <div className="flex flex-col">
          <img src={arts} alt="" className=" " />
          <Link to="/arts">
            <button className=" bg-[#4D647C] bg-opacity-85 text-black ml-3 px-[80px] p-[8px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none  items-center font-serif ">
              Arts
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <img src={poems} alt="" className=" " />
          <Link to="/poems">
            <button className=" bg-[#4D647C] bg-opacity-85 text-black ml-3 px-[80px] p-[8px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none  items-center font-serif">
              Poems
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <img src={handcraft} alt="" className=" " />
          <Link to="/handcraft">
            <button className=" bg-[#4D647C] bg-opacity-85 text-black ml-3 px-[60px] p-[8px] mb-3 text-s rounded-[30px] cursor-pointer  outline-none  items-center font-serif">
              Hand Crafts
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExpressionsGallery;
