import React from "react";

export default function Blog({ data }) {
  return (
    <div className="w-full mt-10 ">
      {data.map((dataItem) => (
        <div key={dataItem.id} className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="w-full flex flex-col items-center justify-center text-center">
              <div className="flex flex-row">
                <img
                  className="w-100 max-w-full" // Added max-w-full to ensure the image fits the screen
                  src={dataItem.acf.mainbottleimage}
                  alt=""
                />
              </div>

              <div className="flex lg:flex-row items-center justify-center">
                <div className="pt-5 flex flex-col mx-2">
                  <img
                    className="w-28 lg:w-36"
                    src={dataItem.acf.bottleleftimg}
                    alt=""
                  />
                  <span className="w-28 lg:w-36 font-bold">
                    {dataItem.acf.uvend_technology}
                  </span>
                </div>
                <div className="w-28 pt-5 flex flex-col mx-2">
                  <img
                    className="w-28 lg:w-36"
                    src={dataItem.acf.bottlemidimg}
                    alt=""
                  />
                  <span className="w-28 py-2 lg:w-40 font-bold">
                    {dataItem.acf.manufactured_usa}
                  </span>
                </div>
                <div className="pt-11 flex flex-col mx-2">
                  <img
                    className="w-28 lg:w-36"
                    src={dataItem.acf.bottlerightimg}
                    alt=""
                  />
                  <span className="w-28 lg:w-36 font-bold">
                    {dataItem.acf.ivend_guaranteed_delivery}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}

          <div className=" lg:w-1/2  ">
            <h1 className="font-bold text-4xl lg:w-1/2 pt-10  m-6">
              {dataItem.acf.blogtitle}
            </h1>
            <p className="lg:w-2/3 text-justify m-6">{dataItem.acf.blogbody}</p>
            <a href="" className="pt-5 font-bold  items-center justify-center">
              {dataItem.acf.readmorebtn}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
