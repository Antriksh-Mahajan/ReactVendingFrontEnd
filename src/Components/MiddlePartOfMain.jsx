import React from "react";
import ReadMore from "./ReadMore";

export default function MiddlePartOfMain({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div className="w-full flex flex-row justify-center items-center p-6  ">
          <div className="px-4  flex flex-col md:pt-5 ">
            <h2 className="text-black md:w-72 font-bold text-xl font-romen">
              {data.acf.middleleft}
            </h2>
            <img
              width="30% "
              height="10px"
              className="py-3 "
              src={data.acf.fivestar}
              alt=""
            />
            <ReadMore />
          </div>

          <div className=" flex flex-col items-center justify-center md:w-1/3">
            <div>
              <h2 className="text-xl">{data.acf.righmiddletbody}</h2>
            </div>
            <div className="flex  flex-col  lg:flex-row justify-between mt-7">
              <img
                className="w-24 mx-10 grayscale hover:grayscale-0"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/12/user-icon4-1.png"
                alt=""
                width="100%"
                height="100px"
              />

              <img
                className="w-24 mx-10  grayscale hover:grayscale-0"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/12/user-icon2-1.png"
                alt=""
                width="100%"
                height="100px"
              />
              <img
                className="w-24 mx-10 grayscale hover:grayscale-0"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/12/user-icon7-1.png"
                alt=""
                width="100%"
                height="100px"
              />
              <img
                className="w-24 mx-10 lg:mx-5 grayscale hover:grayscale-0"
                src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/12/user-icon9-1.png"
                alt=""
                width="100%"
                height="100px"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
