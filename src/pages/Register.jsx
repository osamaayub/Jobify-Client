import { Link, Form, redirect} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import CustomFetch from "../utils/CustomFetch";
import { toast } from "react-toastify";


export const action = (queryClient) => async ({ request }) => {
  console.log("hello from the action ")
  const formdata = request.formData();
  // const data = Object.fromEntries(formdata);
  try {
    const result = await CustomFetch.post("/auth/register",formdata);
    console.log("Register API response: ", result)
    queryClient.invalidateQueries();
    toast.success("Registered Successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }


}


const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow
            type="text"
            name="FirstName"
          />
        </div>
        <FormRow
          type="text"
          label="LastName"
          labelText="LastName"

        />
        <FormRow
          type="location"
          label="location"
          labelText="Location"
        />
        <FormRow
          type="email"
          label="email"
          labelText="Email"
        />
        <FormRow
          type="password"
          label="password"
          labelText="Password"
        />
        <button className="btn btn-block">
          Submit

        </button>
        <p>
          Already a Member ?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register
