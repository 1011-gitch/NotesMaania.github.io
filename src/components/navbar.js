import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light pl-6 pr-6">
      <Link className="navbar-brand font-weight-bold" to="/">
        NotesMania
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        // aria-controls="navbarSupportedContent"
        // aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active mr-4">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active mr-4">
            <Link className="nav-link" to="/create">
              MyNotes <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/update">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/delete">
              Delete
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
export default navbar;
