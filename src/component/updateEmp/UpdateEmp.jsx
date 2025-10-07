import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import Navbar from "../navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const { updateEmployee } = CRUD_OP;

export default function UpdateEmp() {
  const { state } = useLocation();
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

  useEffect(() => {
    if (state) {
      setFormData({ ...state });
    }
  }, [state]);

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
      await updateEmployee(state.id, formData);
      setMessage({ error: false, msg: "Employee updated successfully!" });
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setMessage({ error: true, msg: "Error updating employee." });
    }
  };

  return (
    <div className="updateEmp">
      <Navbar />
      {message?.msg && (
        <div
          className={`alert ${message?.error ? "alert-danger" : "alert-success"}`}
          style={{ margin: "1rem" }}
        >
          {message?.msg}
        </div>
      )}
      <div className="container mt-3">
        <form className="p-4 bg-light rounded" onSubmit={handleSubmit}>
          <h3>Update Employee</h3>
          {["name", "email", "phone", "age", "address", "dept", "empType", "salary"].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label text-capitalize">{field}</label>
              <input
                type={field === "salary" || field === "age" ? "number" : "text"}
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">Update Employee</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
