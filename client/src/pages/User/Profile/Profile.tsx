import React, { useState } from "react";
import { user } from "../../../datas/user";
import Modal, { User } from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);

  const handleAction = (user: User, action: string) => {
    console.log(action, user.userName);
  };
  return (
    <div className="max-w-4xl mx-auto p-4 mt-5">
      <div className="flex items-start gap-4 700:gap-12 mb-8">
        {/* Foto Profile */}
        <div className="min-w-[100px] w-[100px] h-[100px] 700:min-w-[180px] 700:w-[180px] 700:h-[180px] rounded-full border overflow-hidden">
          <img
            src={user.avatarUrl}
            alt={user.fullName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Info Profile */}
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{user.userName}</h2>
              <p className="text-gray-500">{user.fullName}</p>
            </div>
            <button
              onClick={() => navigate(`/profile/edit/${user.userName}`)}
              className="bg-gray-200 text-gray-700 font-semibold px-2 py-1 rounded-md"
            >
              Edit Profile
            </button>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <span>
              <strong>{user.posts.length}</strong> Posts
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsFollowersModalOpen(true)}
            >
              <strong>{user.followers.length}</strong> Followers
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setIsFollowingModalOpen(true)}
            >
              <strong>{user.following.length}</strong> Following
            </span>
          </div>
          <p className="mt-4">{user.bio}</p>
        </div>
      </div>

      {/* Grid Postingan */}
      <div className="grid grid-cols-3 mt-20 border-t">
        {user.posts.map((post) => (
          <div
            key={post.id}
            className="aspect-square overflow-hidden border cursor-pointer"
          >
            <img
              src={post.imageUrl}
              alt="No image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Followers */}
      <Modal
        isOpen={isFollowersModalOpen}
        onClose={() => setIsFollowersModalOpen(false)}
        title="Followers"
        users={user.followers}
        onAction={(user) => handleAction(user, "Remove")}
      />

      {/* Modal Following */}
      <Modal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        title="Following"
        users={user.following}
        onAction={(user) => handleAction(user, "Unfollow")}
      />
    </div>
  );
};

export default Profile;
