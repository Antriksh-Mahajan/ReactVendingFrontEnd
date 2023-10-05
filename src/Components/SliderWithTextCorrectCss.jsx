import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SliderWithTextCorrectCss({ Postdata }) {
  const [selectedItem, setSelectedItem] = useState(0); // Default to the first item

  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" flex items-center  justify-center m-5 ">
        <ul>
          <h1
            style={{ fontSize: "40px" }}
            className="font-semibold	my-4 leading-tight "
          >
            Our Full-Line of Vending Machines
          </h1>
          {Postdata.map((item, index) => (
            <li
              key={index}
              style={{ color: selectedItem === index ? "black" : "#99a2a2" }}
              className={"selected my-1 mx-2 font-bold uppercase"}
              onClick={() => setSelectedItem(index)} // Use setSelectedItem to update the selected item
            >
              <h2 className="">
                {String(index + 1).padStart(2, "0")}. {item.title.rendered}
              </h2>{" "}
              {/* Access the title property */}
            </li>
          ))}
        </ul>
      </div>

      <Carousel
        selectedItem={selectedItem}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        className=" justify-center flex"
        width={400}
      >
        {Postdata.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center ">
            <div className="mt-5">
              {item.acf && (
                <img
                  className="w-full"
                  src={item.acf.postimage}
                  alt="imagetags of imagseg"
                  width="100%"
                  loading="lazy"
                />
              )}
            </div>
            <div className="text-center lg:flex lg:flex-col items-center justify-center  ">
              <h2 className="font-bold ">{item.title.rendered}</h2>
              <p className="text-justify ">{item.acf.postbody}</p>

              <button className="bg-greencolor  w-20 ">view now</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
