import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Topbar />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
