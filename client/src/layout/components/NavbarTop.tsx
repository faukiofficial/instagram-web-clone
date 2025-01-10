import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavbarTop: React.FC = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClearAll = () => {
    console.log("Clear all recent searches");
  };

  const handleRemoveItem = (item: string) => {
    console.log("Remove item:", item);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md 700:hidden fixed top-0 left-0 right-0">
      {/* Logo */}
      <h1
        className={`text-2xl font-bold text-gray-800 cursor-pointer`}
        onClick={() => navigate("/")}
      >
        Logo
      </h1>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          placeholder="Search"
          className="px-4 py-2 w-64 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        {isDropdownOpen && (
          <div className="absolute top-12 left-0 w-64 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <span className="text-gray-600 text-sm">Recent</span>
              <div className="flex gap-2">
                <button
                  onClick={handleClearAll}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Clear all
                </button>
                <span
                  className="text-gray-600 text-sm cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  ✕
                </span>
              </div>
            </div>
            <ul className="max-h-64 overflow-y-auto">
              {["rikky", "shintayeong", "erickthohir", "marselino"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://via.placeholder.com/40?text=${item[0]}`}
                        alt={item}
                        className="h-8 w-8 rounded-full mr-2"
                      />
                      <span>{item}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-gray-500 hover:text-gray-800"
                    >
                      ✕
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      <button className="text-gray-600 hover:text-gray-800">
        <span className="text-2xl"><FaBell size={20} /></span>
      </button>
    </div>
  );
};

export default NavbarTop;
