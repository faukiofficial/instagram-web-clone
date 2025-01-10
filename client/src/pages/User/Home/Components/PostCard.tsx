import React, { useState } from "react";
import { format } from "timeago.js";
import { FaEllipsisH, FaHeart, FaComment, FaPaperPlane, FaBookmark, FaRegHeart } from "react-icons/fa";

interface Comment {
  id: number;
  username: string;
  text: string;
  likes: number;
}

interface PostCardProps {
  username: string;
  avatarUrl: string;
  createdAt: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({ username, avatarUrl, createdAt, imageUrl, caption, likes, comments }) => {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postComments, setPostComments] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setPostComments([
        ...postComments,
        { id: Date.now(), username: "you", text: newComment, likes: 0 },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-[500px] mx-auto bg-white border rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <img
            src={avatarUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{username}</p>
            <p className="text-xs text-gray-500">{format(createdAt)}</p>
          </div>
        </div>
        <FaEllipsisH className="text-gray-500 cursor-pointer" />
      </div>

      {/* Post Image */}
      <div className="w-full">
        <img
          src={imageUrl}
          alt="Post"
          className="w-full rounded-md object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <FaHeart className="text-gray-800 cursor-pointer hover:text-red-500" size={20} />
          <FaComment className="text-gray-800 cursor-pointer hover:text-blue-500" size={20} />
          <FaPaperPlane className="text-gray-800 cursor-pointer hover:text-blue-500" size={20} />
        </div>
        <FaBookmark className="text-gray-800 cursor-pointer hover:text-blue-500" size={20} />
      </div>

      {/* Likes */}
      <div className="px-4 text-sm font-semibold">{likes} Likes</div>

      {/* Caption */}
      <div className="px-4 py-2">
        <p className="text-sm">
          <span className="font-semibold">{username} </span>
          {showFullCaption ? caption : `${caption.slice(0, 100)} `}
          {caption.length > 100 && (
            <span
              onClick={() => setShowFullCaption(!showFullCaption)}
              className="text-blue-500 cursor-pointer"
            >
              {showFullCaption ? " Show less" : " ...See more"}
            </span>
          )}
        </p>
      </div>

      {/* Comments */}
      <div className="px-4 space-y-2">
        {postComments.map((comment) => (
          <div key={comment.id} className="flex justify-between items-start">
            <div>
              <p className="text-sm">
                <span className="font-semibold">{comment.username} </span>
                {comment.text}
              </p>
              <button className="text-xs text-gray-500 hover:underline" onClick={() => {
                setNewComment(`@${comment.username} `);
              }}>Reply</button>
            </div>
            <FaRegHeart className="text-gray-500 cursor-pointer hover:text-red-500" size={16} />
          </div>
        ))}
      </div>

      {/* Add Comment */}
      <div className="border-t px-4 py-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="text-blue-500 text-sm font-semibold disabled:text-gray-400"
            disabled={!newComment.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
