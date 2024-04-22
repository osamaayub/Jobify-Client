import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createContext,useContext } from 'react';
import CustomFetch from '../utils/CustomFetch';
import {useLoaderData} from "react-router-dom";
import { JobsContainer,SearchContainer } from '../components';


const allJobsQuery=(params)=>{
  const{search,jobstatus,jobtype,sort}=params;
  return{
    querykey:[
      'jobs',
      search ?? '',
      jobstatus ?? 'all',
      jobtype ?? 'all',
      sort?? 'newest',
      page?? 1
    ]
    ,
    queryFn:async()=>{
      const {data}= await CustomFetch.get("/jobs",{
        params,
      });
      return data;
    }
  }

}
export const loader=
(queryClient)=>
async({request})=>{
  const  params=Object.entries([
    ...new URL(request.url).searchParams.entries(),
  ]);
await  queryClient.ensureQueryData(allJobsQuery(params));
return {searchvalues:{...params}};
}

const AllJobsContext=createContext();

const AllJob = () => {
  const {searchvalues}=useLoaderData();
  const {data}=useQuery(allJobsQuery(searchvalues));
  return (
    <AllJobsContext.Provider value={{data,searchvalues}}>
    <SearchContainer/>
    <JobsContainer/>
    </AllJobsContext.Provider>
  )
}
export const useAllJobsContext=()=>useContext(AllJobsContext);
export default AllJob
