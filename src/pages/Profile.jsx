import "../styles/Profile.css";
import avatar from "../assets/av.jpg";
import { BsCameraFill } from "react-icons/bs";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <div className="mobile-screen">

        <div className="header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-card">

          <div className="profile-top">
            <div className="image-box">
              <img src={avatar} alt="profile" />

              <div className="camera-icon">
                <BsCameraFill size={10} />
              </div>
            </div>

            <div className="user-info">
              <h4>{user?.fullName || "Marry Doe"}</h4>
              <p>{user?.email || "marry@example.com"}</p>
            </div>
          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam.
          </p>

          <div className="dotted-line"></div>

          <div className="bottom-line"></div>

        </div>

      </div>
    </div>
  );
}

export default Profile;