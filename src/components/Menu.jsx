import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <bspace className="">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center px-4 col-md-3 mb-2 mb-md-0 text-dark text-decoration-none "
        >
          GNITC
        </Link>
        <Nav>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/theme" className="nav-link px-2 link-secondary">
                Themes
              </Link>
            </li>
          </ul>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 px-2">
            <li>
              <Link to="/about" className="nav-link px-2 link-secondary">
                About
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end me-4">
            <Link to="/">
              <button type="button" className="btn btn-outline-primary me-2">
                login
              </button>
            </Link>
          </div>
        </Nav>
      </header>
    </bspace>
  );
};

export default Menu;
