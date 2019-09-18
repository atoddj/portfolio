import React from 'react';
import './Recipe.css';

function Recipe(props) {
    const {title, img, directions} = props;
    const ingredients = props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
    ));
    return(
        <div className="recipe-card">
            <div className="recipe-card-image">
                <img src={img} alt={title} />
            </div>
            <div className="recipe-card-content">
                <h3 className="recipe-title">{title}</h3>
                <h4>Ingredients</h4>
                <ul>{ingredients}</ul>
                <h4>Directions</h4>
                <p>{directions}</p>
            </div>
        </div>
    )
}

export default Recipe;