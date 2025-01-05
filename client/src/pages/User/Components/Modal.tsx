import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export type User = {
  userName: string;
  fullName: string;
  profilePicture: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  users: User[];
  onAction: (user: User) => void;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  users,
  onAction,
}) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(search.toLowerCase()) ||
      user.fullName.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96">
        <div className="flex justify-between items-center mb-4 border-b">
          <div className="text-xl w-full py-2 text-center font-semibold">
            {title}
          </div>
          <button onClick={onClose} className="text-gray-500 p-2">
            <IoMdClose />
          </button>
        </div>

        <div className="p-3 pt-0">
          {/* Pencarian */}
          <div className="flex items-center mb-4">
            <FaSearch className="text-gray-400 bg-gray-100 w-10 h-10 p-2 rounded-md rounded-r-none" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none flex-1 bg-gray-100 p-2 rounded-md rounded-l-none"
            />
          </div>

          {/* Daftar Pengguna */}
          <div className="space-y-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.userName}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.profilePicture}
                      alt={user.fullName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{user.userName}</p>
                      <p className="text-gray-500 text-sm">{user.fullName}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onAction(user)}
                    className="bg-gray-100 text-gray-700 font-semibold px-2 py-1 rounded-md"
                  >
                    {title === "Followers" ? "Remove" : "Unfollow"}
                  </button>
                </div>
              ))
            ) : (
              <p>No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
