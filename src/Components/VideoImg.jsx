import React from "react";

export default function VideoImg({ data }) {
  return (
    <div>
      {data.map((data, index) => (
        <section className="" key={index}>
          <div className="relative">
            <div className=" ">
              <a href="https://vimeo.com/413637467">
                {" "}
                <img
                  src={data.acf.belowimage}
                  alt=""
                  className="w-full h-auto brightness-50 relative"
                  style={{ objectFit: "cover", width: "100%", height: "550px" }}
                />
                {""}{" "}
              </a>
            </div>

            <div className="h-fit absolute inset-1 flex flex-col  justify-evenly items-center text-center lg:text-left top-48">
              <div className="flex flex-col   w-full justify-evenly items-center md:flex-row lg:flex-row  ">
                <div className=" ">
                  <img
                    src={data.acf.playbuttonimg}
                    alt=""
                    width="80px"
                    height="80px"
                  />
                </div>
                <div className="lg:absolute left-96 ">
                  <h1 className="w-72 text-white text-4xl font-bold leading-normal">
                    Your Source for Full-Line of
                    <span style={{ color: "#c7ff4e" }}>
                      {" "}
                      Custom Vending Machines
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
