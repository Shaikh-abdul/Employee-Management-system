import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { registerUser } from "../services/authentication";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName) {
      setMessage({ error: true, msg: "All fields are required" });
      return;
    }
    try {
      const res = await registerUser(email, password);
      console.log(res);
      setMessage({ error: false, msg: "Registration successful!" });
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setMessage({ error: true, msg: "Error registering user" });
    }
  };

  return (
    <div
      className="register"
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fh260/background/20231102/pngtree-captivating-abstract-fog-texture-flowing-blue-smoke-background-image_13770252.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Alert */}
      {message?.msg && (
        <div
          className={`alert ${
            message?.error ? "alert-danger" : "alert-success"
          }`}
          style={{
            width: "90%",
            maxWidth: "500px",
            marginBottom: "10px",
          }}
        >
          {message?.msg}
        </div>
      )}

      {/* Register Form */}
      <form
        className="p-4 rounded d-flex flex-column align-items-center"
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "transparent",
          color: "white",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
        onSubmit={handleSubmit}
      >
        {/* Logo inside form */}
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
            alt="Logo"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
            }}
          />
        </Link>

        <h3 className="mb-4 " style={{ color: "black" }} >Register</h3>

        <div className="mb-3 text-start w-100">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            value={firstName}
            style={{
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "black",
              // fontSize:"15px"
            }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-3 text-start w-100">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter last name"
            value={lastName}
            style={{
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "white",
            }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-3 text-start w-100">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            style={{
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "white",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 text-start w-100">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            style={{
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "white",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       <div className="d-flex justify-content-center">
  <button
    type="submit"
    className="btn fw-bold"
    style={{
      borderRadius: "20px",
      backgroundColor: "white",
      color: "black",
      fontSize: "15px",
      padding: "6px 20px",
      minWidth: "120px"
    }}
  >
    Register
  </button>
</div>

      </form>
    </div>
  );
}
