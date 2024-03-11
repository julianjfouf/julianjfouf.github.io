import Image from "next/image";
import email from "../../public/icons/Email.svg";
import git from "../../public/icons/GitHub.svg";
import React, { useState } from "react";

const Navbar = ({ setDesigned, designed }) => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <div className="flex items-center justify-between py-9">
      <div className="flex items-end gap-4">
        <h1 className="text-4xl font-[700]">Julian Jfouf</h1>
        <a
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
          href="mailto:julianjfouf@gmail.com"
          target="_blank"
          className="relative"
        >
          <Image className="w-8 h-8 object-contain" src={email} />
          <p
            className={`absolute left-1/2 -translate-x-1/2 px-4 py-1 bg-white/90 rounded-[16px] border border-black/10 pointer-events-none ${
              !showEmail
                ? `-translate-y-2 opacity-0`
                : `translate-y-0 opacity-1`
            } duration-300 transition-all`}
          >
            julianjfouf@gmail.com
          </p>
        </a>
        <a href="https://github.com/julianjfouf" target="_blank">
          <Image className="w-8 h-8" src={git} />
        </a>
      </div>
      {/*
      <div
        onClick={() => setDesigned(!designed)}
        className="flex border rounded-2xl overflow-hidden cursor-pointer select-none"
      >
        <button
          className={`px-8 py-4 before:absolute before:h-full before:w-full before:bg-black before:top-0 before:right-0 before:rounded-l-xl z-[10] before:z-[-1] relative rounded-xl ${
            !designed ? `text-white` : `text-black before:w-0`
          } before:transition-all before:duration-300 origin-right`}
        >
          Raw
        </button>
        <button
          className={`px-8 py-4 before:absolute before:h-full before:w-full before:bg-black before:top-0 before:rounded-r-xl z-[10] before:left-0 before:z-[-1] relative rounded-xl ${
            designed ? `text-white` : `text-black before:w-0`
          } before:transition-all before:duration-300`}
        >
          Designed
        </button>
      </div>
          */}
    </div>
  );
};

export default Navbar;
