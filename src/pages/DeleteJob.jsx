import { toast } from 'react-toastify';
import CustomFetch from '../utils/CustomFetch';
import {redirect} from 'react-router-dom';


export const action=(queryClient)=>async({params})=>{
  try {
    await CustomFetch.delete("/jobs/${params.id}");
    queryClient.invalidateQueries(['jobs']);
    toast.success("job deleted Sucessfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/all-jobs");

}
