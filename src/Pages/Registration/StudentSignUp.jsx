import SelectState from "./SelectState";
import "../../assets/CSS/Registration/studentSignUp.css";

const StudentSignUp = () => {
  return (
    <div className="form signup">
      <p>Student signin</p>
      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter mobile number" required />
        </div>
        <SelectState />
        <div className="input-field">
          <input type="text" placeholder="Enter Institute name" required />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter Institute code" required />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter EMIS Number" required />
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
      </form>
    </div>
  );
};

export default StudentSignUp;
