import { useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  //destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      setSubmitResult("Successful login");
      handleUpdateUser({ email: userEmail });
      //here is where we redirect user to bitcoin rates
      navigate("/bitcoin");
    }
  };

  if (currentUser.email)
    return (
      <div>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Use a controlled form input - value AND onChange */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>

        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
