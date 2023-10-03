import React from "react";

export default function EndHomePage({ data }) {
  return (
    <div>
      {data.map((data) => (
        <div
          style={{ backgroundColor: "#F5F5F5" }}
          className="flex flex-row w-full lg:px-96 items-center justify-center text-left"
        >
          <div className=" lg:w-1/2 lg:h-100">
            <h1 className="text-4xl w-100 font-bold pb-5 m-5 ">
              {data.acf.endsectiontitle}
            </h1>
            <div>
              <p className="m-5 text-justify">{data.acf.endsectionbody}</p>
            </div>
          </div>
          <div className="hidden  lg:block">
            <img
              src={data.acf.endsectionimg}
              alt=""
              width="100%"
              height="100px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
