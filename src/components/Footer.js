import React from "react";
import i from '../img/i.png'
import f from '../img/f.png'
import m from '../img/m.png'
import t from '../img/t.png'
import w from '../img/w.png'

const Footer = () => {
  return (
    <>
      <footer className="h-52 w-full ">
        <div className="  bg-white flex  justify-evenly gap-10 mt-14">
          <a className="ftr" href="https://en.wikipedia.org/wiki/FAQ">FAQ</a>
          <a className="ftr" href="https://www.merriam-webster.com/dictionary/configuration">Configuration</a>
          <a className="ftr" href="https://github.com/">Github</a>
          <a className="ftr" href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">LinkedIn</a>
        </div>
        <div className="h w-full bg-white flex justify-center gap-10 mt-16">
          <a href="https://www.instagram.com/"><img className="ftrlink" src={i} alt="" /></a>
          <a href="https://www.facebook.com/"><img className="ftrlink" src={f} alt="" /></a>
          <a href="https://investor.fb.com/home/default.aspx"><img className="ftrlink" src={m} alt="" /></a>
          <a href="https://twitter.com/i/flow/login"><img className="ftrlink" src={t} alt="" /></a>
          <a href="https://web.whatsapp.com/"><img className="ftrlink" src={w} alt="" /></a>
        </div>
        <div>
        <p className="my-10 text-gray-900 font-thin text-lg flex justify-center bg-gray-200 border border-blue-600 mx-96 rounded-lg">Created by WEBSITE</p>

        </div>
      </footer>
    </>
  );
};

export default Footer;
