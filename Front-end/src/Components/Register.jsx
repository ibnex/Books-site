import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function Register() {
  const [show, setShow] = useState("password");
  const passwordShow = () => {
    if (show == "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };
  const log = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await axios.post("http://localhost:8080/auth/register", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
    console.log(response);
    log("/login");
  };
  return (
    <>
      <div className=" h-[90vh] w-[99vw] flex justify-center items-center">
        <div className="bg-zinc-900 h-[80vh] w-[40vw] rounded-lg">
          <div className="flex p-3 justify-between">
            <div className="h-[75vh] w-[38vw] rounded-lg  px-7 py-2">
              <div className="text-white text-5xl text-start mt-1 font-mono mb-2">
                <h1>Create an account</h1>
              </div>
              <div className="text-white text-start mt-8">
                <p>
                  Already have an account ?
                  <Link className="underline text-blue-400" to="/login">
                    Login
                  </Link>
                </p>
              </div>

              <div
                className="flex justify-between
                    my-3"
              >
                <div>
                  <input
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg w-[100%]"
                  />
                </div>
                <br />

                <div className="relative">
                  <input
                    type={show}
                    id="pass2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-blue-100 text-white px-4 py-2 rounded-lg w-[100%]"
                  />
                  <span
                    onClick={passwordShow}
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
                  <button onClick={handleRegister}>create account</button>
                </div>
              </div>
              <div>
                <p className="text-white text-center"> Or register with</p>
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
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{email}</p>
      <p>{password}</p>
    </>
  );
}

export default Register;
