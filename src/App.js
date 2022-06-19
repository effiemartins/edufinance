import React from "react";
import "./style.css";
import { Component } from "react";
import { Header } from './components/Header';

class App extends Component {
    
    render(){

        return(
            <div class="App">
                <Header />
            </div>
        )
    }
}

export default App;