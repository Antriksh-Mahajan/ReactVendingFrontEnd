import React from "react";

// Define an async function to fetch your data

export default function VideoURLPage({ data }) {
  return (
    <div>
      <section className="w-full flex flex-row justify-center lg:pt-8">
        {data.map((videoData, index) => (
          <iframe
            key={index}
            className="w-full  flex flex-row "
            src={videoData.acf.videolink}
            width="100%"
            height="350"
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
