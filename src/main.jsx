import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home.jsx";
import NewAriv from "./components/NewAriv";
import ItemDetail from "./components/ItemDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "item", element: <ItemDetail /> },
      { path: "brands", element: "brands" },
      { path: "new-arrivals", element: <NewAriv/> },
      { path: "on-sale", element: "on-sale" },
      { path: "men", element: "men" },
      { path: "women", element: "women" },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);
