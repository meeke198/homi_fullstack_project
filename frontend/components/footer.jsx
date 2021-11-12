import React from "react";


const Footer = () => {
  return (
    <div className="footer">
      <div className="web-footer">
        <div className="footer-section">
          <h2>Shop</h2>
          <a href="">Gift cards</a>
          <a href="">Sitemap</a>
          <a href="">Homi blogs</a>
        </div>
        <div className="footer-section">
          <h2>Sell</h2>
          <a href="">Sales on Homi</a>
          <a href="">Team</a>
          <a href="">Forum</a>
          <a href="">Forum</a>
          <a href="">Affiliates</a>
        </div>
        <div className="footer-section">
          <h2>About</h2>
          <a href="">Homi, Inc</a>
          <a href="">Policies</a>
          <a href="">Investors</a>
          <a href="">Careers</a>
          <a href="">Press</a>
          <a href="">Impact</a>
        </div>
        <div className="footer-section">
          <h2>Help</h2>
          <a href="">Help center</a>
          <a href="">Trust and Safety</a>
          <a href="">Privacy Settings</a>
        </div>
      </div>
      <div className="social-media-footer">
        <div className="social-media-container">
          <div>
            <a
              className="contact_github"
              href="https://github.com/meeke198"
              target="_blank"
            >
              <img
                className="contact-icon"
                src="https://homi-seeds.s3.us-east-2.amazonaws.com/github.png"
                alt="github-icon"
              />
            </a>
          </div>
          <div>
            <a
              className="contact_linkedin"
              href="https://www.linkedin.com/in/hien-nguyen-a7045b70/"
              target="_blank"
            >
              <img
                className="contact-icon"
                src="https://homi-seeds.s3.us-east-2.amazonaws.com/linkedIn.png"
                alt="linkedin-icon"
              />
            </a>
          </div>
          <div>
            <a
              className="contact_email"
              href="mailto:thuhiennguyen@email.com"
              target="_blank"
            >
              <img
                className="contact-icon"
                src="https://homi-seeds.s3.us-east-2.amazonaws.com/contact.png"
              />
            </a>
          </div>
        </div>
        <div>
          <p style={{ textAlign: "center", paddingTop: 20 }} id="developer">
            © 2021 Cloned and Designed by Hien Nguyen
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
