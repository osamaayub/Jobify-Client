import { IoBarChart } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";



  const links=[
    {
    text:"Add Jobs",
    path:".",
    "icon":<FaWpforms/>
    }
    ,{
      text:"All Jobs",
      path:"All Jobs",
      icon:<MdQueryStats/>
      }
      ,{
        text:"Stats",
        path:"Stats",
        icons:<IoBarChart/>
      }
      ,{
        text:"Profile",
        path:"Profile",
        icon:<ImProfile/>
      }
      ,{
        text:"Admin",
        path:"Admin",
        icon:<MdAdminPanelSettings/>
      }
];
 

export default links;
