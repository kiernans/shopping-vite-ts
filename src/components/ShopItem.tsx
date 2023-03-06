import React from 'react';

type ShopItemProps = {
	product: Product;
};

type Product = {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: Rating;
	title: string;
};

type Rating = {
	rate: number;
	count: number;
};

const ShopItem = ({ product }: ShopItemProps) => {
	const { image, title, description, price, category } = product;
	const capitalize = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<div className='group relative'>
			<div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
				<img
					src={image}
					alt={description}
					className='h-full w-full object-cover object-center lg:h-full lg:w-full'
				/>
			</div>
			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-sm text-gray-700'>
						<a href='#'>
							<span aria-hidden='true' className='absolute inset-0'></span>
							{title}
						</a>
					</h3>
					<p className='mt-1 text-sm text-gray-500'>{capitalize(category)}</p>
				</div>
				<p className='text-sm font-medium text-gray-900'>${price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default ShopItem;
