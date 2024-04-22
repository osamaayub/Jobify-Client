import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({icon,Jobtext}) => {
  return (
    <Wrapper>
    <div className="job-info">
    {icon}
      <div className="job-text">
        {Jobtext}
      </div>
    </div>
    </Wrapper>
  )
}

export default JobInfo
