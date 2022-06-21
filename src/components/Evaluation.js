import React from 'react';

function StarIcon(props) {
    const { fill = 'none' } = props;
    return (
        <svg viewBox="0 0 21 21" fill={fill} xmlns="http://www.w3.org/2000/svg">
         <path d="M12.4675 8.74725L10.375 3.8175L8.28025 8.75287L2.94437 9.21975L6.98987 12.7376L5.78612 17.9576L10.3817 15.1957L14.9717 17.9543L13.7669 12.7298L17.809 9.21638L12.4675 8.74837V8.74725ZM16.6649 20.2819L10.3817 16.5064L4.093 20.2852L5.74225 13.1415L0.205 8.32875L7.50737 7.69088L10.375 0.9375L13.2392 7.68525L20.5472 8.32538L15.0145 13.1348L16.6649 20.2819Z" />
        </svg>
    );
  }
  
  function RatingIcon(props) {
    const {
      index,
      rating,
      hoverRating,
      onMouseEnter,
      onMouseLeave,
      onSaveRating,
    } = props;
    const fill = React.useMemo(() => {
      if (hoverRating >= index) {
        return '#00F729';
      } else if (!hoverRating && rating >= index) {
        return '#00F729';
      }
      return 'none';
    }, [rating, hoverRating, index]);
    return (
        <div 
          className ="cursor-pointer"
          onMouseEnter={() => onMouseEnter(index)} 
          onMouseLeave={() => onMouseLeave()} 
          onClick={() => onSaveRating(index)}>
          <StarIcon fill={fill} />
        </div>
    )
  }
  export const StarRating = () => {
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const onMouseEnter = (index) => {
      setHoverRating(index);
    };
    const onMouseLeave = () => {
      setHoverRating(0);
    };
    const onSaveRating = (index) => {
      setRating(index);
    };
    return(
      <div className="evaluation">
        <p>Avaliação média do curso</p>
        <div className="box flex">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <RatingIcon 
                index={index} 
                rating={rating} 
                hoverRating={hoverRating} 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave} 
                onSaveRating={onSaveRating} />
            )
          })}
          </div>
          <p className="small">NPS: 83.6</p>
      </div>
    );
  }