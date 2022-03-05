import React from 'react';
import { ProjectsData } from './data';
import './Portfolio.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<Swiper
				// slidesPerView={3}

				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 1,
					},
					// when window width is >= 768px
					998: {
						width: 998,
						slidesPerView: 3,
					},
				}}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="container portfolio__container"
			>
				{ProjectsData.map((project, index) => (
					<SwiperSlide>
						<article className="portfolio__item" key={index}>
							<div className="portfolio__item-img">
								<img src={project.image} alt={project.title} id="p__img" />
							</div>
							<h3>{project.title}</h3>
							<div className="project-tags">
								{project.tags.map((tag, i) => (
									<label key={i} className="tag">
										{tag}
									</label>
								))}
							</div>
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
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Portfolio;
