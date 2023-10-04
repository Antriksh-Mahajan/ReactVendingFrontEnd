import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PostAPI = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    // Fetch WordPress posts using the REST API
    fetch(
      "https://jobadvisor.darpanchandigarh.in/wp-json/wp/v2/posts?per_page=5&_embed"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div className="carousel-container">
      <h1 className="text-4xl my-10 text-center">All Post</h1>

      {posts.length > 0 && (
        <div className="carousel-wrapper">
          <Carousel
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            showThumbs={false}
            selectedItem={currentPostIndex}
            onChange={(index) => setCurrentPostIndex(index)}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className="carousel-slide w-full flex flex-row"
              >
                <div className=" w-80 h-96">
                  <img
                    src={post.acf.postimage}
                    alt=""
                    className=""
                    width="100%"
                  />
                </div>

                <div className="carousel-content ">
                  <h3
                    style={{ color: "#BED630" }}
                    className="text-2xl font-bold"
                  >
                    {post.title.rendered}
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default PostAPI;
