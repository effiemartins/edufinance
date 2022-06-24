import React from 'react';
import useCollapse from 'react-collapsed';
import Card from './Card';

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <h2 className="title">Todos os módulos</h2>
            <div className="icon">
                <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <Card 
                  title="Bem Vindo ao Curso" 
                  text="Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato."
                />
            </div>
            <div className="carrossel-function">
              <button>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.407 0.843018L0.750002 6.50002L6.407 12.157L7.114 11.45L2.164 6.50002L7.114 1.55002L6.407 0.843018Z" fill="#00F729"/>
                </svg>
              </button>
              <button>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.593 12.157L7.25 6.49998L1.593 0.842983L0.885999 1.54998L5.836 6.49998L0.886 11.45L1.593 12.157Z" fill="#00F729"/>
                </svg>
              </button>
            </div>
        </div>
    </div>
  );
}

export function CardsDashboard() {
  return (
    <Collapsible/>
  );
}