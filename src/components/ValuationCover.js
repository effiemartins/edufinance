import React from 'react';
import companyLogo from './valuation.png';

export class ValuationCover extends React.Component {
    render() {
      return (
        <div className="cover">
            <img alt="logo" src={companyLogo} className='cover-img'></img>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
        </div>
      )
    }
}