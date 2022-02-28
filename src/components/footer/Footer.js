import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				ALIF
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="">
					<FaFacebookF />
				</a>
				<a href="">
					<FiInstagram />
				</a>
				<a href="">
					<BsLinkedin />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Made with 🔥 by Mokaddis Borhan ALIF</small>
			</div>
		</footer>
	);
};

export default Footer;
