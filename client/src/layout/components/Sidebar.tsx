import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaBell,
  FaPlusCircle,
  FaBars,
  FaCommentDots,
} from "react-icons/fa";
import { user } from "../../datas/user";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Search from "../../pages/User/Components/Search";
import CreatePostModal from "./CreatePostModal";

type Props = {
  isCreateOpen: boolean;
  setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ isCreateOpen, setIsCreateOpen }) => {
  const navigate = useNavigate();

  const [isLabelShow, setIsLabelShow] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`hidden 600:flex flex-col justify-between h-screen ${
          isLabelShow ? "1600:w-80 1300:w-60 w-fit px-2" : "w-16 px-2"
        } py-6 border-r fixed`}
        onClick={() => {
          if (isSearchOpen) {
            setIsSearchOpen(false);
            setIsLabelShow(true);
          }
        }}
      >
        <div>
          <div className="mb-8">
            <h1
              className={`hidden 1300:flex text-2xl font-bold text-gray-800 cursor-pointer ${
                isLabelShow ? "pl-2" : "flex justify-center"
              }`}
              onClick={() => navigate("/")}
            >
              {isLabelShow ? "Logo" : <FaVideo size={30} />}
            </h1>
            <h1
              className={`block 1300:hidden text-2xl font-bold text-gray-800 cursor-pointer ${
                isLabelShow ? "pl-2" : "flex justify-center"
              }`}
              onClick={() => navigate("/")}
            >
              Lo
            </h1>
          </div>

          <div className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center ${
                  isLabelShow ? "" : "justify-center"
                } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              <span className="text-xl">
                <FaHome size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Home</span>}
            </NavLink>
            <div
              className={`flex items-center ${
                isLabelShow ? "" : "justify-center"
              } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition`}
              onClick={() => {
                setIsLabelShow(!isLabelShow);
                setIsSearchOpen(!isSearchOpen);
              }}
            >
              <span className="text-xl">
                <FaSearch size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Search</span>}
            </div>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `flex items-center ${
                  isLabelShow ? "" : "justify-center"
                } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              <span className="text-xl">
                <FaCompass size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Explore</span>}
            </NavLink>
            <NavLink
              to="/direct/inbox"
              className={({ isActive }) =>
                `flex items-center ${
                  isLabelShow ? "" : "justify-center"
                } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              <span className="text-xl">
                <FaCommentDots size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Messages</span>}
            </NavLink>
            <div
              className={`flex items-center ${
                isLabelShow ? "" : "justify-center"
              } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition`}
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <span className="text-xl">
                <FaBell size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Notifications</span>}
            </div>
            <div
              className={`flex items-center ${
                isLabelShow ? "" : "justify-center"
              } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition`}
              onClick={() => setIsCreateOpen(!isCreateOpen)}
            >
              <span className="text-xl">
                <FaPlusCircle size={26} />
              </span>
              {isLabelShow && <span className="text-lg hidden 1300:block">Create</span>}
            </div>
            <NavLink
              to={`/profile/${user.userName}`}
              className={({ isActive }) =>
                `flex items-center ${
                  isLabelShow ? "" : "justify-center"
                } space-x-3 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              <img
                src={user.avatarUrl}
                alt=""
                className="w-7 h-7 rounded-full"
              />
              {isLabelShow && <span className="text-lg hidden 1300:block">Profile</span>}
            </NavLink>
          </div>
        </div>

        <div
          className={`flex items-center ${
            isLabelShow ? "" : "justify-center"
          } space-x-4 text-gray-800 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition`}
          onClick={() => setIsMoreOpen(!isMoreOpen)}
        >
          <FaBars size={26} />
          {isLabelShow && <span className="text-lg hidden 1300:block">More</span>}
        </div>
      </div>
      {isSearchOpen && <Search />}

      {isCreateOpen && <CreatePostModal onClose={() => setIsCreateOpen(false)} />}
    </div>
  );
};

export default Sidebar;
