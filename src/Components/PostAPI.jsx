import React, { useState, useEffect } from "react";

const PostAPI = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch WordPress posts using the REST API
    fetch("https://jobadvisor.darpanchandigarh.in//wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching WordPress posts:", error);
      });
  }, []);

  return (
    <div className="flex flex-col px-5">
      {posts.map((post) => (
        <div key={post.id}>
          <h3
            style={{ color: "#BED630" }}
            className="w-68 text-2xl font-bold pb-2"
          >
            {post.title.rendered}
          </h3>
          {/* <p className="w-90" style={{ color: "#C1CED9" }}>
            {post.excerpt.rendered}
          </p> */}
        </div>
      ))}
      <a href="https://yourwordpresssite.com" className="text-white">
        View more
      </a>
    </div>
  );
};

export default PostAPI;
