import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
	{ id: 1, title: 'SSC', year: 2012 },
	{ id: 2, title: 'HSC', year: 2014 },
	{ id: 3, title: 'SSC', year: 2021 },
];

const Education = () => {
	return (
		<>
			<section class="education" id="education">
				<h2>
					My <span>education</span>
				</h2>

				<div class="box-container">
					{educationData.map((data) => (
						<div class="box">
							<FaGraduationCap className="e_icon" />
							<span>{data.year}</span>
							<h3>{data.title}</h3>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Education;
