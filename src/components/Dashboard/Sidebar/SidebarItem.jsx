import { NavLink } from "react-router-dom";
import { MdOutlineManageSearch, MdAddPhotoAlternate, MdEqualizer, MdManageHistory, MdOutlineReviews } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { useTheme } from "../../../lib/ThemeProvider";

//* Helper function to get class names for NavLink
const getNavLinkClasses = (isActive, themeMode) => {
  const baseClasses = "flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform";
  const hoverClasses = "hover:bg-gray-300 hover:text-gray-700";
  const activeClasses = isActive ? "bg-gray-300" : "";
  const themeClasses = themeMode === "dark" ? "text-gray-100 bg-[#1D232A]" : "text-gray-800";

  return `${baseClasses} ${hoverClasses} ${themeClasses} ${activeClasses}`;
};

const SidebarItem = () => {
  const { theme } = useTheme(); //* For using light and dark themes

  return (
    <nav className={`${theme.mode === "dark" ? "text-gray-100 bg-[#1D232A]" : "text-gray-800 bg-gray-100"}`}>
      <NavLink
        to="add-project"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <MdOutlineManageSearch className="w-5 h-5" />
        <span className="mx-4 font-medium">Add Project</span>
      </NavLink>
      <NavLink
        to="manage-projects"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <GrProjects className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Project</span>
      </NavLink>
      <NavLink
        to="manage-skills"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <GiSkills className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Skills</span>
      </NavLink>
      <NavLink
        to="manage-qualifications"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <MdEqualizer className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Qualifications</span>
      </NavLink>
      <NavLink
        to="add-blog"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <MdAddPhotoAlternate className="w-5 h-5" />
        <span className="mx-4 font-medium">Add Blog</span>
      </NavLink>
      <NavLink
        to="manage-blogs"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <MdManageHistory className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Blogs</span>
      </NavLink>
      <NavLink
        to="manage-reviews"
        className={({ isActive }) => getNavLinkClasses(isActive, theme.mode)}
      >
        <MdOutlineReviews className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Reviews</span>
      </NavLink>
    </nav>
  );
};

export default SidebarItem;
