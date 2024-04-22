import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import day from "dayjs";
import JobInfo from "./JobInfo";



const Job = ({ _id, position, company, Joblocation, JobType, createdAt, jobStatus }) => {
  const date = day(createdAt).format('MMM ,Do,YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">
          {company.charAt(0)}
          <div className="info">
            <h5>{position}</h5>
            <p>{company}</p>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={FaLocationArrow} text="Job Location" />
          <JobInfo icon={FaBriefcase} text="Job Type" />
          <JobInfo icon={FaCalendarAlt} text="date" />
          <div className={`status ${jobStatus}`}>
            {jobStatus}
          </div>
          <footer className="actions">
            <Link to={`../edit-job/${_id}`} className="btn edit-btn">
              EDIT
            </Link>
            <Form method="post" action={`../delete-job/${_id}`}>
              <button type="submit" className="btn delete-btn">DELETE</button>
            </Form>

          </footer>
        </div>

      </div>
    </Wrapper>
  )
}

export default Job
