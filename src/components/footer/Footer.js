import React from "react";
import facebook from "../../assets/icons/icons8-facebook-30.png";
import twitter from "../../assets/icons/icons8-twitter-30.png";
import google from "../../assets/icons/icons8-google-plus-32.png";
import phone from "../../assets/icons/icons8-phone-48.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-row  flex-wrap bg-[#4D647C] justify-between p-5 ">
        <div className="flex flex-col ml-10 my-5">
          <p className="font-bold text-xl font-serif mb-2">Services</p>
          <ul className=" space-y-2">
            <li className="font-serif list-disc ml-5">Professional Support</li>
            <li className="font-serif list-disc ml-5">
              Anonymous Peer Support
            </li>
            <li className="font-serif list-disc ml-5">
              Mental Health Assessment
            </li>

            <li className="font-serif list-disc ml-5">
              <Link to="/expressiongallery">Expression Gallery</Link>
            </li>

            <li className="font-serif list-disc ml-5">
              <Link to="/musictherapy">Music Therapy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mr-10  my-5">
          <p className="font-bold text-xl font-serif mb-2 ">Follow SoulCare+</p>
          <ul className="flex flex-col space-y-2">
            <li className="flex inline-flex">
              <img src={facebook} alt="" className=" h-7 w-7 mr-2" />
              Facebook{" "}
            </li>
            <li className="flex inline-flex">
              <img src={twitter} alt="" className="h-7 w-7 mr-2" />
              Twitter{" "}
            </li>
            <li className="flex inline-flex">
              <img src={google} alt="" className="h-7 w-7 mr-2" />
              Google+{" "}
            </li>
            <li className="flex inline-flex">
              <img src={phone} alt="" className="h-7 w-7 mr-1" />
              +94256523556 For Assistant{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex bg-[#0A2351] justify-center">
        <p className="text-white p-6 font-bold font-serif">
          © 2024 SOULCARE+ PVT LTD. ALL RIGHT RESERVED
        </p>
      </div>
    </>
  );
}

export default Footer;
