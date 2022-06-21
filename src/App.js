import React from "react";
import "./style.css";
import { Component } from "react";
import { Header } from './components/Header';
import { ValuationCover } from './components/ValuationCover';
import { FormModule } from './components/FormModule';
import { StarRating } from  './components/Evaluation';
import { IconsSection } from './components/IconsSection';

class App extends Component {
    
    render(){

        return(
            <div className="App">
                <Header />
                <ValuationCover />
                <FormModule />
                <StarRating />
                <IconsSection />
            </div>
        )
    }
}

export default App;