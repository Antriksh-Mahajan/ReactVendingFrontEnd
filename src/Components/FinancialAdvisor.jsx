import React from "react";
import ReadMore from "./ReadMore";

export default function FinancialAdvisor({ data }) {
  return (
    <div className="flex flex-col  w-full   mt-20 items-center justify-center">
      {data.map((data) => (
        <div>
          <div className="flex flex-col lg:flex-row ">
            {/* first section  */}

            <div
              style={{ backgroundColor: "#F0F0F0" }}
              className="lg:w-1/2 lg:p-20 md:p-20 "
            >
              <img
                src={data.acf.financesectionleftimg}
                alt=""
                className="w-36 "
                width="100%"
                height="200px"
              />

              <h1 className="font-semibold text-4xl w-96 py-6 ">
                {data.acf.financetitle}
              </h1>
              <p className="w-96 pb-5">{data.acf.financebodyleft}</p>
              <ReadMore />
            </div>
            <div
              style={{ backgroundColor: "#FAFAFA" }}
              className="w-1/2 lg:p-20 md:p-20"
            >
              <img
                src={data.acf.financesectionlrightmg}
                alt=""
                className="w-36 "
                width="100%"
                height="200px"
              />

              <h1 className="font-semibold text-4xl w-96 py-6 ">
                {data.acf.financetitleright}
              </h1>
              <p className="w-96 pb-5">{data.acf.financebodyright}</p>
              <ReadMore />
            </div>

            {/* first section  */}
          </div>
          <div>
            {/* second section */}

            <div className="flex flex-col md:flex-row lg:flex-row justify-evenly  md:my-10  ">
              <div className="flex flex-col  items-center  m-2">
                <img
                  src={data.acf.dollar100finance}
                  alt=""
                  width="50%"
                  height="200px"
                />
                <h2 className="m-2 font-bold">{data.acf.text100finance}</h2>
              </div>
              <div className="flex flex-col  items-center m-2 ">
                <img
                  src={data.acf.imgmade_in_usa}
                  alt=""
                  width="50%"
                  height="100px"
                />
                <h2 className="m-2 font-bold">{data.acf.usatext}</h2>
              </div>{" "}
              <div className="flex flex-col  items-center m-2 ">
                <img
                  src={data.acf.heartprofitableimg}
                  alt=""
                  width="25%"
                  height="200px"
                />
                <h2 className="m-2 font-bold w-40 te">
                  {data.acf.profitable_text}
                </h2>
              </div>{" "}
              <div className="flex flex-col  items-center m-2">
                <img src={data.acf.tickimg} alt="" width="25%" height="100px" />
                <h2 className="m-2 font-bold">{data.acf.ticktext}</h2>
              </div>
            </div>
            {/* second section */}
          </div>
        </div>
      ))}
    </div>
  );
}
