import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const SocialData = [
	{
		id: 3,
		platform: 'LinkedIn',
		link: 'https://www.linkedin.com/in/mokaddis-borhan-alif/',
		icon: BsLinkedin,
	},
	{
		id: 5,
		platform: 'Github',
		link: 'https://github.com/Mokaddis-ALIF',
		icon: FaGithub,
	},
	{
		id: 2,
		platform: 'Facebook',
		link: 'https://www.facebook.com/mokaddis.alif/',
		icon: BsFacebook,
	},
];

const navLinks = [
	{ name: 'Home', link: 'home' },
	{ name: 'About', link: 'about' },
	{ name: 'Experience', link: 'experience' },
	{ name: 'Services', link: 'services' },
	{ name: 'Portfolio', link: 'portfolio' },
	{ name: 'Contact', link: 'contact' },
];

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				ALIF
			</a>

			<ul className="permalinks">
				{navLinks.map((data, i) => (
					<li key={i}>
						<a href={`#${data.link}`}>{data.name}</a>
					</li>
				))}
			</ul>

			<div className="footer__socials">
				{SocialData.map((social) => (
					<a href={social.link} target="_blank" key={social.id}>
						<social.icon />
					</a>
				))}
			</div>

			<div className="footer__copyright">
				<small>&copy; Made with 🔥 by Mokaddis Borhan ALIF</small>
			</div>
		</footer>
	);
};

export default Footer;
