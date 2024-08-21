'use client';

import { cocktails } from '@/app/cocktails/data';
import React from 'react';
import CocktailCard from '@/app/cocktails/CoctailCard';

export default function Page() {
	return (
		<div className="container mx-auto p-4 text-white">
			<h1 className="text-3xl font-bold mb-6">Список коктейлей</h1>
			<p className="mb-3">
				Подсказка: в коктейльном наборе джогер имеет 2 стороны: это 30 или 45 мл
			</p>
			{ cocktails.map((cocktail, index) => (
				<CocktailCard key={ index } cocktail={ cocktail }/>
			)) }
		</div>
	);
}