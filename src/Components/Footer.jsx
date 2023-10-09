import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faBloggerB,
  faVimeo,
} from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon

export default function Footer() {
  return (
    <div className="" style={{ backgroundColor: "#1F201B" }}>
      <div className=" w-full flex flex-col lg:flex-row items-start px-5   justify-center pt-16 gap-5">
        <div className="flex flex-row  lg:flex-col text-white  lg:items-center lg:justify-center">
          <div className="flex justify-start flex-col items-start">
            <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <div className="flex  flex-col lg:flex-row py-5 w-full	">
              <input
                className="bg-transparent border-b-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="bg-transparent border-b-2"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="bg-transparent border-b-2 "
                type="text"
                placeholder="Email"
              />
            </div>
            <button />

            <div className="flex flex-col justify-start">
              <button className="w-32 h-10 text-black font-semibold uppercase bg-greencolor rounded-full">
                Sign Me Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="text-white  text-2xl font-bold">Follow Us</h1>
            <div className="flex flex-row ">
              <button className="rounded-full h-14 w-14 mx-1 flex items-center justify-center bg-greencolor">
                <FontAwesomeIcon className="text-xl " icon={faFacebookF} />{" "}
              </button>
              <button className="rounded-full h-14 w-14 mx-1 flex items-center justify-center bg-greencolor">
                <FontAwesomeIcon className="text-xl " icon={faTwitter} />{" "}
              </button>
              <button className="rounded-full h-14 w-14 mx-1 flex items-center justify-center bg-greencolor">
                <FontAwesomeIcon className="text-xl " icon={faYoutube} />{" "}
              </button>
              <button className="rounded-full h-14 w-14 mx-1 flex items-center justify-center bg-greencolor">
                <FontAwesomeIcon className="text-xl " icon={faBloggerB} />{" "}
              </button>
              <button className="rounded-full h-14 w-14 mx-1 flex items-center justify-center bg-greencolor">
                <FontAwesomeIcon className="text-xl " icon={faVimeo} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second half */}
      <div className="w-full flex flex-col lg:flex-row justify-center mt-10">
        <div className="m-4">
          <h1 className="text-gray-500">VENDING MACHINES</h1>
          <ul className="text-white ">
            <li className="hover:text-greencolor my-3 ">
              Combo Vending Machines{" "}
            </li>
            <li className="hover:text-greencolor my-3">
              Drink Vending Machines
            </li>
            <li className="hover:text-greencolor my-3">
              Snack Vending Machines
            </li>
            <li className="hover:text-greencolor my-3">Frozen Food Machines</li>
            <li className="hover:text-greencolor my-3">
              Coffee Vending Machines
            </li>
            <li className="hover:text-greencolor my-3">
              Custom Vending Machines
            </li>
            <li className="hover:text-greencolor my-3">
              Used Vending Machines
            </li>
          </ul>
        </div>
        <div className="m-4">
          <h1 className="text-gray-500">TRAINING & SUPPORT</h1>
          <ul className="text-white ">
            <li className="hover:text-greencolor my-3">Service & Repair </li>
            <li className="hover:text-greencolor my-3">Order Parts</li>
            <li className="hover:text-greencolor my-3">
              Parts and Service Manuals
            </li>
            <li className="hover:text-greencolor my-3">
              Warranty Registration
            </li>
            <li className="hover:text-greencolor my-3">Training Videos</li>
          </ul>
        </div>
        <div className="m-4">
          <h1 className="text-gray-500">SITE LINKS</h1>
          <ul className="text-white ">
            <li className="hover:text-greencolor my-3">Home</li>
            <li className="hover:text-greencolor my-3">Vending Machines</li>
            <li className="hover:text-greencolor my-3">About</li>
            <li className="hover:text-greencolor my-3">Affilates</li>
            <li className="hover:text-greencolor my-3">Financing</li>
            <li className="hover:text-greencolor my-3">Vending blogs</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="m-4">
            <h2> &nbsp;</h2>
            <ul className="text-white ">
              <li className="hover:text-greencolor my-3">Free Vending</li>
              <li className="hover:text-greencolor my-3">Promotions</li>
              <li className="hover:text-greencolor my-3">Training & Support</li>
              <li className="hover:text-greencolor my-3">Contact Us</li>
            </ul>
          </div>
          <div className="m-4">
            <h2> &nbsp;</h2>
            <ul className="text-white ">
              <li className="hover:text-greencolor my-3">Terms of Services</li>
              <li className="hover:text-greencolor my-3">Privacy Policy</li>
              <li className="hover:text-greencolor my-3">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly text-gray-200 text-center py-10">
        <img
          src="https://www.vending.com/wp-content/uploads/2021/10/vending-logo-light.svg"
          alt="SiteLogo"
          width="300px"
          height="68px"
          className="text-white"
        />
        <h1 className="pt-5">
          Copyright © 2021, www.vending.com. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
