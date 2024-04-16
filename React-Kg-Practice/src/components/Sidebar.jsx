import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const handleOnClick = (itemVal) => {
    if (itemVal === "Home") {
      setSelectedItem("Home");
    } else if (itemVal === "Create_Post") {
      setSelectedItem("Create_Post");
    }
  };
  return (
    <>
      <Form>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar">
          <Link
            to="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Sidebar</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" onClick={() => handleOnClick("Home")}>
              <Link
                to="/"
                className={`nav-link ${selectedItem === "Home" && "active"}`}
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => handleOnClick("Create_Post")}
            >
              <Link
                to="/create-post"
                className={`nav-link ${
                  selectedItem === "Create_Post" && "active"
                }`}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              to="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
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
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Sidebar;
