// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutUs.css";
import Navbar from "../navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container about-us">
        <section className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="mb-4">About Employee Management System</h2>
              <p className="lead text-muted">
                The Employee Management System is a comprehensive web
                application designed to help organizations efficiently manage
                employee information. This system allows users to create, read,
                update, and delete employee records seamlessly.
              </p>
              <p className="text-muted">
                Built using <strong>React</strong> for the frontend and{" "}
                <strong>Firebase</strong> as the backend database, the
                application provides real-time data storage, user
                authentication, and secure access. With an intuitive interface,
                administrators can easily maintain employee profiles, track
                roles, manage salaries, and keep organizational data up to date.
              </p>
              <p className="text-muted">
                The project showcases practical implementation of{" "}
                <strong>CRUD operations</strong>, Firebase integration, and
                modern responsive design principles. It reflects my skills in
                front-end development, state management, and cloud-based data
                handling.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="img-fluid"
              />
              <h5>Bob Decker</h5>
              <p>CEO & Founder</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Team Member 2"
                className="img-fluid"
              />
              <h5>John Smith</h5>
              <p>Lead Developer</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="img/Abdul.jpg"
                alt="Team Member 3"
                className="img-fluid"
              />
              <h5>Mo Abdullah</h5>
              <p>Project Manager</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
