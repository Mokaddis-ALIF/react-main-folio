import React, { useEffect, useState } from 'react';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import RingLoader from 'react-spinners/RingLoader';

const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="spinner">
					<RingLoader
						color={'#4db5ff'}
						loading={loading}
						size={500}
						speedMultiplier={0.8}
					/>
				</div>
			) : (
				<>
					<Header />
					<Nav />
					<About />
					<Experience />
					<Services />
					<Portfolio />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
};

export default App;
