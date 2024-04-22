import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, Link, useSubmit } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from "../utils/Constants";
import { useAllJobsContext } from "../pages/AllJob";

const SearchContainer = () => {
  const { searchvalues } = useAllJobsContext();
  const { search, jobstatus, jobtype, sort } = searchvalues;
  const submit = useSubmit();


  const debounce = () => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onchange(form);
      }, 2000);

    }
  }
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="Search"
            labelText="Search"
            DefaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            labelText="Job Status"
            name="Job Status"
            list={['all', ...Object.values(JOB_STATUS)]}
            DefaultValue={jobstatus}
            onChange={debounce((e) => {
              submit(e.currentTarget.form);
            })}
          />
          <FormRowSelect
            labelText="Job Type"
            name="Job Type"
            list={['all', ...Object.values(JOB_TYPE)]}
            DefaultValue={jobtype}
            onChange={debounce((e) => {
              submit(e.currentTarget.form);
            })}
          />
          <FormRowSelect
            labelText="sort"
            name="sort"
            list={['all', ...Object.values(JOB_SORT_BY)]}
            DefaultValue={sort}
            onChange={debounce((e) => {
              submit(e.currentTarget.form);
            })}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn reset-btn">
            Reset Search values
          </Link>
        </div>
      </Form>

    </Wrapper>
  )
}

export default SearchContainer
