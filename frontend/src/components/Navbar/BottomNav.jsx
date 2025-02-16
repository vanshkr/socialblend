import React from "react";
import {
  Home,
  Search,
  Compass,
  Film,
  Heart,
  PlusSquare,
  MessageCircle,
  Menu,
  CircleUserRound as Avatar,
} from "lucide-react";

export const BottomNav = () => {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Compass, label: "Explore" },
    { icon: Film, label: "Reels" },
    { icon: PlusSquare, label: "Create" },
    { icon: MessageCircle, label: "Messages" },
    { icon: Avatar, label: "Profile" },
  ];

  return (
    
    <div className="flex justify-around items-center p-2">
      {menuItems.map((item, index) => (
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
