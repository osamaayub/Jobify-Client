import useDashboardContext from "../pages/Dashboard";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";



const NavLinks = ({isBigSidebar}) => {
  const { showsidebar, toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar?null:toggleSidebar}
            className="nav-link"
            >
            <span>{icon}</span>
            {text}


          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
