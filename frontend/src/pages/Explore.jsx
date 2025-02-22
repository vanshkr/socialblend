import { useState } from 'react';
import PostModal from '../components/PostModal';

const DUMMY_POSTS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/800/800?random=${i}`,
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
}));

export const Explore = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="max-w-[935px] mx-auto py-4 md:py-8 px-1 md:px-4 hide-scrollbar pb-20 md:pb-8">
      <div className="grid grid-cols-3 gap-[1px] md:gap-7">
        {DUMMY_POSTS.map((post) => (
          <div 
            key={post.id}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedPost(post)}
          >
            <img 
              src={post.imageUrl} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100 md:visible invisible">
              <div className="text-white flex space-x-6">
                <span className="flex items-center">
                  <span className="font-bold">{post.likes}</span>
                  <span className="ml-1">❤️</span>
                </span>
                <span className="flex items-center">
                  <span className="font-bold">{post.comments}</span>
                  <span className="ml-1">💬</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PostModal 
        post={selectedPost} 
        isOpen={!!selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </div>
  );
}