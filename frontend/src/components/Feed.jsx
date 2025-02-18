import React from "react";
import { StoryCarousel } from "./StoryCarousel";
import { stories } from "../assets/constants";
export const Feed = () => {
  return (
    <div className="text-black">
      <StoryCarousel stories={stories} />
    </div>
  );
};
