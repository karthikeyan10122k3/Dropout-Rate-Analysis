import "../../assets/CSS/Registration/login.css";

const LoginComponent = ({ handleSignupClick }) => {
  return (
    <div className="form signup">
      <span className="title">Login</span>
      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-field">
          <input
            type="password"
            className="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">
              Remember me
            </label>
          </div>
          <div className="forgot-password">
            <a href="#" className="text">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="input-field button">
          <input type="button" value="Login" />
        </div>
      </form>
      <div className="login-signup">
        <span className="text">
          Not a member?
          <a href="#" className="text signup-link" onClick={handleSignupClick}>
            Signup Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginComponent;
