import { useState } from 'react';
import SelectState from "./SelectState";
import LoginComponent from "./Login";
import "../../assets/CSS/Registration/institutionSignUp.css";

const InstitutionSignUp = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <>
      {!showLogin && (
        <div className="form signup">
          <p>Institution Management signin</p>
          <form action="#">
            <div className="input-field">
              <input type="text" placeholder="Enter Institution name" required />
            </div>
            <SelectState />
            <div className="input-field">
              <input type="text" placeholder="Enter Institution email" required />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Enter Institution Code" required />
            </div>
            <div className="input-field">
              <input
                type="password"
                className="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                className="password"
                placeholder="Confirm a password"
                required
              />
            </div>
            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label htmlFor="termCon" className="text">
                  I accepted all terms and conditions
                </label>
              </div>
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

export default InstitutionSignUp;
