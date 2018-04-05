import React from 'react';

const footer = () => (
  <div className="footer-container">
    <div className="content-container">
      <div className="main-footer">
        <div className="topic-hero">
          <div className="arrange-about">
            <ul>
              <h1>About</h1>
              <li>
                <a href="https://github.com/Bennyz811/Velp">
                  <span className="about-link">About Velp</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="arrange-discover">
            <ul>
              <h1>Discover</h1>
              <li>
                <a href="https://www.bennyzhao.me/">
                  <span className="about-link">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Bennyz811">
                  <span className="about-link">Github</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="arrange-press">
            <ul>
              <h1>Press</h1>
              <li>
                <a href="https://www.linkedin.com/in/bennyz811/">
                  <span className="about-link">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-image">
          <img src={window.footer} />
        </div>
      </div>
    </div>
  </div>
);

export default footer;
