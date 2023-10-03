import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SliderWithText() {
  const [selectedItem, setSelectedItem] = useState(0); // Default to the first item

  const items = [
    {
      title: "Combo Vending Machines",
      description:
        "Chips, candy, pastries, gum and mints, soda, juices, bottled water, and even dairy products can be made available through combo vending machines",
      imageUrl:
        "https://mlnnx0p1sut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/expresscombocategory-1-1.png",
    },
    {
      title: "Snack Vending Machines",
      description:
        "A variety of snacks including chips, chocolates, and candies can be vended through snack vending machines",
      imageUrl:
        "https://mlnnx0p1ust8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/ab32category-1.png",
    },
    {
      title: "Drink Vending Machines",
      description:
        "Soda, juices, and bottled water can be easily dispensed through drink vending machines",
      imageUrl:
        "https://mlnnx0sp1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/ab10-500-2-1-1-1.png",
    },
    // Add more items here...
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "#FAFBFC" }}
        className="w-full flex flex-col lg:flex-row justify-center  items-center text-center"
      >
        <div className=" ">
          <ul>
            <h1 className="text-3xl w-80 my-5">
              Our Full-Line of Vending Machines
            </h1>
            {items.map((item, index) => (
              <li
                key={index}
                className={selectedItem === index ? "selected" : ""}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-96 lg:w-1/3">
          <Carousel
            selectedItem={selectedItem}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col lg:flex-row justify-center items-center w-full"
              >
                <div className="w-100 mt-5 pl-10  ">
                  <img className="" src={item.imageUrl} alt="" />
                </div>
                <div className="w-full mt-10 flex flex-col  justify-center items-start text-left">
                  <h2 className="w-full text-3xl text-justify">{item.title}</h2>
                  <p className="w-full  py-5 ">{item.description}</p>
                  <button>view now</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
