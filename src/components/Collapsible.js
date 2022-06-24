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
        </div>
    </div>
  );
}

export function CardsDashboard() {
  return (
    <Collapsible/>
  );
}