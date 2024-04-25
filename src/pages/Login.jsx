import { Link,Form,redirect,useNavigate } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import {FormRow,Logo, SubmitBtn} from "../components";
import {toast} from "react-toastify";
import CustomFetch from "../utils/CustomFetch";


export const action=(queryClient)=>async({request})=>{
    const formData=await request.formData();
    const data=Object.fromEntries(formData);
    try {
       await CustomFetch.post("/auth/login",data);
       queryClient.invalidateQueries();
       toast.success("Login Sucessfully");
       return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }

}

const Login = () => {
  const navigate=useNavigate();

const loginDemo=async()=>{
  const demouser={
    email: 'test@test.com',
    password: 'secret123',
  };
  try {
     await CustomFetch.get("/auth/login",demouser);
     toast.success("check it out");
     navigate("/dashboard");
     
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
          <FormRow
            type="email"
            label="email"
            labelText="email"
            name="email"
          />
          <FormRow
            type="password"
            label="password"
            labelText="Password"
            name="password"
          />
       <SubmitBtn/>
        <button type="submit" className="btn btn-block" onClick={loginDemo}>
         Explore the App
        </button>
        <p>
          Not a Member ?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login
