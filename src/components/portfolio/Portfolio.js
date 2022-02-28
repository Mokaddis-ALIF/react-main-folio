import React from 'react';
import { ProjectsData } from './data';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<section>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{ProjectsData.map((project, index) => (
					<article className="portfolio__item" key={index}>
						<div className="portfolio__item-img">
							<img src={project.image} alt={project.title} id="p__img" />
						</div>
						<h3>{project.title}</h3>
						<div className="portfolio__item-cta">
							<a
								href={project.github}
								target="_blank"
								rel="noreferrer"
								className="btn"
							>
								Github
							</a>
							<a
								href={project.demo}
								target="_blank"
								rel="noreferrer"
								className="btn btn-primary"
							>
								Live Demo
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
