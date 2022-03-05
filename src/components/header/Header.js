import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import Typewriter from 'typewriter-effect';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<span className="typewriter">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(`Hello I'm`)
								.pauseFor(2000)
								.deleteAll()
								.typeString('Mokaddis Borhan ALIF')
								.pauseFor(1000)
								.deleteAll()
								.typeString('MERN Stack Developer')
								.start();
						}}
					/>
				</span>

				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
