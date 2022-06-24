import React from "react";
import "./style.css";
import { Component } from "react";
import { Header } from './components/Header';
import { ValuationCover } from './components/ValuationCover';
import { FormModule } from './components/FormModule';
import { StarRating } from  './components/Evaluation';
import { IconsSection } from './components/IconsSection';
import { CardsDashboard } from './components/Collapsible';

class App extends Component {
    
    render(){

        return(
            <div className="App">
                <Header />
                <ValuationCover title="Domine o método mais usado no mundo para encontrar ações baratas." text="Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar bons negócios." />
                <FormModule />
                <StarRating />
                <IconsSection />
                <CardsDashboard />
            </div>
        )
    }
}

export default App;