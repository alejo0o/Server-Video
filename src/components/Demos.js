/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Description, Global, Icon, Principal } from '../styles/Demos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const Demos = ({ title, description, demo }) => {
  return (
    <Principal>
      <Global>
        <h1>{title}</h1>
        <Icon>
          <a href=''>
            <FontAwesomeIcon icon={['fas', 'arrow-circle-down']} size='2x' />
            <p>Prueba</p>
          </a>
        </Icon>
      </Global>

      <Description>
        <p>{description}</p>
      </Description>
    </Principal>
  );
};

export default Demos;
