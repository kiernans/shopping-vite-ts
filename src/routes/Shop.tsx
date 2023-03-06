import { useGetAllProductsQuery } from '../store';
import ShopItem from '../components/ShopItem';

const Shop = () => {
	const { data: products, isLoading, error } = useGetAllProductsQuery();

	let content;
	if (isLoading) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>Error loading the products</div>;
	} else {
		content = products.map((product: any) => (
			<ShopItem key={product.id} product={product} />
		));
	}

	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					Products
				</h2>
				<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{content}
				</div>
			</div>
		</div>
	);
};

export default Shop;
