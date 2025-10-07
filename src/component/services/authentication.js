// src/component/services/authentication.js

import { app } from "../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const auth = getAuth(app);

// Register a user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registered user:", userCredential.user);
    return userCredential.user;
  } catch (err) {
    console.error("Error in registerUser:", err);
    throw err;
  }
};

// Login a user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in user:", userCredential.user);
    return userCredential.user;
  } catch (err) {
    console.error("Error in loginUser:", err);
    throw err;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Signed out successfully");
  } catch (err) {
    console.error("Error in logoutUser:", err);
    throw err;
  }
};
