import React from "react";
import { useAppStore } from "@/lib/store";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Users", path: "/dashboard/users" },
  { icon: ShoppingCart, label: "Products", path: "/dashboard/products" },
  { icon: BarChart, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAppStore();
  const location = useLocation();

  return (
    <aside
      className={`flex flex-col bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700 h-[65px]">
        {isSidebarOpen && <h1 className="text-xl font-bold">Admin</h1>}
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center p-2 rounded-lg hover:bg-gray-700 ${
              location.pathname === item.path ? "bg-blue-600 text-white" : "text-gray-400"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-4">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
