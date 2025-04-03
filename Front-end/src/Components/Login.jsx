import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function Login({ ChangeLogin }) {
  const navi = useNavigate();
  const [show, setShow] = useState("password");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // const em=document.getElementById("email")
  // const pas=document.getElementById("pass")
  const showPass = () => {
    if (show == "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };

  const handleLogin = async () => {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email: Email,
      password: Password,
    });

    if (Email === "ibne@gmail.com" && Password === "ibneahad") {
      ChangeLogin();
      navi("/add");
    } else {
      ChangeLogin();
      navi("/");
    }

    console.log(response);
  };
  return (
    <>
      <div className=" h-[90vh] w-[99vw] flex justify-center items-center">
        <div className="bg-zinc-900 h-[80vh] w-[40vw] rounded-lg">
          <div className="flex p-3 justify-between">
            <div className="h-[75vh] w-[38vw] rounded-lg  px-7 py-2">
              <div className="text-white text-5xl text-start mt-1 font-mono mb-2">
                <h1>Login page </h1>
              </div>
              <div className="text-white text-start mt-8">
                <p>
                  doesn't have a account
                  <Link className="underline text-blue-400" to="/register">
                    register
                  </Link>
                </p>
              </div>
              <div className="mt-3">
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg w-[100%]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />

                <div className="relative">
                  <input
                    type={show}
                    id="pass"
                    placeholder="Password"
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg w-[100%]"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={showPass}
                    className="text-white absolute top-3 right-3"
                  >
                    <FaEye />
                  </span>
                </div>

                <div className="text-white flex  mt-3 space-x-1">
                  <input type="checkbox" />
                  <p>
                    I agree to the{" "}
                    <a className="text-blue-400 underline" href="*">
                      Terms&Conditions
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg px-4 py-3 w-[100%] mt-7 mb-2 text-white text-center text-3xl font-sans bg-purple-600">
                  <button onClick={handleLogin}>Login</button>
                </div>
              </div>
              <div>
                <p className="text-white text-center"> Or Login with</p>
                <div className="text-white my-2">
                  <hr />
                </div>
              </div>
              <div className="flex justify-between gap-3 py-1">
                <div className="border-2  border-white  w-[50%] rounded-lg">
                  <button className="flex items-center px-5 py-3 text-white gap-2">
                    {" "}
                    Google
                  </button>
                </div>
                <div className="border-2 border-white rounded-lg  w-[50%]">
                  <button className="px-5  text-center py-3 flex  items-center text-white gap-2">
                    Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>{Email}</p>
      <p>{Password}</p>
    </>
  );
}

export default Login;
