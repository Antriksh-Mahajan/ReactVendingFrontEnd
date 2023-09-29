import { React } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FrontMain({ data }) {
  return (
    <div>
      {data.map((data, index) => (
        <div
          style={{ backgroundColor: "#181818" }}
          className="h-100 md:h-100 flex align-center justify-center relative pt-4"
          key={index}
        >
          <div className="flex flex-col w-full md:flex md:flex-row justify-center align-center">
            <div className="lg:w-1/3">
              <div className="flex flex-col justify-center">
                <h1 className="text-white bg-graycolor italic py-2 w-60 mx-3 px-3 my-5">
                  {data.acf.heading}
                </h1>

                <h1 className="lg:w-full text-white text-4xl md:w-full font-bold mx-4 lg:mx-auto">
                  <h1 className="lg:w-full text-white text-4xl md:w-full font-bold md:p-4">
                    {data.acf.maintagline
                      .split("factory direct")
                      .map((part, index, array) =>
                        index === array.length - 1 ? (
                          part
                        ) : (
                          <span key={index}>
                            {part}{" "}
                            <span className="factory-direct text-greencolor">
                              factory direct
                            </span>
                          </span>
                        )
                      )}
                  </h1>
                </h1>

                <p className=" lg:w-full text-white p-5">
                  {data.acf.maintagbody}
                </p>
                <div className="flex flex-row px-5 lg:justify-start">
                  <button
                    style={{ backgroundColor: "#BDD52F" }}
                    className="rounded-3xl text-black py-2 px-3 w-40 flex items-center justify-center font-bold"
                  >
                    {data.acf.frontbtn}
                  </button>
                </div>
                <div className="flex px-5 items-center py-5 lg:items-start">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.firststicker}
                      alt="firststicker"
                      width={100}
                    />
                    <h3 className="text-white px-5 text-center">
                      {data.acf.firststicekertext}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.secondimg}
                      alt="secondsticker"
                      width={100}
                    />
                    <h3 className="text-white px-5 ">
                      {data.acf.secondstickertext}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.thirdimg}
                      alt="secondsticker"
                      width={100}
                    />
                    <h3 className="text-white px-5 ">
                      {data.acf.thirdstickertext}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <section className="mx-10 lg:mx-20 md:auto carousel-section md:w-52 lg:w-56">
                <Carousel
                  autoPlay={true}
                  interval={3000}
                  infiniteLoop={true}
                  showThumbs={false}
                >
                  <div>
                    <img
                      src={data.acf.carouselimg1}
                      alt="Description for Carousel Image 1"
                      width="800"
                      height="600"
                      preload="auto"
                    />
                  </div>
                  <div>
                    <img
                      src={data.acf.carouselimg2}
                      alt="Description for Carousel Image 2"
                      width="800"
                      height="600"
                      preload="auto"
                    />
                  </div>
                  <div>
                    <img
                      src={data.acf.carouselimg3}
                      alt="Description for Carousel Image 3"
                      width="800"
                      height="600"
                      preload="auto"
                    />
                  </div>
                </Carousel>
              </section>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
