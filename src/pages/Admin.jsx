
import CustomFetch from '../utils/CustomFetch';
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from "react-router-dom";
import {StatItem} from "../components";


export const loader = async () => {
  try {
    const response = await CustomFetch.get("users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not Authorized");
    return redirect("/dashboard");
  }
}

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title="current users"
        color="#e9b949"
        bcg="#fcef7"
        count={users}
        icon=<FaSuitcaseRolling />
      />
      <StatItem
        title="total Jobs"
        color="#674acb"
        bcg="#e0e8f9"
        count={jobs}
        icon=<FaCalendarCheck />
      />
    </Wrapper>
  )
}

export default Admin
