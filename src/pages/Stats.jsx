
import { ChartContainer, StatsContainer } from "../components";
import CustomFetch from "../utils/CustomFetch";
import { useQuery } from "@tanstack/react-query";



const statesQuery = {
  querykey: ['stats'],
  queryFn: async () => {
    const response = CustomFetch.get("/jobs/stats");
    return response.data;
  }
};


export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statesQuery);
  return null;

}

const Stats = () => {
  const { data } = useQuery(statesQuery);
  const { defaultStats, monthlyApplications } = data;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartContainer defaultStats={defaultStats} />
      )}
    </>
  )
}

export default Stats
