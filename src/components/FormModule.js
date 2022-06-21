import React from 'react';
import ReactDOM from 'react-dom';

export class FormModule extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { userInput: '' };
        
        this.handleUserInput = this.handleUserInput.bind(this);
    }
      
    handleUserInput(e) {
        this.setState({userInput: e.target.value});
    }

    render() {
        
      return (
        <div className="form">
            <p>Entre na lista para ser avisado no lançamento do curso</p>
            <input type="text" placeholder="Nome" value={this.state.userInput} onChange={this.handleUserInput} />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Whatsapp (Opcional)" />
            <input type="submit" value="Entrar na lista" className="submit" />
        </div>
      )
    }
}