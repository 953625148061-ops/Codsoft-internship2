// client/src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <h1>Find Your Dream Job</h1>
      <p>Search jobs and apply easily</p>
      <input type="text" placeholder="Search jobs..." />
      <button>Search</button>
    </div>
  );
}