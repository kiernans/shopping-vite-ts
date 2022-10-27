import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to='/shop'>Shop</Link>
		</>
	);
};

export default Home;
