import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { logoutUser } from "../services/authentication";
import { useContext } from "react";
import { myContext } from "../../../contax/MyContext";

export default function Navbar() {
  const { user, setUser } = useContext(myContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("User logged out successfully");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Some error occurred");
    }
  };

  return (
    <div className="navbar bg-info p-2 d-flex justify-content-between align-items-center">
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Employee Management System</h2>
      <div>
        <button className="btn btn-light mx-2" onClick={() => navigate("/addEmp")}>Add Employee</button>
        <button className="btn btn-light mx-2" onClick={() => navigate("/aboutUs")}>About Us</button>
        {user ? (
          <button className="btn btn-danger mx-2" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="btn btn-success mx-2" onClick={() => navigate("/login")}>Login</button>
            <button className="btn btn-primary mx-2" onClick={() => navigate("/register")}>Register</button>
          </>
        )}
      </div>
    </div>
  );
}
