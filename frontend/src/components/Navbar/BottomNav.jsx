import React from "react";
import { bottomMenuItems } from "../../assets/constants";

export const BottomNav = () => {


  return (
    
    <div className="flex justify-around items-center p-2">
      {bottomMenuItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg"
        >
          <item.icon className="h-6 w-6" />
        </button>
      ))}
    </div>
  );
};
