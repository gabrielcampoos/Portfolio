import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Curriculum } from '../../pages/Home/components/Curriculum';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/curriculum" element={<Curriculum />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
