import React from 'react';
import './About.css';
import profile from '../../assets/profile-img.png';
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
						<img src={profile} alt="Me" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>6+ months working </small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>Worldwide </small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Project</h5>
							<small>15+ completed </small>
						</article>
					</div>

					<p>
						I've done my B.Sc in CSE. Being a CSE student I've been introduced
						to many level languages. That's why I got to experiment a lot but
						after learning JavaScript and exploring the web development world as
						a MERN stack developer I’ve found the utmost joy. For more than one
						year I’ve been gathering experience by learning and also working as
						a MERN stack developer.
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
