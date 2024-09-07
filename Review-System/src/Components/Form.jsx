import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ProtectRouteAction } from "../Store";
function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { name: "", email: "" },
    onSubmit: (values, action) => {
      fetch("http://localhost:2000/api/user", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(values),
        credentials: "include",
      }).then((res) => {
        if (res.status == 200) {
          dispatch(ProtectRouteAction.changeAuthState(true));
          navigate("/givereview");
          action.resetForm();
        } else {
          alert("You Are Already Given Your Review");
        }
      });
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="FormComponent">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            name="name"
            value={values.name.value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter A Email"
            name="email"
            value={values.name.value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Giv Review
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
