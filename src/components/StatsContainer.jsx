import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";


const StatsContainer = ({ defaultStats }) => {

  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f5e09",
      bcg: "#fef3c7"
    }, {
      title: "Interviews Scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9"
    }
    , {
      title: "jobs declined",
      count: defaultStats.declined || 0,
      icon: <FaBug />,
      color: "#D66A6A",
      bcg: "#ffeeee"
    }
  ];

  return (
    <Wrapper>
      {stats.map((stats) => {
        return <StatItem key={stats.title} {...stats} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
