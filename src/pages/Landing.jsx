import { Link } from "react-router-dom";
import "../styles/Landing.css";



function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-screen">
        <div className="landing-content">

          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <Link to="/signup">
            <button className="create-btn">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="login-btn">
              Already Registered? Login
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Landing;