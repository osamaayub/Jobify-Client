import Wrapper from "../assets/wrappers/DashboardFormPage";
import {FormRow,SubmitBtn,FormRowSelect} from "../components";
import {Form,redirect} from "react-router-dom";
import {JOB_TYPE,JOB_STATUS} from "../utils/Constants";
import { toast } from 'react-toastify';
import CustomFetch from '../utils/CustomFetch';
import { useOutletContext } from "react-router-dom";

export const action=()=>{
  (queryClient)=>{
    async({request})=>{
      const formData=request.formData();
      const data=Object.fromEntries(formData);
      try{
      await  CustomFetch.post('/jobs',data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job Successfully added');
      return redirect('all-jobs');
      }
      catch(err){
         toast.error(err?.response?.data?.msg);
         return err;
      }
    }
  }
}
const AddJob = () => {
  const {user}=useOutletContext();
  {console.log(user)}
  return (
    <Wrapper>
    <Form method="post" className="form">
    <h4 className="form-title">Add Job</h4>
    <div className="form-center">
      <FormRow type="text" name="Position" labelText="Position"/>
      <FormRow type="text" name="Company" labelText="Company" />
          <FormRow type="location" name="Job Location" labelText="Job Location"
            defaultValue={user.location}
          />
      <FormRowSelect name="Job Status" labelText="Job Status"
      list={Object.values(JOB_STATUS)}
      defaultValue={JOB_STATUS.PENDING}
       />
      <FormRowSelect name="Job Type" labelText="Job Type" list={Object.values(JOB_TYPE)} 
        defaultValue={JOB_TYPE.FULL_TIME}
      />
    <SubmitBtn formBtn/>
    </div>
    </Form>
    </Wrapper>
  )
}

export default AddJob
