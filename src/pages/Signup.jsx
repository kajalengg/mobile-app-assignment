import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <div className="signup-screen">
        <div className="signup-content">

          <h1>
            Create your <br />
            PopX account
          </h1>

          <div className="input-group">
            <label>Full Name <span className="required">*</span></label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email Address <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password <span className="required">*</span></label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="radio-section">
            <p className="radio-title">
              Are you an Agency? <span className="required">*</span>
            </p>

            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button
            className="create-account-btn"
            onClick={handleSubmit}
          >
            Create Account
          </button>

        </div>
      </div>
    </div>
  );
}

export default Signup;