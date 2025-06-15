import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <>
      {/* adding the footer */}
      <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between sm:px-20 text-white bg-gray-800">
        {/* adding copyright section */}
        <section className="text-lg translate-x-[-20px]">
          Copyright {year} | All Rights Reserved  
        </section>

        <section className="translate-x-[-60px] ">
          Made with love ❤️  by Manas Tripathi
        </section>

        {/* adding the social media section */}
        <section className="flex items-center justify-center gap-5 text-2xl text-white translate-x-[20px]">
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-400 "
            href="https://www.linkedin.com/in/manas-tripathi-73876324b/"
          >
            <BsLinkedin />
            
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://github.com/ManasTripathi07"
          >
            <BsGithub />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://6000-firebase-studio-1749711711181.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev/"
          >
            <CgWebsite />
            
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href="https://x.com/Manas24t"
          >
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
