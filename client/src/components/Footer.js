import {
  FirstContainer,
  Footer,
  IconContainer,
  Line,
  Logo,
  SecondContainer,
} from '../styles/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

export default class extends React.Component {
  render() {
    return (
      <Footer>
        <FirstContainer className="firstContainer">
          <Logo>DIGEVO</Logo>
          <br />
          <p>Oficina central - Santiago de Chile </p>
          <a href="https://digevo.com/contacto/">contacto@digevo.com</a>
          <p className="mt-3">Empresa 3G Motion SpA </p>
        </FirstContainer>
        <Line />
        <SecondContainer>
          <p>© Copyright Digevo 2020 </p>
          <IconContainer>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/digevo/"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/DigevoGroup/"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
          </IconContainer>
        </SecondContainer>
      </Footer>
    );
  }
}
