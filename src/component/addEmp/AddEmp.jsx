import { useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

export default function AddEmp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    dept: "",
    empType: "",
    salary: "",
  });
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, age, address, dept, empType, salary } = formData;
    if (!name || !email || !phone || !age || !address || !dept || !empType || !salary) {
      setMessage({ error: true, msg: "All fields are mandatory." });
      return;
    }
    try {
      await CRUD_OP.addEmployee(formData);
      setMessage({ error: false, msg: "Employee added successfully!" });
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setMessage({ error: true, msg: "Error adding employee." });
    }
  };

  return (
    <div
      className="addEmp"
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {message?.msg && (
        <div
          className={`alert ${message?.error ? "alert-danger" : "alert-success"}`}
          style={{
            width: "90%",
            maxWidth: "500px",
            margin: "1rem auto",
          }}
        >
          {message?.msg}
        </div>
      )}

      <div className="container d-flex justify-content-center align-items-center flex-grow-1">
        <form
          className="p-4 rounded"
          style={{
            maxWidth: "500px",
            width: "100%",
            backgroundColor: "transparent", // completely transparent
            color: "white",
            textAlign: "center",
          }}
          onSubmit={handleSubmit}
        >
          <h3 className="mb-4">Add New Employee</h3>

          {[
            "name",
            "email",
            "phone",
            "age",
            "address",
            "dept",
            "empType",
            "salary",
          ].map((field) => (
            <div className="mb-3 d-flex align-items-center" key={field}>
              <label
                className="form-label text-capitalize"
                style={{ width: "100px", marginBottom: 0 }}
              >
                {field}
              </label>
              <input
                type={field === "salary" || field === "age" ? "number" : "text"}
                className="form-control"
                name={field}
                placeholder={`Enter ${field}`}
                value={formData[field]}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)", // optional: light transparent input background
                  color: "white",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn btn-light w-100 text-primary fw-bold"
            style={{
              borderRadius: "20px",
              backgroundColor: "white",
              color: "black",
              fontSize: "15px",
              padding: "6px 20px",
              minWidth: "120px",
              
            }}
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}