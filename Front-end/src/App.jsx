import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import ItemDetails from "./Components/ItemDetails";
import UserProfile from "./Pages/UserProfile";
import { useState } from "react";
import Cartt from "./Pages/Cartt";
import AdminAdd from "./Components/AdminAdd";

// import AdminAdd from "./Components/AdminAdd"
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const ChangeLogin = () => {
    setIsLogin(!isLogin);
  };

  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <Home />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <ItemDetails />
        </>
      ),
      // element:<><Navbar isLogin={isLogin} ChangeLogin={ChangeLogin}/><ItemDetails/></>
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <Login ChangeLogin={ChangeLogin} />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <Register ChangeLogin={ChangeLogin} />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <UserProfile />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <Cartt />
        </>
      ),
    },
    {
      path: "/add",
      element: (
        <>
          <Navbar isLogin={isLogin} ChangeLogin={ChangeLogin} />
          <AdminAdd />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  );
}

export default App;
