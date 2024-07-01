import { NavLink } from "react-router-dom";
import { MdOutlineManageSearch, MdManageAccounts } from "react-icons/md";
import { useTheme } from "../../../lib/ThemeProvider";

const SidebarItem = () => {
  const { theme } = useTheme(); //* for using light and dark themes

  return (
    <nav
      className={`${
        theme.mode === "dark"
          ? "text-gray-100 bg-[#1D232A]"
          : "text-gray-800 bg-gray-100"
      }`}
    >
      <>
        {/* Menu Links */}
        <NavLink
          to="add-project"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              theme.mode === "dark"
                ? "text-gray-100 bg-[#1D232A]"
                : "text-gray-800"
            } ${isActive ? "bg-gray-300" : ""}`
          }
        >
          <MdOutlineManageSearch className="w-5 h-5" />

          <span className="mx-4 font-medium">Add Project</span>
        </NavLink>
        <NavLink
          to="manage-project"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              theme.mode === "dark"
                ? "text-gray-100 bg-[#1D232A]"
                : "text-gray-800"
            } ${isActive ? "bg-gray-300 " : ""}`
          }
        >
          <MdManageAccounts className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Project</span>
        </NavLink>
      </>
    </nav>
  );
};

export default SidebarItem;
