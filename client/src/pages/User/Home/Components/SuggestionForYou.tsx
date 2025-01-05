import React from "react";
import { user } from "../../../../datas/user";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  username: string;
  fullName: string;
  avatarUrl: string;
}

interface SuggestionForYouProps {
  suggestedUsers: User[];
  onFollow: (username: string) => void;
}

const SuggestionForYou: React.FC<SuggestionForYouProps> = ({
  suggestedUsers,
  onFollow,
}) => {
    const navigate = useNavigate();
  return (
    <div className="max-w-[400px] mx-auto border rounded-md shadow-sm p-4 h-fit">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={user.avatarUrl}
          alt={user.userName}
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          onClick={() => navigate(`/profile/${user.userName}`)}
        />
        <div className="ml-3 flex flex-col">
          <span className="font-semibold text-sm cursor-pointer"  onClick={() => navigate(`/profile/${user.userName}`)}>{user.userName}</span>
          <span className="text-gray-500 text-sm">{user.fullName}</span>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-gray-700">Suggested for you</p>
        <p className="text-sm text-blue-500 cursor-pointer hover:underline">
          See All
        </p>
      </div>
      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={user.avatarUrl}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                onClick={() => navigate(`/${user.username}`)}
              />
              <div className="ml-3 flex flex-col">
                <span className="text-sm font-semibold cursor-pointer" onClick={() => navigate(`/${user.username}`)}>{user.username}</span>
                <span className="text-xs text-gray-500">{user.fullName}</span>
              </div>
            </div>
            <button
              onClick={() => onFollow(user.username)}
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 border-t pt-2">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Copyan Instagram
        </p>
      </div>
    </div>
  );
};

export default SuggestionForYou;
