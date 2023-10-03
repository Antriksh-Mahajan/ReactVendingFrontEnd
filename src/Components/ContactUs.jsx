import React from "react";

export default function ContactUs({ data }) {
  return (
    <div>
      {/* {data.map((data) => ( */}
      <div
        style={{ backgroundColor: "#DDDEDF" }}
        className="h-20 flex flex-row justify-evenly items-center"
      >
        <h1 className="text-2xl font-bold ">
          Contact us today to find out how we can help you achieve your vending
          business goals.
        </h1>
        <button className="bg-greencolor h-10 w-40 rounded-full">
          Contact Us
        </button>
      </div>
      {/* ))} */}
    </div>
  );
}
