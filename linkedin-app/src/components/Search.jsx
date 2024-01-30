import React, { useState, useEffect } from "react";
import { Form, ListGroupItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

const SearchComponent = ({ searchUs, setsearchUs, userData }) => {
  const location = useLocation();

  useEffect(() => {
    return () => {
      setsearchUs("");
    };
  }, [location.pathname, setsearchUs]);

  const filteredUsers = userData
    .filter((user) => {
      return searchUs.startsWith("@")
        ? user.username.toLowerCase().includes(searchUs.toLowerCase().substring(1))
        : user.name.toLowerCase().includes(searchUs.toLowerCase()) ||
            user.surname.toLowerCase().includes(searchUs.toLowerCase());
    })
    .slice(0, 10);

  return (
    <Form
      className="d-flex d-none d-lg-inline position-relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchUs}
        onChange={(e) => setsearchUs(e.target.value)}
      />
      <div className="position-absolute w-100 bg-white">
        {filteredUsers.map((user, i) => (
          <ListGroupItem
            key={i}
            className={` ${!searchUs ? "d-none" : "d-block"}`}
          >
            <Link
              className="nav-link d-flex justify-content-between"
              to={`/profile/${user._id}`}
            >
              <div className="p-1 w-100 d-flex align-items-center">
                <Search className="me-3" />
                <p
                  style={{ fontSize: "1rem" }}
                  className="flex-grow-1 mb-0 ms-1 text-truncate text-start"
                >
                  {searchUs ? user.name : ""} {searchUs ? user.surname : ""}
                  <br />
                  <strong> @{searchUs ? user.username : ""} </strong>{" "}
                </p>
                <img
                  className="ms-1"
                  src={user.image}
                  alt="user"
                  width="25px"
                  height="25px"
                />
              </div>
            </Link>
          </ListGroupItem>
        ))}
      </div>
    </Form>
  );
};

export default SearchComponent;
