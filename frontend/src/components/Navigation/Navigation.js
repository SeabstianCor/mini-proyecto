import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>Landing</button>
            </Link>
          </li>

          <li>
            <Link to="/signup">
              <button>SignUp</button>
            </Link>
          </li>

          <li>
            <Link to="/signin">
              <button>SignIn</button>
            </Link>
          </li>

          <li>
            <Link to="/product">
              <button>Product</button>
            </Link>
          </li>

          <li>
            <Link to="/home">
              <button>Home</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
