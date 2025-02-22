import { useState, useRef } from 'react';
import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt, AiOutlineBook } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const DUMMY_REELS = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4',
  fallbackUrl: 'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-medium.mp4',
  username: `user${i + 1}`,
  description: 'This is a reel description #trending #viral',
  likes: Math.floor(Math.random() * 10000),
  comments: Math.floor(Math.random() * 1000),
  userAvatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  music: 'Original Audio',
}));

export const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const videoRefs = useRef([]);
  const [videoErrors, setVideoErrors] = useState({});

  const handleScroll = (e) => {
    const container = e.target;
    const reelHeight = container.clientHeight;
    const scrollPosition = container.scrollTop;
    const newReelIndex = Math.round(scrollPosition / reelHeight);
    
    if (newReelIndex !== currentReel) {
      videoRefs.current[currentReel]?.pause();
      setCurrentReel(newReelIndex);
      videoRefs.current[newReelIndex]?.play().catch(() => {
        // Handle autoplay failure silently
      });
    }
  };

  const handleVideoError = (index, isMainSource) => {
    if (isMainSource) {
      // If main source fails, try fallback
      setVideoErrors(prev => ({...prev, [index]: true}));
    }
  };

  return (
    <div className="w-full md:max-w-[550px] mx-auto pb-16 md:pb-0">
      <div 
        className="h-[calc(100vh-4rem)] md:h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
        onScroll={handleScroll}
      >
        {DUMMY_REELS.map((reel, index) => (
          <div 
            key={reel.id}
            className="h-[calc(100vh-4rem)] md:h-screen snap-start relative bg-black"
          >
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full h-full object-contain"
              loop
              playsInline
              muted={false}
              controls={false}
              autoPlay={index === 0}
              onError={() => handleVideoError(index, !videoErrors[index])}
              onClick={(e) => {
                if (e.target.paused) {
                  e.target.play().catch(() => {
                    // Handle play failure silently
                  });
                } else {
                  e.target.pause();
                }
              }}
            >
              <source src={videoErrors[index] ? reel.fallbackUrl : reel.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Right side buttons */}
            <div className="absolute right-2 md:right-4 bottom-20 flex flex-col items-center space-y-4 md:space-y-6">
              <div className="flex flex-col items-center">
                <button className="text-white p-1 md:p-2">
                  <AiOutlineHeart size={24} className="md:w-7 md:h-7" />
                </button>
                <span className="text-white text-xs md:text-sm">{reel.likes}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <button className="text-white p-1 md:p-2">
                  <AiOutlineMessage size={24} className="md:w-7 md:h-7" />
                </button>
                <span className="text-white text-xs md:text-sm">{reel.comments}</span>
              </div>
              
              <button className="text-white p-1 md:p-2">
                <AiOutlineShareAlt size={24} className="md:w-7 md:h-7" />
              </button>
              
              <button className="text-white p-1 md:p-2">
                <AiOutlineBook size={24} className="md:w-7 md:h-7" />
              </button>
              
              <button className="text-white p-1 md:p-2">
                <BsThreeDots size={24} className="md:w-7 md:h-7" />
              </button>
            </div>
            
            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-10 md:right-12 p-3 md:p-4">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                <img 
                  src={reel.userAvatar} 
                  alt={reel.username}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
                <span className="text-white text-sm md:text-base font-semibold">{reel.username}</span>
                <button className="border border-white text-white px-3 md:px-4 py-0.5 md:py-1 rounded-md text-xs md:text-sm font-semibold">
                  Follow
                </button>
              </div>
              
              <p className="text-white text-sm md:text-base mb-2">{reel.description}</p>
              
              <div className="flex items-center space-x-2">
                <span className="text-white text-xs md:text-sm">🎵</span>
                <span className="text-white text-xs md:text-sm">{reel.music}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}