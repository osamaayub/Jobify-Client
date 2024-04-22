
import NavLinks from './NavLinks';
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from './Logo';
import useDashboardContext from "../pages/Dashboard";

const BigSidebar = () => {
  const { showsidebar} = useDashboardContext();
  
  return (
    <Wrapper>
    <div className={showsidebar?"show-sidebar":"sidebar-container show-sidebar"}>
    <div className='content'>
        <header>
          <Logo/>
        </header>
        <NavLinks isBigSidebar/>
    </div>
    </div>
    </Wrapper>
  )
}

export default BigSidebar;


