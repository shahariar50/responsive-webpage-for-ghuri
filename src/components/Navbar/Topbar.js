import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div class="container topbar">
      <div className="row justify-item-between">
        <div class="col">
          <Link className="navbar-brand text-body" to="#">
            Curve
          </Link>
        </div>
        <div class="col d-inline-flex">
          <form class="form-inline my-2 my-lg-0 ml-auto">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="keywords here..."
              aria-label="Search"
            />
            <button class="btn my-2 my-sm-0 btn-link p-0" type="submit">
              <FontAwesomeIcon className="text-secondary" icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
