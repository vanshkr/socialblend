import React from "react";
import { Users, MessageCircle, Heart } from "lucide-react";

const Logo = ({ size = 20, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer gradient container */}
      <div className="relative rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[2px] group">
        {/* Inner container with glass effect */}
        <div className="rounded-xl bg-white/90 backdrop-blur-sm p-2 transition-all group-hover:bg-white/80">
          <div className="relative" style={{ width: size, height: size }}>
            {/* Main icon - People */}
            <Users
              size={size * 0.7}
              className="text-purple-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              strokeWidth={1}
            />
            {/* Chat bubble overlay */}
            <MessageCircle
              size={size * 0.4}
              className="text-pink-500 absolute -right-1 -top-1 transform rotate-12"
              strokeWidth={1}
            />
            {/* Heart element */}
            <Heart
              size={size * 0.3}
              className="text-orange-400 absolute -left-1 -bottom-1 transform -rotate-12"
              strokeWidth={1}
              fill="currentColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
