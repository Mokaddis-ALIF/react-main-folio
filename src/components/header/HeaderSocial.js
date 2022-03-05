import React from 'react';
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

const HeaderSocial = () => {
	return (
		<div className="header__social">
			{SocialData.map((social) => (
				<a href={social.link} target="_blank" key={social.id} rel="noreferrer">
					<social.icon />
				</a>
			))}
		</div>
	);
};

export default HeaderSocial;
