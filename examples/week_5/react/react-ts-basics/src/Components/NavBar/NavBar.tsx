import { useContext } from "react";
import { Link } from "react-router-dom";
import type { User } from "../../App";
import { UserContext } from "../useEffect/context";

function NavBar() {

    const user: User | undefined = useContext(UserContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  ComponentOne
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lists">
                  Lists
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">
                  Props
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">
                  Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/poke">
                  PokeDemo
                </Link>
              </li>

              <li>
                Username: {user && user.name}
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
