import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ProtectRouteAction } from "../Store";

function ThankYou() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    {
      setTimeout(() => {
        console.log(document.cookie);
        document.cookie = "token=;path=/;";
        navigate("/");
        dispatch(ProtectRouteAction.changeAuthState(false));
      }, 5000);
    }
  }, []);

  return (
    <>
      <h1 style={{ position: "absolute", left: "30%", top: "30%" }}>
        Thank You For Giving Us Review😊
      </h1>
      ;
    </>
  );
}
export default ThankYou;
