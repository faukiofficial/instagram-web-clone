import React from "react";
import { FaHome, FaCommentDots, FaPlusCircle, FaCompass } from "react-icons/fa";
import { user } from "../../datas/user";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface NavbarItem {
  id: number;
  icon: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

type Props = {
  setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarBottom: React.FC<Props> = ({ setIsCreateOpen })  => {
    const navigate = useNavigate();
  const navItems: NavbarItem[] = [
    { id: 1, icon: <FaHome className="w-6 h-6" />, to: "/" },
    { id: 2, icon: <FaCompass className="w-6 h-6" />, to: "/explore", onClick: () => navigate("/explore") },
    { id: 3, icon: <FaPlusCircle className="w-6 h-6" />, onClick: () => setIsCreateOpen(true) },
    { id: 4, icon: <FaCommentDots className="w-6 h-6" />, to: "/messages" },
  ];

  return (
    <div className="flex 700:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 justify-around items-center h-12 shadow-md">
      {navItems.map((item) => (
        <NavLink
          to={item.to || ""}
          key={item.id}
          className={({isActive}) => `flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-2 cursor-pointer transition ${isActive ? "text-black" : ""}`}
          onClick={item.onClick}
        >
          {item.icon}
        </NavLink>
      ))}
      <NavLink to={`/profile/${user.userName}`} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-black">
        <img
          src={user.avatarUrl}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </NavLink>
    </div>
  );
};

export default NavbarBottom;
