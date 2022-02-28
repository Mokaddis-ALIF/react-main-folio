import React from 'react';
import './About.css';
import Me from '../../assets/Me3.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Me} alt="Me" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ years working </small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>Worldwide </small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Project</h5>
							<small>20+ completed </small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						similique nam dolor voluptatum nobis illo exercitationem laudantium
						alias rem molestias, quaerat corrupti porro voluptate nihil ipsa, in
						modi adipisci explicabo.
					</p>
					<a href="#contact" className="btn btn-primary">
						Contact
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
