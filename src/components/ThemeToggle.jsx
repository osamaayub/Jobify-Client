import {BsFillSunFill,BsFillMoonFill} from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import useDasboardContext from "../pages/Dashboard";


const ThemeToggle = () => {
  const { isdarktheme, toggleDarktheme }=useDasboardContext();
  return (
    <Wrapper onClick={toggleDarktheme}>
    {isdarktheme? (
        <BsFillSunFill/>
      ):
      <BsFillMoonFill/>
    }
    </Wrapper>
  )
}

export default ThemeToggle
