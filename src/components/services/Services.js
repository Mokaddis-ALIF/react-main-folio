import React, { useEffect } from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className="container services__container">
				<article className="service" data-aos="fade-right">
					<div className="service__head">
						<h3>Web design</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Create website with HTML,CSS,JavaScript</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Create websites with CSS framework</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Create static &amp; dynamic website with JavaScript &amp; React
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Create website with various React framework</p>
						</li>
					</ul>
				</article>

				<article className="service" data-aos="fade-left">
					<div className="service__head">
						<h3>Web development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Create full stack website using famous MERN technology</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Frontend with React and it's framework to make it gorgeous</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Backend with Node.js &amp; Express.js</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Database integration with MongoDB</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
