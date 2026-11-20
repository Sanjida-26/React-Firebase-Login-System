
import React from "react";
export default function Dashboard({ user }) {
  return (
    <section className="card">
      <h1>Welcome to Dashboard</h1>
      <p>This is a protected page.</p>
      <div className="info-box">
        <strong>Logged-in user:</strong>
        <br />
        {user?.email}
      </div>
    </section>
  );
}
