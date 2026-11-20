
import React from "react";
export default function Home({ user }) {
  return (
    <section className="card">
      <h1>Welcome to Home Page</h1>
      <p>
        This is a simple React application using React Router and Firebase Authentication.
      </p>

      {user ? (
        <p className="success">You are logged in as: {user.email}</p>
      ) : (
        <p>Please login or register to access protected pages.</p>
      )}
    </section>
  );
}
