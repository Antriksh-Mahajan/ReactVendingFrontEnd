import React from "react";

export default function EndHomePage() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#F5F5F5" }}
        className="flex flex-row w-full px-96 items-center justify-center"
      >
        {/* leftSide */}
        <div className="w-1/2 h-100">
          <h1 className="text-4xl w-100 font-bold pb-5 ">
            Vending.com uses award winning technology
          </h1>
          <p>
            Based in Des Moines, lowa. Vending.com offers factory direct
            warranties, parts and service, financing and so much more. Our full
            service programs help the first time owner-operator just getting
            started in the vending business or the seasoned vendor-operator
            looking to expand a growing business.
          </p>
          <p>
            Vending.com is your answer to all your vending needs. Let our 90
            plus years of experience work for you to help grow your business.
            Machine selections include anything from snacks & soda vending
            machines to a full food vending system.
            <br />
          </p>
          <p>
            We have reliable resources to give you the ultimate vending
            experience. Become part of the rapidly growing vending industry with
            Vending.com.
          </p>
        </div>
        {/* leftSide */}
        {/*  */}
        {/* RightSide */}
        <div className="w-1/2 ">
          <img
            src="https://www.vending.com/wp-content/uploads/2021/11/Untitled-2.png"
            alt=""
          />
        </div>
        {/* RightSide */}
      </div>
    </div>
  );
}
