
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';
import {useAllJobsContext} from "../pages/AllJob";

const JobsContainer = () => {
  const {data}=useAllJobsContext();
  const{jobs,totalJobs,numOfPages}=data;
   return jobs.length===0 ?(
   <Wrapper>
    <h2>No Jobs Available</h2>
   </Wrapper>
  ):(
    <Wrapper>
      <h5>{totalJobs} job{jobs.length>1 && 's'}
      found
      </h5>
      <div className="jobs">
        {jobs.map((item)=>{
         return <Job key={jobs._id} {...item}/>
        })}
      </div>
      {numOfPages>1} && <PageBtnContainer/>
    </Wrapper>
  )
  
}

export default JobsContainer
