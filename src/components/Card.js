import React from 'react';

const classesData = [
    {
        "classTitle": "O que você precisa saber antes de começar",
        "classDuration": 2
    },
    {
        "classTitle": "Agenda do Curso",
        "classDuration": 2
    },
    {
        "classTitle": "Informações e Grupo",
        "classDuration": 1
    },
    {
        "classTitle": "Canais de suporte e contato",
        "classDuration": 1
    }
]

const sumall = classesData.map(item => item.classDuration).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);


function RenderingArrayOfObjects() {

    const listItems = classesData.map(
      (element) => {
          return (
            <li><div className="flex"><p>{element.classTitle}</p><p>{element.classDuration}min</p></div></li>
          )
      }
    )
    return (
        <div>
            {listItems}
        </div>
    )
  }
export default class Card extends React.Component {

  render() {
    return (
        <div className="card">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
            <div class="class-number">
                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.162507 10.9891L13.5241 0.54895L27.2974 11.3098L13.9342 21.7499L0.160965 10.9891H0.162507ZM24.8292 11.2805L13.5611 2.47758L2.66463 10.9891L13.9342 19.7936L24.8307 11.2805H24.8292ZM13.9358 26.3749L0.162507 15.6141L1.37734 14.666L13.8988 24.4479L26.0471 14.9558L27.2989 15.9348L13.9342 26.3749H13.9358Z" fill="#00F729"/>
                </svg>
                <p>{classesData.length} aulas <spam>- { sumall }min</spam></p>
            </div>
            <ol className="classes">
                <RenderingArrayOfObjects />
            </ol>
        </div>
    );
  }
}

  
