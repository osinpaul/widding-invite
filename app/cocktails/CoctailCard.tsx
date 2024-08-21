import React from 'react';
import { Cocktail } from '@/app/cocktails/data';


interface CocktailCardProps {
	cocktail: Cocktail;
}

const CocktailCard: React.FC<CocktailCardProps> = ({cocktail}) => {
	return (
		<div className="border rounded-lg p-4 mb-4 shadow-lg">
			<h2 className="text-xl font-semibold mb-2">{ cocktail.name }</h2>
			<h3 className="text-lg font-medium mb-2">Ингредиенты:</h3>
			<ul className="list-disc list-inside mb-2">
				{ cocktail.ingredients.map((ingredient, index) => (
					<li key={ index }>{ ingredient }</li>
				)) }
			</ul>
			<h3 className="text-lg font-medium mb-2">Приготовление:</h3>
			<p>{ cocktail.preparation }</p>
		</div>
	);
};

export default CocktailCard;
