import { Form } from "formik";
import { useSelector } from "react-redux";

function IsAuth({ children }) {
  const isAuthenticated = useSelector((store) => store.isAuthenticated);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <h1>User Not Authenticate</h1>;
  }
}
export default IsAuth;
