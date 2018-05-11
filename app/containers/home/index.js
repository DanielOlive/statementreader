import React from "react";
import Uploader from "../../components/uploader";
import { Link } from "react-router-dom";

const Home = () => {
  const loc = { history: { location } };
  console.log(loc);
  return (
    <div>
      <hr />
      <h1>Home</h1>
      <hr />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
