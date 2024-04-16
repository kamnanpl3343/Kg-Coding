import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 sideBar">
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className={"nav-link $"} aria-current="page">
              <svg className="bi pe-none me-2" width="46" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-post" className={"nav-link"}>
              <svg className="bi pe-none me-2" width="26" height="16">
                <use xlinkHref="#"></use>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
