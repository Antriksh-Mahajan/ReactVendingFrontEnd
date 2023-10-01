import React from "react";

export default function FinancialAdvisor() {
  return (
    <div className="flex flex-col  w-full   mt-20 items-center justify-center">
      <div className="flex flex-col lg:flex-row ">
        {/* first section  */}

        <div
          style={{ backgroundColor: "#F0F0F0" }}
          className="lg:w-1/2 lg:p-20 md:p-20 "
        >
          <img
            src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/financing-options.png"
            alt=""
            className="w-36 "
          />

          <h1 className="font-semibold text-4xl w-96 py-6 ">
            Great financing options available.
          </h1>
          <p className="w-96 pb-5">
            Great financing options available. Click or call to find out what we
            can do for you.
          </p>
          <a href="" className="font-bold underline">
            Read More
          </a>
        </div>
        <div
          style={{ backgroundColor: "#FAFAFA" }}
          className="w-1/2 lg:p-20 md:p-20"
        >
          <img
            src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/financing-options.png"
            alt=""
            className="w-36 "
          />

          <h1 className="font-semibold text-4xl w-96 py-6 ">
            We provide the best experience possible.
          </h1>
          <p className="w-96 pb-5">
            We work with vending partners to provide the best experience
            possible.
          </p>
          <a href="" className="font-bold underline">
            Read More
          </a>
        </div>

        {/* first section  */}
      </div>
      <div>
        {/* second section */}

        <div className="flex flex-col md:flex-row lg:flex-row justify-evenly  md:my-10  ">
          <div className="flex flex-col  items-center  m-2">
            <img
              src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/icon-circle-dollar.png"
              alt=""
            />
            <h2 className="m-2 font-bold">100% Finance</h2>
          </div>
          <div className="flex flex-col  items-center m-2 ">
            <img
              src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/icon-circle-usa.png"
              alt=""
            />
            <h2 className="m-2 font-bold">Made in USA</h2>
          </div>{" "}
          <div className="flex flex-col  items-center m-2 ">
            <img
              src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/icon-circle-heart.png"
              alt=""
            />
            <h2 className="m-2 font-bold w-40 text-center">
              #1 choice for profitable vending!
            </h2>
          </div>{" "}
          <div className="flex flex-col  items-center m-2">
            <img
              src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/icon-circle-ok.png"
              alt=""
            />
            <h2 className="m-2 font-bold">2-Year Parts Warranty</h2>
          </div>
        </div>
        {/* second section */}
      </div>
    </div>
  );
}
