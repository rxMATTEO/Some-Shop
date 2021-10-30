import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalLine from "../input/horizontal-line/HorizontalLine.jsx";
import "./footer.sass";

function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="footer__block content">
          <HorizontalLine />
          Бесплатный проект с открытым исходным кодом.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
