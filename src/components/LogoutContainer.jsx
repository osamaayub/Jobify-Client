import { FaCircle,FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import useDashboardContext from "../pages/Dashboard";

const LogoutContainer = () => {
  const [showlogout,setShowLogout]=useState(false);
  const {user,logoutuser}=useDashboardContext();
  return (
    <Wrapper>
    <button type="button" onClick={()=>setShowLogout(!showlogout)} className="btn logout-btn">
   {user.avatar ?(
      <img
        src={user.avatar} 
        alt="avatar"
        className="img"
      />
    ):(<FaCircle/>
   )}
   {user?.name}
   <FaCaretDown/>
  </button>
  {console.log(user)}
  <div className={showlogout?"drop-down show-dropdown":"drop-down"}>
  <button type="button" className="dropdown-btn" onClick={logoutuser}>
   logout
  </button>

  </div>
  </Wrapper>
)}

export default LogoutContainer
