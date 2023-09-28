import React from "react";

export default function VideoImg({ data }) {
  return (
    <div>
      {data.map((data) => (
        <section>
          <img className="w-full mx-5" src={data.acf.belowimage} alt="" />
        </section>
      ))}
    </div>
  );
}
