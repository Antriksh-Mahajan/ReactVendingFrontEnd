import { React } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from "react-helmet";

export default function FrontMain({ data }) {
  return (
    <div>
      <Helmet>
        <title>Front Main</title>
        <meta name="Front Main" content="Main website details as shown" />
      </Helmet>
      {data.map((data, index) => (
        <div
          style={{ backgroundColor: "#181818" }}
          className="h-100 md:h-100 flex align-center justify-center p-6 pt-4"
          key={index}
        >
          <div className="flex flex-col w-full md:flex md:flex-row justify-center align-center lg:gap-40">
            <div className="lg:w-1/3">
              <div className="flex flex-col justify-center">
                <h1 className="text-white bg-graycolor uppercase italic py-2 w-64 mx-3 px-3 my-3">
                  {data.acf.heading}
                </h1>

                <h1 className="text-4xl font-bold px-5 ">
                  {data.acf.maintagline.includes("factory direct") ? (
                    <>
                      <span className="text-white">
                        {data.acf.maintagline.split("factory direct")[0]}
                      </span>
                      <span className="text-lightgreencolor">
                        factory direct
                      </span>
                      <span className="text-white">
                        {data.acf.maintagline.split("factory direct")[1]}
                      </span>
                    </>
                  ) : (
                    <span className="text-white">{data.acf.maintagline}</span>
                  )}
                </h1>

                <p className=" lg:w-full text-white p-5">
                  {data.acf.maintagbody}
                </p>
                <div className="flex flex-row px-5 pb-5  lg:justify-start">
                  <button
                    style={{ backgroundColor: "#BDD52F" }}
                    className="rounded-3xl text-black py-2 px-3 w-40 flex items-center justify-center font-bold"
                  >
                    {data.acf.frontbtn}
                  </button>
                </div>
                <div className="flex px-5 items-center  lg:items-start ">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.firststicker}
                      alt="firststicker"
                      width="64px"
                      height="64px"
                    />
                    <h3 className="text-white px-5 lg:w-40 text-center">
                      {data.acf.firststicekertext}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.secondimg}
                      alt="secondsticker"
                      width="64px"
                      height="64px"
                    />
                    <h3 className="text-white px-5 lg:w-40 text-center mt-2">
                      {data.acf.secondstickertext}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 mx-5"
                      src={data.acf.thirdimg}
                      alt="thirdsticker"
                      width="64px"
                      height="64px"
                    />
                    <h3 className="text-white px-5 w-32 text-center">
                      {data.acf.thirdstickertext}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <section className="mx-10 lg:mx-20 md:auto carousel-section md:w-52 lg:w-56">
                <Carousel
                  autoPlay={false}
                  interval={3000}
                  infiniteLoop={true}
                  showThumbs={false}
                >
                  <div>
                    <img
                      src={data.acf.carouselimg1}
                      alt="Description for Carousel Image 1"
                      preload="auto"
                      width="310px"
                      height="440px"
                    />
                  </div>
                  <div>
                    <img
                      src={data.acf.carouselimg2}
                      alt="Description for Carousel Image 2"
                      preload="auto"
                      width="310px"
                      height="440px"
                    />
                  </div>
                  <div className="py-10">
                    <img
                      src={data.acf.carouselimg3}
                      alt="Description for Carousel Image 3"
                      preload="auto"
                      width="310px"
                      height="440px"
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
