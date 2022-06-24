import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export class FormModule extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { name: '' };

    }
      
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
      alert('A form was submitted: ' + JSON.stringify(this.state));
      fetch('http://localhost:3307/store-data', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
      e.preventDefault();
    }

    render() {
        
      return (
        <div className="form">
            <p>Entre na lista para ser avisado no lançamento do curso</p>
              <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Nome" name="name" value={this.state.value} onChange={this.handleChange} />
              <input type="text" placeholder="E-mail" name="email" value={this.state.value} onChange={this.handleChange} />
              <input type="text" placeholder="Whatsapp (Opcional)" name="whatsapp" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Entrar na lista" className="submit" />
            </form>
        </div>
      )
    }
}