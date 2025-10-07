import { useEffect, useState } from "react";
import CRUD_OP from "../services/Employee.services";
import { useNavigate } from "react-router-dom";
import "./showEmp.css";

export default function ShowEmp() {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CRUD_OP.getEmployees();
        setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await CRUD_OP.deleteEmployee(id);
      setEmpList((prev) => prev.filter((emp) => emp.id !== id));
      alert("Employee deleted");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Employees List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {["#", "Name", "Email", "Phone", "Age", "Address", "Dept", "Type", "Salary", "Actions"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {empList.map((emp, i) => (
            <tr key={emp.id}>
              <td>{i + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.age}</td>
              <td>{emp.address}</td>
              <td>{emp.dept}</td>
              <td>{emp.empType}</td>
              <td>{emp.salary}</td>
              <td>
                <button className="btn btn-success btn-sm me-2"
                  onClick={() => navigate("/updateEmp", { state: emp })}
                >
                  Update
                </button>
                <button className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
