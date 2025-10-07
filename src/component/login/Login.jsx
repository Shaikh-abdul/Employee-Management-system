import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../services/authentication";
import { myContext } from "../../../contax/MyContext";

export default function Login() {
  const { setUser } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage({ error: true, msg: "Please fill all fields" });
      return;
    }
    try {
      const res = await loginUser(email, password);
      setUser(res);
      setMessage({ error: false, msg: "Login successful!" });
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
      setMessage({ error: true, msg: "Invalid credentials or error occurred" });
    }
  };

  return (
   <div
  className="login"
  style={{
    minHeight: "100vh",
    backgroundImage:
      'url("https://png.pngtree.com/thumb_back/fh260/background/20231102/pngtree-captivating-abstract-fog-texture-flowing-blue-smoke-background-image_13770252.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <div className="container d-flex justify-content-center align-items-center">
    <form
      className="p-4 rounded"
      style={{
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "transparent",
        color: "white",
        height: "auto",
        textAlign: "center",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)"
      }}
      onSubmit={handleSubmit}
    >
      {/* Logo inside form */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
        alt="Logo"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      <h3 className="mb-4">Login</h3>

      {message?.msg && (
        <div
          className={`alert ${
            message?.error ? "alert-danger" : "alert-success"
          }`}
        >
          {message?.msg}
        </div>
      )}

      <div className="mb-3 text-start">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          value={email}
           style={{
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "white"}}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 text-start">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
           style={{
              backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
              color: "white"}}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-light w-100 text-primary fw-bold" >
        Login
      </button>
      <p className="mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  </div>
</div>
  );
  }
