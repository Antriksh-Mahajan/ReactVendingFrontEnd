import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#1F201B" }}
        className="p-10 h-100 flex text-white justify-evenly"
      >
        <div className="w-full justify-evenly">
          <div>
            <h4>Subscribe to Our Newsletter</h4>

            <input
              class="h-8 bg-transparent"
              type="text"
              placeholder="First Name"
            />
            <input
              class="h-8 bg-transparent"
              type="text"
              placeholder="Last Name"
            />
            <input class="h-8 bg-transparent" type="text" placeholder="Email" />
            <button class="h-10 btn bg-greencolor rounded-3xl px-5 text-black">
              SIGN ME UP
            </button>
            <h2>Follow Us</h2>
          </div>
          <div>
            <div class="flex flex-row justify-evenly">
              <div class="leftOne flex flex-col ">
                <span>VENDING MACHINES</span>
                <a href="">Combo Vending Machines</a>
                <a href="">Drink Vending Machines</a>
                <a href="">Snack Vending Machines </a>
                <a href="">Frozen Food Machines </a>
                <a href="">Coffee Vending Machines </a>
                <a href="">Custom Vending Machines </a>
                <a href="">Used Vending Machines </a>
              </div>
              <div class="leftmiddle flex flex-col">
                <span>TRAINING & SUPPORT</span>
                <a href="">Service & repair</a>
                <a href="">Order Parts</a>
                <a href="">Parts and Services Manuals</a>
                <a href="">Warranty Registration</a>
                <a href="">Training Videos </a>
              </div>
              <div class="Right flex flex-col">
                <span>SITE LINKS</span>
                <a href="">Home</a>
                <a href="">Vending Machines </a>
                <a href="">About</a>
                <a href="">Affilates</a>
                <a href="">Financing</a>
                <a href="">Vending Blogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
