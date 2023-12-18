import React, { useRef, useState } from "react"
import "./usersign.css"
import google from "./Google__G__logo.svg.png"
import facebook from "./facebook-2021-logo-600x319.png"
import linkdn from "./apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"

const UserSign = () => {
  let listContainer = useRef(null)
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  })

  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  })

  const toggle = () => {
    listContainer.current?.classList.toggle("sign-in")
    listContainer.current?.classList.toggle("sign-up")
  }

  setTimeout(() => {
    listContainer.current?.classList?.add("sign-in")
  }, 200)

  const handleChange = (e) => {
    setUserSignUp((prevDoc) => ({
      ...prevDoc,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSignInChange = (e) => {
    setUserSignIn((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <div id="container" ref={listContainer} className="container">
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={userSignUp.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userSignUp.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userSignUp.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={userSignUp.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={userSignUp.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <button style={{ marginBottom: "10px" }}>Sign up</button>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={facebook}
                    alt=""
                    style={{ height: "25px", width: "47px" }}
                  />
                  <img
                    src={google}
                    alt=""
                    style={{ height: "25px", width: "25px" }}
                  />
                  <img
                    src={linkdn}
                    alt=""
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={() => toggle()} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={userSignIn.password}
                    onChange={handleSignInChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userSignIn.password}
                    onChange={handleSignInChange}
                  />
                </div>
                <button style={{ marginBottom: "10px" }}>Sign in</button>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={facebook}
                    alt=""
                    style={{ height: "25px", width: "47px" }}
                  />
                  <img
                    src={google}
                    alt=""
                    style={{ height: "25px", width: "25px" }}
                  />
                  <img
                    src={linkdn}
                    alt=""
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={() => toggle()} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>

        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>

          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSign
