import React from "react";
import Layout from "../Layout/Layout";
import homePageMainImage from "../Assets/Images/homePageMainImage.png";
import { Link } from "react-router-dom";
import Banner from "../Assets/bannervideo.mp4"
import TypedText from "../Components/TypedText";
const Homepage = () => {
  return (
    <Layout>
        <div class="shadow-dance-container">
          <h1 class="shadow-dance-text">Learnity</h1>
        </div>

      


      <div className=" px-6 lg:px-20 text-white flex flex-col lg:flex-row  items-center justify-between gap-12 min-h-[76.2vh] bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-900 ">
        {/* Left: Platform Details */}
        
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Find the Best{" "}
            <br></br>
           
            <TypedText/>
          </h1>
          <p className="text-lg md:text-xl text-richblack-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Access a wide range of quality courses taught by experienced instructors — all at an affordable price.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
            <Link to={"/courses"}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out">
                Explore Courses
              </button>
            </Link>
            <Link to={"/contact"}>
              <button className="border border-yellow-400 hover:border-yellow-500 text-yellow-400 hover:text-yellow-500 font-semibold text-lg px-6 py-3 rounded-xl transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Hero Video */}
        <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-500 '>
            <video className='shadow-[20px_20px_rgba(255,255,255)] ' muted loop autoPlay>
                <source src={Banner} type='video/mp4'/>
            </video>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
