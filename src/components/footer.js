import { Component } from "react";
import "../UI/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-auto col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h5 className="about-part_title">Head Of Department</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" />
                    </li>
                    <li>
                      <p>Mita Parekh  9874563258</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" col-md-auto col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h5>Feculty Cordinator</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>Apurva Mandalaywala - 986582145</p>
                    </li>
                    <li>
                      <p>Ashish Kharwar - 9874521458</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-auto col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h5>Student Cordinator</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>Aayush Vataliya - 9684525896</p>
                    </li>
                    <li>
                      <p>Divya Mashruwala - 9684525896</p>
                    </li>
                    <li>
                      <p>Kirtan Battiwala - 9684525896</p>
                    </li>
                    <li>
                      <p>Meet Vaghasiya - 9684525896</p>
                    </li>
         
                  </ul>
                </div>
              </div>

              <div className="col-md-auto col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h5>Developer</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>Alpesh Nikumbh - 9774563148</p>
                    </li>
                    <li>
                      <p>Kritik Jiyaviya - 9774563148</p>
                    </li>
                    <li>
                      <p>Shubham Jariwala - 9774563148</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-auto col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h5>Poster Designer</h5>
                  <ul className="list-unstyled">
                    <li>
                      <p>Aayush Vataliya - 9774563148</p>
                    </li>
                    <li>
                      <p>Divya Mashruwala - 9774563148</p>
                    </li>
                    <li>
                      <p>Kirtan Battiwala - 9774563148</p>
                    </li>
                    <li>
                      <p>Meet Vaghasiya - 9774563148</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  © Copyright 2018 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
