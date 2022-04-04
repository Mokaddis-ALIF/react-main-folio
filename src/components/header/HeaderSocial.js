import React, { useEffect } from 'react';
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

const HeaderSocial = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="header__social" data-aos="fade-down">
			{SocialData.map((social) => (
				<a href={social.link} target="_blank" key={social.id} rel="noreferrer">
					<social.icon />
				</a>
			))}
		</div>
	);
};

export default HeaderSocial;
