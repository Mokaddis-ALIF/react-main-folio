import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDots } from 'react-icons/bi';
import { MdWorkspacesFilled } from 'react-icons/md';

const navData = [
	{ id: 1, href: '#', className: '#', icon: <AiOutlineHome /> },
	{ id: 2, href: '#about', className: '#about', icon: <AiOutlineUser /> },
	{ id: 3, href: '#experience', className: '#experience', icon: <BiBook /> },
	{ id: 4, href: '#services', className: '#services', icon: <RiServiceLine /> },
	{
		id: 5,
		href: '#portfolio',
		className: '#portfolio',
		icon: <MdWorkspacesFilled />,
	},
	{
		id: 6,
		href: '#contact',
		className: '#contact',
		icon: <BiMessageSquareDots />,
	},
];

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			{navData.map((data) => (
				<a
					href={data.href}
					onClick={() => setActiveNav(`${data.href}`)}
					className={activeNav === `${data.className}` ? 'active' : ''}
				>
					{data.icon}
				</a>
			))}
		</nav>
	);
};

export default Nav;
