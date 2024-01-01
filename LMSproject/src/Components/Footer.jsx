import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  let date = new Date();

  let currentYear = date.getFullYear();

  return (
    <div>
      <section className="flex text-center items-center justify-between border-2 p-3 relative size-full bg-slate-800 text-white">
        Copyright {currentYear} | All rights reserved
        <div className="flex gap-x-7">
          <a
            className=" hover:text-sky-600 transition-all ease-in-out duration-700"
            href=""
          >
            <BsFacebook />
          </a>
          <a
            className=" hover:text-sky-600 transition-all ease-in-out duration-700"
            href=""
          >
            <BsInstagram />
          </a>
          <a
            className=" hover:text-sky-600 transition-all ease-in-out duration-700"
            href=""
          >
            <BsTwitter />
          </a>
          <a
            className=" hover:text-sky-600 transition-all ease-in-out duration-700"
            href=""
          >
            <BsLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
