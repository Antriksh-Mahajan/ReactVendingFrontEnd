import { Carousel, Typography, Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
export function MaterialTailwind() {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

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
    <Carousel
      className="rounded-xl"
      onChange={(index) => setCurrentPostIndex(index)}
    >
      {posts.map((post) => (
        <div key={post.id} className="carousel-slide w-full flex flex-row">
          <div className="relative h-screen w-full">
            <img
              src={post.acf.postimage}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {post.title.rendered}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  text
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore{" "}
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
