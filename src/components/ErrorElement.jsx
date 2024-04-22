
import Wrapper from "../assets/wrappers/ErrorPage";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error=useRouteError();
  return (
    <Wrapper>
      <h4>{error.message}</h4>
    </Wrapper>
  )
}

export default ErrorElement
