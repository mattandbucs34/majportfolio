import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="contacts-container">
          <a href="https://www.linkedin.com/in/mattandbucs" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://twitter.com/matt_the_blue" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="https://github.com/mattandbucs34" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="mailto:mattandbucs@gmail.com" target="blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy;{(new Date().getFullYear())} JAM Productions</p>
        </div>

      </footer>
    </React.Fragment>
  );
};

export default Footer;