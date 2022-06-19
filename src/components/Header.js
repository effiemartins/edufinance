import React from 'react';
import { SVGLogo } from './SVGLogo'; 
import { SandwichIcon } from './SandwichIcon';

export class Header extends React.Component {
    render() {
      return (
        <header>
            <SVGLogo />
            <SandwichIcon />
        </header>
      );
    }
  }