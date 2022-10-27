import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='' element={<Home />}></Route>
				<Route path='shop' element={<Shop />}></Route>
				<Route path='*' element={<h1>Page Not Found</h1>}></Route>
			</Routes>
		</div>
	);
}

export default App;
