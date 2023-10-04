{
  latestPost && (
    <div className="w-full flex ">
      <div className="flex flex-row">
        <div className="w-full">
          <img
            src={latestPost.acf.postimage}
            alt=""
            width="561px"
            height="485px"
          />
        </div>
      </div>
    </div>
  );
}

<div className="flex flex-col lg:flex-row">
  {otherPosts.length > 0 &&
    otherPosts.slice(1, 3).map((post, index) => (
      <div className="flex flex-col lg:flex-row" key={post.id}>
        <div className="mt-16 w-80">
          {post.acf && post.acf.postimage && (
            <img src={post.acf.postimage} alt="" width="100%" height="400px" />
          )}
        </div>
        <div className="lg:w-1/2 m-10 flex flex-col">
          <h1 className="font-bold text-4xl my-5">
            {post.title && post.title.rendered}
            <p>{post.content && post.content.rendered}</p>
          </h1>
        </div>
      </div>
    ))}
</div>;
