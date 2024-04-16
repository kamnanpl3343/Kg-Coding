import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleOnCLick = (itemVal) => {
    console.log(itemVal);
    if (itemVal === "Home") {
      setSelectedTab("Home");
    } else if (itemVal === "Create_Post") {
      setSelectedTab("Create_Post");
    }
  };
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 sideBar">
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              console.log("clicked");
              handleOnCLick("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link ${selectedTab === "Home" && "active"}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="46" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              handleOnCLick("Create_Post");
            }}
          >
            <a
              href="#"
              className={`nav-link ${
                selectedTab === "Create_Post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="26" height="16">
                <use xlinkHref="#"></use>
              </svg>
              Create Post
            </a>
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
