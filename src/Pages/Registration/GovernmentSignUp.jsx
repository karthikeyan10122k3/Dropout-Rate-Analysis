import { useState } from "react";
import SelectState from "./SelectState";
import LoginComponent from "./Login";
import "../../assets/CSS/Registration/govSignUp.css";

const GovernmentSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <>
      {!showLogin && (
        <div className="form signup">
          <p>Government Authority signin</p>
          <form action="#">
            <SelectState />
            <div className="input-field gov-input">
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-field gov-input">
              <input
                type="password"
                className="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="input-field gov-input">
              <input
                type="password"
                className="password"
                placeholder="Confirm a password"
                required
              />
            </div>
            <div className="input-field button">
              <a href="dash.html">Signup</a>
            </div>
            <div className="login-signup">
              <div className="text">Already a Member?</div>
              <div className="text signup-link">
                <a onClick={handleLoginClick} href="#">
                  Login Now
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
      {showLogin && <LoginComponent />}
    </>
  );
};

export default GovernmentSignUp;
