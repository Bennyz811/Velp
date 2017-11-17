import React from 'react';

const footer = () => (
  <div className="footer-container">
      <div className="content-container">
        <div className="main-footer">
        <div className="topic-hero">
        <div className="arrange-about">
          <ul>
            <h1>About</h1>
            <li>About Velp</li>
          </ul>
        </div>
        <div className="arrange-discover">
          <ul>
            <h1>Discover</h1>
            <li>Benny Zhao</li>
          </ul>
        </div>
        <div className="arrange-press">
          <ul>
            <h1>Press</h1>
            <li>Press</li>
          </ul>
        </div>
      </div>
        <div className="footer-image">
          <img src={window.footer}/>
        </div>
      </div>
    </div>
  </div>
)

export default footer;
