import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MainProductCarousel() {
  return (
    <section>
      <div className="text-center pt-5">
        <h2 className="font-bold text-4xl">Our Top Selling Vending Machines</h2>
        <a href="#" className="pt-4 text-blue-500">
          View More
        </a>
      </div>
      <div className="m-7">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showArrows={true}
          interval={2000} // Auto-rotate interval in milliseconds
          showStatus={false}
        >
          {/* Slide 1 */}
          <div className="carousel-content bg-graycolor flex flex-row h-96">
            <div className="flex flex-row p-20">
              <div>
                {/* Your image */}
                <img
                  src="Image_URL_1"
                  alt="Product 1"
                  className="w-72 h-auto"
                />
              </div>
              <div className="flex flex-col px-5">
                <h3 className="text-2xl font-bold pb-2 text-yellow-500">
                  Title 1
                </h3>
                <p className="text-gray-500">Description 1</p>
                <a href="#" className="text-white">
                  View More
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-content lightgray flex flex-row h-96">
            <div className="flex flex-row p-20">
              <div>
                {/* Your image */}
                <img
                  src="Image_URL_2"
                  alt="Product 2"
                  className="w-72 h-auto"
                />
              </div>
              <div className="flex flex-col px-5">
                <h3 className="text-2xl font-bold pb-2 text-yellow-500">
                  Title 2
                </h3>
                <p className="text-black">Description 2</p>
                <a href="#" className="text-black font-bold">
                  View More
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
