import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Profile({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <section className="card">
      <h1>Profile</h1>
      <p>This is a protected page.</p>

      <div className="info-box">
        <strong>Email:</strong>
        <br />
        {user?.email}
      </div>

      <button className="primary-btn" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}
