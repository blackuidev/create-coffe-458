import React from "react";
import { useAppStore } from "@/lib/store";
import { Menu, Search, Bell } from "lucide-react";

const Header = () => {
  const { toggleSidebar } = useAppStore();
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          <Menu />
        </button>
        <div className="relative ml-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 border border-gray-600 rounded-md pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white relative">
          <Bell />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-600"></div>
      </div>
    </header>
  );
};

export default Header;
