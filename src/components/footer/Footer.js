import React, { useEffect } from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<footer>
			<a href="#" className="footer__logo" data-aos="zoom-in-down">
				ALIF
			</a>

			<ul className="permalinks" data-aos="fade-right">
				{navLinks.map((data, i) => (
					<li key={i}>
						<a href={`#${data.link}`}>{data.name}</a>
					</li>
				))}
			</ul>

			<div className="footer__socials" data-aos="zoom-in">
				{SocialData.map((social) => (
					<a href={social.link} target="_blank" key={social.id}>
						<social.icon />
					</a>
				))}
			</div>

			<div className="footer__copyright" data-aos="fade-left">
				<small>&copy; Made with 🔥 by Mokaddis Borhan ALIF</small>
			</div>
		</footer>
	);
};

export default Footer;
