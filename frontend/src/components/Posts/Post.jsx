import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

export const Post = ({ post }) => {
  const [comment, setComment] = useState(""); // State for input field
  const [comments, setComments] = useState(post.comments || []); // Store comments

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return; // Prevent empty comments
    setComments([...comments, { user: "You", text: comment }]); // Add new comment
    setComment(""); // Clear input field
  };

  return (
    <div className="rounded-lg p-4 mb-4 bg-white">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.user.profilePic}
          alt={post.user.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{post.user.username}</p>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      {post.media && (
        <div className="w-full max-h-[500px] overflow-hidden rounded-md">
          <img
            src={post.media}
            alt="Post Media"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center mt-2 px-2">
        <div className="flex gap-4">
          <Heart className="cursor-pointer hover:text-red-500" />
          <MessageCircle className="cursor-pointer" />
          <Send className="cursor-pointer" />
        </div>
        <Bookmark className="cursor-pointer" />
      </div>

      {/* Likes Count */}
      <p className="text-sm font-semibold mt-1 px-2">{post.likes} likes</p>

      {/* Caption */}
      <p className="text-sm px-2">
        <span className="font-semibold">{post.user.username}</span>{" "}
        {post.caption}
      </p>

      {/* Comments Preview */}
      {comments.length > 0 && (
        <div className="px-2 mt-2">
          {comments.slice(-2).map((c, index) => (
            <p key={index} className="text-xs">
              <span className="font-semibold">{c.user}</span> {c.text}
            </p>
          ))}
          <p className="text-xs text-gray-500 cursor-pointer">
            View all {comments.length} comments
          </p>
        </div>
      )}

      {/* Add Comment Section */}
      <form
        className="flex items-center gap-2 mt-2 px-2 pt-2"
        onSubmit={handleAddComment}
      >
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full text-sm outline-none bg-transparent"
        />
        <button
          type="submit"
          className="text-blue-500 text-sm font-semibold disabled:text-gray-400"
          disabled={!comment.trim()}
        >
          Post
        </button>
      </form>
    </div>
  );
};
