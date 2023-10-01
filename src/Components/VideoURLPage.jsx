import React from "react";

export default function VideoURLPage({ data }) {
  return (
    <div>
      <section className="  w-full flex flex-row justify-center pt-0">
        {data.map((data, index) => (
          <iframe
            key={index}
            className="w-full pt-5 flex flex-row "
            src={data.acf.videolink}
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vending demo video"
          />
        ))}
      </section>
    </div>
  );
}
