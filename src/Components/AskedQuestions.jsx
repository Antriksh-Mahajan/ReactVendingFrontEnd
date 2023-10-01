import React, { useState } from "react";

export default function AskedQuestions() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    if (index === expandedIndex) {
      // Clicking the same question, so close it
      setExpandedIndex(-1);
    } else {
      // Clicking a different question, expand it
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full  lg:px-96 items-center  justify-center">
      <div className="w-80  ">
        <img
          className="w-80"
          src="https://mlnnx0p1ut8l.i.optimole.com/cb:g6-f.55611/w:auto/h:auto/q:mauto/ig:avif/https://www.vending.com/wp-content/uploads/2021/10/joyfull-man.png"
          alt=""
        />
      </div>
      <div className="p-10">
        <h1 className="font-semibold text-4xl py-10 ">
          Frequently Asked Questions
        </h1>

        {[
          "Is there any cost for credit card reader installation?",
          "Can I get 100% financing?",
          "What kind of support is available for my vending equipment?",
          "What is the warranty period on my vending equipment?",
          "Do you provide used vending machines?",
        ].map((question, index) => (
          <div key={index}>
            <button
              className="pb-4 font-semibold text-left"
              onClick={() => toggleExpansion(index)}
            >
              {question}
            </button>
            <span
              className={`${
                expandedIndex === index ? "block" : "hidden"
              } transition-max-h max-h-100 w:80 lg:w-96 pb-5 overflow-hidden`}
            >
              {
                [
                  "No, there is no cost for us to install a credit card reader to your machine when it is being created, however, there are other fees associated with maintaining a credit card reader.",
                  "Yes! 100% financing is available on all of your vending equipment purchases. Our financing specialists will work with you to create a program that works best for your budget.",
                  "When you purchase vending equipment from Vending.com, you receive a lifetime of free technical support from our affiliate, Vendnet. Additionally, you have easy access to manuals, warranty registration, video support and parts ordering from the Vendnet website. It truly is your one-stop shop for technical support.",
                  "We are committed to providing you with top-quality vending equipment merchandise. In order to ensure you have the best experience with your equipment, we offer a 2-year parts warranty on new and remanufactured vending machines, which covers manufacturing defects under everyday, indoor use.",
                  "Yes! We offer affordable, remanufactured vending machines that have been fully refurbished and have gone through extensive testing to ensure you receive a quality vending machine. Our remanufactured inventory changes daily, so please contact Vending.com to see what is in stock.",
                ][index]
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
