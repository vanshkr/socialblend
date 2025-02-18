import React from "react";
import { useNavigate } from "react-router-dom";
import { bottomMenuItems } from "../../assets/constants";

export const BottomNav = () => {
  const navigate = useNavigate()

  return (
    
    <div className="flex justify-around items-center px-2">
      {bottomMenuItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => navigate(item?.link)}
        >
          <item.icon className="h-6 w-6" />
        </button>
      ))}
    </div>
  );
};
