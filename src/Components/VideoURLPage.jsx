import React, { useState, useEffect } from "react";

// Define an async function to fetch your data
async function fetchData() {
  try {
    const response = await fetch("your_api_endpoint_here");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function VideoURLPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      <section className="w-full flex flex-row justify-center pt-0">
        {data.map((videoData, index) => (
          <iframe
            key={index}
            className="w-full pt-5 flex flex-row "
            src={videoData.acf.videolink}
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
