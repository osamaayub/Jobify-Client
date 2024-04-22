import { Link, useRouteError } from "react-router-dom";
import notfound from "../assets/images/not-found.svg";
import WrapperPage from "../assets/wrappers/ErrorPage";


const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <WrapperPage>
        <div>
          <img src={notfound} />
          <h3>Opps!!!....</h3>
          <p>page not found</p>
          <Link to="/dashboard">
            Back to home Page
          </Link>
        </div>
      </WrapperPage>
    )
  }
  return(
  <WrapperPage>
    <div>
      <h3>Search was not found</h3>
    </div>
  </WrapperPage>
  )
}

export default Error
