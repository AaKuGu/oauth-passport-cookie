import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/logout`, "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Aadarsh App
        </Link>
      </span>
      {user ? (
        <>
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
              Logout
            </li>
          </ul>
        </>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
