import React from 'react';
import Recipe from './Recipe';
import {PropTypes} from 'prop-types';
import './RecipeList.css';

function RecipeList() {
    const Recipes = [
            {
                title: 'Spaghetti',
                ingredients: ['flour', 'egg', 'water'],
                directions: ["Mix ingredients"],
                img: 'img/spaghetti.jpg'
            },
            {
                title: 'Beef Burgundy',
                ingredients: ['Beef chuck', 'onion', 'mushrooms', 'bacon', 'carrots', 'celery', 'tomato paste'],
                directions: ['Render bacon fat', 'bake all ingredients at 350F'],
                img: 'img/beef-burgundy.jpg'
            },
            {
                title: 'Brownies',
                ingredients: ['1/2 cup unsalted butter, melted','1 tablespoon cooking oil, (olive oil or coconut oil are fine)','1 1/8 cup superfine sugar, (caster sugar or white granulated sugar)*','2 large eggs','2 teaspoons almond extract','1/2 cup all purpose (or plain) flour','1/2 cup unsweetened cocoa powder','1/4 teaspoon salt'],
                directions: ['Preheat oven to 175°C | 350°F', 'Lightly grease an 8-inch square baking pan with cooking oil spray', 'Line with parchment paper (or baking paper); set aside', 'Combine melted butter, oil and sugar together in a medium-sized bowl. Whisk well for about a minute.', 'Add the eggs and vanilla; beat until lighter in colour (another minute)', 'Sift in flour, cocoa powder and salt', 'Gently fold the dry ingredients into the wet ingredients until JUST combined (do NOT over beat as doing so well affect the texture of your brownies)', 'Pour batter into prepared pan, smoothing the top out evenly.', 'Bake for 20-25 minutes, or until the center of the brownies in the pan no longer jiggles and is just set to the touch (the brownies will keep baking in the hot pan out of the oven). If testing with a toothpick, the toothpick should come out dirty for fudge-textured brownies. Remove and allow to cool to room temperature before slicing into 16 brownies.'],
                img: 'img/brownies.jpg'
            }
        ]
    const recipes = Recipes.map((r,i) => (
        <Recipe key = {i} {...r} />
    ))
    return(
        <div className="recipe-list">
            {recipes}
        </div>
    )
}

RecipeList.propTypes = {
    Recipes: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeList;