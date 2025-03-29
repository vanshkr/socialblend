import React from "react";
import { StoryCarousel } from "./StoryCarousel";
import { stories } from "../assets/constants";
import { Posts } from "./Posts/Posts";
export const Feed = () => {
  return (
    <div className="text-black">
      <StoryCarousel stories={stories} />
      <Posts />
    </div>
  );
};
