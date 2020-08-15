/* eslint-disable import/no-extraneous-dependencies */

import { Description, Global, Icon, Principal } from '../styles/Demos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(far);

const Demos = ({ title, description, demo }) => {
  return (
    <Principal>
      <Global>
        <h1>{title}</h1>
        <Icon>
          <a>
            <FontAwesomeIcon
              className="ic"
              icon={['far', 'arrow-alt-circle-down']}
            />
            Prueba
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
