import React, { useState } from "react";

interface User {
  id: number;
  avatarUrl: string;
  username: string;
  fullName: string;
}

const users: User[] = [
  {
    id: 1,
    avatarUrl: "https://via.placeholder.com/40",
    username: "faukirijatul",
    fullName: "Fauki Rijatul",
  },
  {
    id: 2,
    avatarUrl: "https://via.placeholder.com/40",
    username: "janedoe",
    fullName: "Jane Doe",
  },
  {
    id: 3,
    avatarUrl: "https://via.placeholder.com/40",
    username: "johndoe",
    fullName: "John Doe",
  },
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<User[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = users.filter(
        (user) =>
          user.username.toLowerCase().includes(value) ||
          user.fullName.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="w-[400px] bg-gray-100 p-4 border-r-2 rounded-r-3xl h-screen fixed top-0 left-[65px]">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">{user.username}</p>
              <p className="text-sm text-gray-600">{user.fullName}</p>
            </div>
          </div>
        ))}
        {searchTerm && results.length === 0 && (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
