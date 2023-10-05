import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="lg:flex lg:flex-row justify-center  items-center lg:h-20 p-5">
        <div className="flex flex-row justify-between">
          <img
            src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/vending-logo-dark.svg"
            alt="SiteLogo"
            width="300px"
            height="68px"
          />
          <div className="lg:hidden flex flex-row items-center justify-center pl-5 bg-white">
            <button onClick={toggleMenu} className="  rounded-full ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                alt=""
                width="100%"
                height="100px"
              />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center pt-1  font-bold lg:flex lg:flex-row ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="p-3" onClick={closeMenu}>
            Vending Machine
          </a>
          <a href="#" className="p-3" onClick={closeMenu}>
            About
          </a>
          <a href="#" className="p-3" onClick={closeMenu}>
            Affiliates
          </a>
          <a href="#" className="p-3" onClick={closeMenu}>
            Financing
          </a>
          <a href="#" className="p-3" onClick={closeMenu}>
            Free Vending
          </a>
          <a href="#" className="p-3" onClick={closeMenu}>
            Greenlite Cashless
          </a>
          <button
            className="bg-transparent p-5 py-1 rounded-full border-black border"
            onClick={closeMenu}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
