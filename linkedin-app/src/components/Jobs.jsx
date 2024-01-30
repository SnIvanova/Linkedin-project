import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Briefcase, BuildingAdd } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [searchUs, setsearchUs] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const apiUrl = selectedCategory
      ? `https://strive-benchmark.herokuapp.com/api/jobs?category=${selectedCategory}&limit=10`
      : `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchUs}&limit=10`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data`);
        }
        return response.json();
      })
      .then((data1) => {
        setJobsData(data1);
      })
      .catch((error) => console.error(error));
  }, [searchUs, selectedCategory]);

  return (
    <>
      <Container>
        <div className="container-fluid p-1 p-md-5">
          <Form
            className="d-flex flex-column align-items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Search input */}
            <Form.Control
              type="search"
              placeholder="Search jobs"
              className="me-2 mb-4"
              aria-label="Search"
              value={searchUs}
              onChange={(e) => setsearchUs(e.target.value)}
              style={{ width: "100%" }}
            />

            {/* Category dropdown */}
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: "100%", maxWidth: "400px", margin: "10px 0" }}
            >
              <option value="">Select Category</option>
              <option value="writing">Writing</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
             
            </Form.Select>

            {/* Jobs list */}
            <Row className="g-2">
              {jobsData.data &&
                jobsData.data
                  .slice(0, 10)
                  .map((job, i) => (
                    <Col
                      key={i}
                      className={`col-12 col-md-4 col-lg-3`}
                    >
                      <Card id="card" className="h-100">
                        {/* Job details */}
                        <Card.Body className="d-flex justify-content-between flex-column">
                          <Card.Title>{job.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {job.category}
                          </Card.Subtitle>
                          <div className="d-flex align-items-center justify-content-between">
                            {/* Additional job details */}
                            <div>
                              {" "}
                              <Card.Text>{job.candidate_required_location}</Card.Text>
                              <Card.Text>
                                <span className="" style={{ fontSize: "12px" }}>
                                  Published at:
                                </span>{" "}
                                <br />
                                {job.publication_date.substring(0, 10)}
                              </Card.Text>
                            </div>
                            <div className="d-flex flex-column">
                              {/* Buttons */}
                              <button
                                className="btn addJob rounded-pill text-nowrap text-truncate mb-1 "
                                style={{
                                  fontSize: "16px",
                                  height: "40px",
                                  maxWidth: "143px",
                                }}
                              >
                                <BuildingAdd className=" pb-1" />
                                Apri annuncio
                              </button>
                              <Link to={`/Company/${job.company_name}`}>
                                <button
                                  className="btn addJob rounded-pill text-nowrap text-truncate  "
                                  style={{
                                    fontSize: "16px",
                                    height: "40px",
                                    maxWidth: "143px",
                                    width: "143px",
                                  }}
                                >
                                  <Briefcase className=" pb-1" />
                                  {job.company_name}
                                </button>
                              </Link>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Jobs;
