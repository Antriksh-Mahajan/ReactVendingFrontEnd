import React from "react";

export default function VideoImg({ data }) {
  return (
    <div>
      {data.map((data) => (
        <section class="h-100">
          <div class="relative">
            <div class=" ">
              <a href="https://vimeo.com/413637467">
                {" "}
                <img
                  src={data.acf.belowimage}
                  alt=""
                  class="w-full h-auto brightness-50"
                  style={{ objectFit: "cover", width: "100%", height: "500px" }}
                />
                {""}{" "}
              </a>
            </div>

            <div class="h-fit absolute inset-1 flex flex-col lg:flex-row-reverse md:flex-row justify-evenly items-center text-center lg:text-left top-44">
              <div className="flex flex-col   w-full justify-evenly items-center md:flex-row lg:flex-row  ">
                <div className=" ">
                  <img
                    src={data.acf.playbuttonimg}
                    alt=""
                    width="80px"
                    height="80px"
                  />
                </div>
                <div>
                  <h1 class="w-72 t-72  text-white text-4xl font-bold">
                    {data.acf.buttontext
                      .split("Custom Vending Machines")
                      .map((part, index, array) =>
                        index === array.length - 1 ? (
                          part
                        ) : (
                          <span key={index}>
                            {part}{" "}
                            <span className="factory-direct text-greencolor">
                              Custom Vending Machines
                            </span>
                          </span>
                        )
                      )}
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
