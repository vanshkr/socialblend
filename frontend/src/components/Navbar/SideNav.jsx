import React from "react";
import Logo from "../../assets/Logo";
import { Menu } from "lucide-react";
import { sideMenuItems } from "../../assets/constants";
import { useNavigate } from "react-router-dom";
export const SideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white p-4 flex flex-col font-serif flex-shrink">
      <header className="mb-6">
        <h1
          className="text-2xl font-semibold font-[cursive] hidden xl:block "
          onClick={() => navigate("/")}
        >
          SocialBlend
        </h1>
        <Logo className=" block xl:hidden " />
      </header>
      <nav className="flex flex-col flex-grow justify-between ">
        <div>
          {sideMenuItems.map((item, index) => (
            <button
              key={index}
              className="flex gap-4 w-full items-center justify-center xl:justify-start rounded-lg md:p-2 p-4 hover:bg-gray-100 cursor-pointer  my-2 "
              onClick={() => navigate(item?.link)}
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
};
