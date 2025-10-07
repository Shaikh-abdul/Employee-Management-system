// src/component/services/Employee.services.js

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";

import { db } from "../../config/firebase-config";

// Get the collection reference
const employeeCollectionRef = collection(db, "Employees");

// Get all employees
const getEmployees = () => {
  return getDocs(employeeCollectionRef);
};

// Get a single employee
const getEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return getDoc(employeeDoc);
};

// Add an employee
const addEmployee = (newEmp) => {
  return addDoc(employeeCollectionRef, newEmp);
};

// Update an employee
const updateEmployee = async (id, employeeUpdates) => {
  try {
    const employeeDoc = doc(db, "Employees", id);
    await updateDoc(employeeDoc, employeeUpdates);
    console.log("Employee updated successfully!");
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

// Delete an employee
const deleteEmployee = (id) => {
  const employeeDoc = doc(db, "Employees", id);
  return deleteDoc(employeeDoc);
};

// Export all
const CRUD_OP = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee
};

export default CRUD_OP;
