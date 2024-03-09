import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="board-header">
      <div className="board-header">
        <span className="base"></span>
        <span className="login-group-header-text">BOARD</span>
      </div>
      <div className="button-board-group">
        <Link className="button-board-login" href="login">
          Log in
        </Link>
        <Link className="button-board-register" href="register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
