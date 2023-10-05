import React from "react";
import ReadMore from "./ReadMore";

export default function MiddlePartOfMain({ data }) {
  return (
    <div>
      {data.map((data, index) => (
        <div
          key={index}
          className="w-full flex flex-col lg:flex-row justify-center items-center p-6  "
        >
          <div className="  flex flex-col md:pt-5 ">
            <h2 className="text-black md:w-72 font-bold text-xl font-romen">
              {data.acf.middleleft}
            </h2>
            <img
              width="40% "
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
                src={data.acf.humanimg1}
                alt=""
                width="100%"
                height=""
              />

              <img
                className="w-24 mx-10  grayscale hover:grayscale-0"
                src={data.acf.humanimg2}
                alt=""
                width="100%"
                height="100px"
              />
              <img
                className="w-24 mx-10 grayscale hover:grayscale-0"
                src={data.acf.humanimg3}
                alt=""
                width="100%"
                height="100px"
              />
              <img
                className="w-24 mx-10 lg:mx-5 grayscale hover:grayscale-0"
                src={data.acf.humanimg4}
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
