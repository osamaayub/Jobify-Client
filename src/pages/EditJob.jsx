import { FormRow, SubmitBtn, FormRowSelect } from "../components";
import CustomFetch from "../utils/CustomFetch";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { JOB_STATUS, JOB_TYPE } from "../utils/Constants";
import { useLoaderData, useParams, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";



const singleQuery = (id) => {
  return {
    querykey: ['job', id],
    queryFn: async () => {
      const { data } = await CustomFetch.get("/jobs/${id}");
      return data;
    }
  };

};

export const loader =
  (queryClient) =>
    async ({ params }) => {
      try {
        await queryClient.ensureQueryData(singleQuery(params.id));
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect("/dashboard/all-jobs");
      }
    }
export const action = (queryClient) => async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await CustomFetch.patch(`/jobs/${params.id}`, data);
    queryClient.invalidateQueries(['jobs']);
    toast.success("Job edited sucessfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const EditJob = () => {
  const { id } = useLoaderData();
  const {
    data: { job },
  } = useQuery(singleQuery(id));
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" labelText="Position"
            DefaultValue={job.position}
          />
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            DefaultValue={job.company}
          />
          <FormRowSelect
            labelText="Job Status"
            name="Job Status"
            DefaultValue={job.jobstatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="Job Type"
            name="Job Type"
            DefaultValue={job.jobtype}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>

      </Form>
    </Wrapper>
  )
};

export default EditJob
