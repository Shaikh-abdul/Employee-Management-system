export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-4">
      <div className="container">
        <div className="row gy-4">
          {/* Box 1 */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="h5">Employee Management System</h3>
            <p className="small">
              Thank you for visiting my Employee Management System website.
            </p>
          </div>

          {/* Box 2 - Quick Links */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="h5">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-decoration-none text-light">
                  <i className="fas fa-chevron-circle-right me-2"></i>Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none text-light">
                  <i className="fas fa-chevron-circle-right me-2"></i>Add Employee
                </a>
              </li>
              <li>
                <a href="#skills" className="text-decoration-none text-light">
                  <i className="fas fa-chevron-circle-right me-2"></i>About Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-decoration-none text-light">
                  <i className="fas fa-chevron-circle-right me-2"></i>Login
                </a>
              </li>
               <li>
                <a href="#education" className="text-decoration-none text-light">
                  <i className="fas fa-chevron-circle-right me-2"></i>Register
                </a>
              </li>
            </ul>
          </div>

          {/* Box 3 - Contact Info */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="h5">Contact Info</h3>
            <p className="small mb-1">
              <i className="fas fa-phone me-2"></i>+91-7309608960
            </p>
            <p className="small mb-1">
              <i className="fas fa-envelope me-2"></i>abdullahsiddiqui707@gmail.com
            </p>
            <p className="small mb-2">
              <i className="fas fa-map-marked-alt me-2"></i>India
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-2 flex-wrap">
              <a href="https://www.linkedin.com/in/mo-abdullah-237900284" className="btn btn-light btn-sm rounded-circle">
                <i className="fab fa-linkedin text-dark"></i>
              </a>
              <a
                href="https://github.com/Shaikh-abdul"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm rounded-circle"
              >
                <i className="fab fa-github text-dark"></i>
              </a>
              <a href="#" className="btn btn-light btn-sm rounded-circle">
                <i className="fas fa-envelope text-dark"></i>
              </a>
              <a href="https://x.com/Abdul8960?t=6LqkwZ_5rm19Q43RHcW63Q&s=09" className="btn btn-light btn-sm rounded-circle">
                <i className="fab fa-twitter text-dark"></i>
              </a>
              <a href="http://t.me/davil_hacker" className="btn btn-light btn-sm rounded-circle">
                <i className="fab fa-telegram-plane text-dark"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} Employee Management System. Made with{" "}
          <i className="fas fa-heart text-danger"></i> by{" "}
          <a href="#" className="text-info text-decoration-none">
             Abdullah Shaikh
          </a>
        </p>
      </div>
    </footer>
  );
}
