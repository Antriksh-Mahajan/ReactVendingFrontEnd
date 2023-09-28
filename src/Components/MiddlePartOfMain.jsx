import React from "react";

export default function MiddlePartOfMain({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div className="w-full flex justify-center items-center  flex-col md:flex-row">
          <div className="px-4 md:w-40 flex flex-col md:pt-5 ">
            <h2 className="text-black md:w-40 font-bold text-xl font-romen">
              {data.acf.middleleft}
            </h2>
            <img
              width="100px "
              className="py-3 "
              src={data.acf.fivestar}
              alt=""
            />
            <h2 className="">{data.acf.readmore}</h2>
          </div>

          <div className="p-3 flex flex-col md:w-1/3">
            <h2 className="text-xl text-center"> {data.acf.righmiddletbody}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
