import React, { useEffect } from 'react';
import CTA from './CTA';
import './Header.css';
import profile from '../../assets/Me3.png';
import HeaderSocial from './HeaderSocial';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<header>
			<div className="container header__container">
				<span className="typewriter">
					<Typewriter
						words={[
							'Front-end web Developer',
							'React.js web Developer',
							'MERN Stack web Developer',
						]}
						loop
						cursor
						cursorStyle="_"
						typeSpeed={90}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</span>

				<CTA />
				<HeaderSocial />

				<div className="me" data-aos="fade-up">
					<img src={profile} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
