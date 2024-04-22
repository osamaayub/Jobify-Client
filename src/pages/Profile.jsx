import { FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { Form, useOutletContext, redirect } from "react-router-dom";
import CustomFetch from "../utils/CustomFetch";
import Wrapper from "../assets/wrappers/DashboardFormPage";



export const action = (queryClient) => async ({ request }) => {

  const formData = request.formData();
  const file = formData.get('avatar');
  file && file.size > 5000 ? toast.error("Image Size too Large") : null;
  try {
    await CustomFetch.patch("/users/update-user", formData);
    queryClient.invalidateQueries(['user']);
    toast.success("file uploaded sucessfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }

};
const Profile = () => {
  const { user } = useOutletContext();
  const { name, location, email, lastName } = user;
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an Image of 0.5kb to upload
            </label>
            <input
              type="file"
              name="file"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow
            type="text"
            name="name"
            labelText="Name"
            DefaultValue={name}
          />
          <FormRow
            type="text"
            name="LastName"
            labelText="lastName"
            DefaultValue={lastName}
          />
          <FormRow
            type="email"
            name="email"
            labelText="email"
            DefaultValue={email}
          />
          <FormRow
            type="location"
            name="location"
            labelText="location"
            DefaultValue={location}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default Profile
