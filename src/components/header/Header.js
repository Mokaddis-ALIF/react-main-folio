import React from 'react';
import CTA from './CTA';
import './Header.css';
import profile from '../../assets/profile-img.png';
import HeaderSocial from './HeaderSocial';
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<span className="typewriter">
					{/* <Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(`Hello I'm`)
								.pauseFor(2000)
								.deleteAll()
								.typeString('Mokaddis Borhan ALIF')
								.pauseFor(1000)
								.deleteAll()
								.typeString('MERN Stack Developer')
								.pauseFor(1000)
								.deleteAll()
								.typeString('React Web Developer')
								.start();
						}}
					/> */}
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

				<div className="me">
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
