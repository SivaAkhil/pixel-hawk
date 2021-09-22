import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "300px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ margin: "10px auto" }}>404 ! Page Not Found</h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            width: "100px",
            color: "white",
            border: "solid white 2px",
            borderRadius: "10px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Go Home
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
