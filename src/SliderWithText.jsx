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
        "https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/expresscombocategory-1-1.png",
    },
    {
      title: "Snack Vending Machines",
      description:
        "A variety of snacks including chips, chocolates, and candies can be vended through snack vending machines",
      imageUrl:
        "https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/expresscombocategory-1-1.png",
    },
    {
      title: "Drink Vending Machines",
      description:
        "Soda, juices, and bottled water can be easily dispensed through drink vending machines",
      imageUrl:
        "https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2023/07/expresscombocategory-1-1.png",
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
        <div className=" w-1/2 justify-center items-center ">
          <ul>
            <h1 className=" text-3xl  my-5">
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
        <div className="flex flex-row justify-center items-center my-10">
          <Carousel
            selectedItem={selectedItem}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            className=" w-1/2"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col lg:flex-row justify-center items-center  "
              >
                <div className=" mt-5  md:w-40 lg:w-40  ">
                  <img className="" src={item.imageUrl} alt="" />
                </div>
                <div className=" text-center lg:flex lg:flex-col items-center justify-center">
                  <h2 className=" font-bold">{item.title}</h2>
                  <p className=" text-justify">{item.description}</p>
                  <button className="bg-greencolor mt-5 w-20 ">view now</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
