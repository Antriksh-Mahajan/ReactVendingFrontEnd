import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReadMore from "./ReadMore";

const LatestPostBlog = () => {
  const [latestPost, setLatestPost] = useState(null);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    // Fetch the latest WordPress post and other posts using the REST API
    fetch(
      "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/posts?per_page=5&_embed"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Set the latest post with full content
          setLatestPost(data[0]);

          // Set the rest of the posts (excluding the first one) for image and title display
          setOtherPosts(data.slice(1));
        }
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="flex flex-col pb-16">
        <h2 className="text-3xl font-semibold pb-5 text-center">
          Our Top Selling Vending Machines
        </h2>
        <button className="underline">View Now</button>
      </div>
      <div
        style={{ maxWidth: "1200px" }}
        className="flex w-full flex-col lg:flex-row "
      >
        <div
          className="w-1/2 flex flex-col lg:flex-row items-center justify-center gap-5"
          style={{
            backgroundImage: "linear-gradient(325deg,#181818 0%,#3e3e3e 100%)",
            color: "white",
            padding: "20px",
            height: "603px",
            width: "100%",
          }}
        >
          <div className="">
            <img
              src={latestPost && latestPost.acf.postimage}
              alt={latestPost && latestPost.title.rendered}
              style={{ maxHeight: "300px", height: "auto" }}
            />
          </div>
          <div className="w-1/2 gap-y-10">
            <h2 className="text-xl  font-bold text-greencolor">
              {latestPost && latestPost.title.rendered}
            </h2>
            <p className="py-4">{latestPost && latestPost.acf.postbody}</p>
            <button className="text-white font-bold underline">View Now</button>
          </div>
        </div>

        <div
          className="w-1/2 flex flex-col lg:flex-row items-center justify-center gap-5"
          style={{
            backgroundImage:
              "linear-gradient(125deg, #ededed 0%, #dddbd5 100%)",
            color: "black", // Set text color to black for light background
            height: "603px",
            width: "100%",
          }}
        >
          <div className="">
            <img
              src={otherPosts.length > 0 && otherPosts[0].acf.postimage}
              alt={otherPosts.length > 0 && otherPosts[0].title.rendered}
              style={{ maxHeight: "300px" }}
            />
          </div>
          <div className="w-1/2 gap-y-10">
            <h2 className="font-bold text-xl text-greencolor">
              {otherPosts.length > 0 && otherPosts[0].title.rendered}
            </h2>
            <p className="py-4">
              {otherPosts.length > 0 && otherPosts[0].acf.postbody}
            </p>
            <button className="font-bold underline">View Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPostBlog;
