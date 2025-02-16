import React from "react";
import Logo from "../../assets/Logo";
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

export default function SideNav() {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Compass, label: "Explore" },
    { icon: Film, label: "Reels" },
    { icon: MessageCircle, label: "Messages" },
    { icon: Heart, label: "Notifications" },
    { icon: PlusSquare, label: "Create" },
    { icon: Avatar, label: "Profile" },
  ];

  return (
    <div className="h-full w-full bg-white p-4 flex flex-col font-serif flex-shrink">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold font-[cursive] hidden xl:block ">
          SocialBlend
        </h1>
        <Logo className=" block xl:hidden " />
      </header>
      <nav className="flex flex-col flex-grow justify-between ">
        <div>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex gap-4 w-full items-center justify-center xl:justify-start rounded-lg md:p-2 p-4 hover:bg-gray-100 cursor-pointer  my-2 "
            >
              <item.icon className="md:h-6 md:w-6 h-8 w-8" />
              <span className="font-medium hidden xl:block">{item.label}</span>
            </button>
          ))}
        </div>
        <div>
          <button className="flex w-full items-center justify-center xl:justify-start gap-4 rounded-lg md:p-2 p-4 cursor-pointer hover:bg-gray-100">
            <Menu className="md:h-6 md:w-6 h-8 w-8" />
            <span className="font-medium hidden xl:block">More</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
