import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import useDashboardContext from "../pages/Dashboard";

const SmallSidebar = () => {
  const { showsidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className={showsidebar ? "sidebar-container sidebar-content" : "sidebar-container"}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar;

