import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocial = () => {
	return (
		<div className="header__social">
			<a href="" target="_blank">
				<BsLinkedin />
			</a>
			<a href="" target="_blank">
				<FaGithub />
			</a>
			<a href="" target="_blank">
				<BsFacebook />
			</a>
		</div>
	);
};

export default HeaderSocial;
