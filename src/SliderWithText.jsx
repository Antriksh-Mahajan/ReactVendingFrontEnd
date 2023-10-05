import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SliderWithText() {
  const [selectedItem, setSelectedItem] = useState(0); // Default to the first item
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch WordPress posts using the REST API
    fetch(
      "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/posts?per_page=5&_embed"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data received
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center items-center my-10">
        <div
          style={{ backgroundColor: "#FAFBFC" }}
          className="lg:w-1/2 flex flex-col lg:flex-row justify-center  items-center text-center "
        >
          <div className="  justify-center items-center my-10 mx-10">
            <ul>
              <h1 className=" text-3xl  my-5">
                Our Full-Line of Vending Machines
              </h1>
              {posts.map((item, index) => (
                <li
                  key={index}
                  className={selectedItem === index ? "selected" : ""}
                  onClick={() => setSelectedItem(index)} // Use setSelectedItem to update the selected item
                >
                  {item.title.rendered} {/* Access the title property */}
                </li>
              ))}
            </ul>
          </div>
          <Carousel
            selectedItem={selectedItem}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            className="w-1/2 justify-center flex"
          >
            {posts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
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
                <div className="text-center lg:flex lg:flex-col items-center justify-center m-5">
                  <h2 className="font-bold">{item.title.rendered}</h2>
                  <p className="text-justify">{item.content.rendered}</p>

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
