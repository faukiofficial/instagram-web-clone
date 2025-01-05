import React from "react";
import { posts } from "../../../datas/posts";

const Explore: React.FC = () => {
  return (
    <div className="min-h-screen py-2 600:py-6 w-full flex px-1 600:px-[16px] 1000:px-[65px]">
      <div className="grid grid-cols-3 600:mt-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="aspect-square overflow-hidden border cursor-pointer"
          >
            <img
              src={post.imageUrl}
              alt="No image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
