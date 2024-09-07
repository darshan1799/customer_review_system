import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
