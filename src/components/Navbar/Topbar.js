import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row justify-item-between">
          <div className="col">
            <Link className="navbar-brand text-body" to="#">
              Curve
            </Link>
          </div>
          <div className="col d-inline-flex">
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="keywords here..."
                aria-label="Search"
              />
              <button className="btn my-2 my-sm-0 btn-link p-0" type="submit">
                <FontAwesomeIcon className="text-secondary" icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
