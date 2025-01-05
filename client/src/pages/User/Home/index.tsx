import React from "react";
import PostCard from "./Components/PostCard";
import { posts } from "../../../datas/posts";
import SuggestionForYou from "./Components/SuggestionForYou";
import { suggestedUsers } from "../../../datas/suggestedUsers";

const Home: React.FC = () => {
  const handleFollow = (username: string) => {
    alert(`You followed ${username}`);
  };
  return (
    <div className="min-h-screen py-6 w-full flex">
      <div className="flex flex-col space-y-6 w-full px-2">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          avatarUrl={post.avatarUrl}
          createdAt={post.createdAt}
          imageUrl={post.imageUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
      </div>

      <div className="hidden 1200:block w-full max-w-[500px] pr-[65px] 1400:pr-[100px]">
      <SuggestionForYou
        suggestedUsers={suggestedUsers}
        onFollow={handleFollow}
      />
      </div>
    </div>
  );
};

export default Home;
