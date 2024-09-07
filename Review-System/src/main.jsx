import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/Form.jsx";
import Questions, { LoadQuestions } from "./Components/Questions.jsx";
import ThankYou from "./Components/ThankYou.jsx";
import store from "./Store/index.jsx";
import { Provider } from "react-redux";
import IsAuth from "./Components/isAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "/givereview",
        element: (
          <>
            <IsAuth>
              <Questions />
            </IsAuth>
          </>
        ),
        loader: LoadQuestions,
      },
      {
        path: "/thankyou",
        element: (
          <>
            <IsAuth>
              <ThankYou />
            </IsAuth>
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
