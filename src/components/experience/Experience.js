import React from 'react';
import './Experience.css';
import { BE, FE } from './data';

const Experience = () => {
	return (
		<section id="experience">
			<h5>My Skills</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{FE.map((item, index) => (
							<article className="experience__details" key={index}>
								<div className="experience__name-icon">
									<div className="experience__devicon">{item.icon}</div>
									<h4>{item.name}</h4>
								</div>
							</article>
						))}
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{BE.map((item, index) => (
							<article className="experience__details" key={index}>
								<div className="experience__name-icon">
									<div className="experience__devicon">{item.icon}</div>
									<h4>{item.name}</h4>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
