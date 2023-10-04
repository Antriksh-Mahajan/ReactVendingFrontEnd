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
    <div className="mt-10 flex flex-col items-center justify-center lg:flex-row lg:px-4">
      <div className="flex flex-col items-start justify-left">
        <h2 className="text-3xl font-bold">Latest Blogs</h2>
        <div className="bg-blue-200">
          {latestPost && (
            <div className="flex flex-col">
              <div className="">
                <img
                  src={latestPost.acf.postimage}
                  alt=""
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          )}
        </div>
        <div className="py-2 flex items-center justify-center flex-row lg:w-1/3">
          <div className="flex  items-center w-full">
            {otherPosts.length > 0 &&
              otherPosts.slice(1, 4).map((post, index) => (
                <div
                  className="flex flex-col w-full items-center justify-center my-4"
                  key={post.index}
                >
                  <div className="w-full">
                    {post.acf && post.acf.postimage && (
                      <img
                        className="p-2"
                        src={post.acf.postimage}
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-lg my-5">
                      {post.title && post.title.rendered}
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {latestPost && (
        <div className="lg:mx-4 lg:my-10">
          <div className="m-10">
            <h2 className="text-3xl my-5 font-bold text-left">
              {latestPost.title.rendered}
            </h2>
            <h2 className="text-justify"> {latestPost.acf.postbody} </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestPostBlog;