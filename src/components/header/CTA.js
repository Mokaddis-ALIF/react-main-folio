import React, { useEffect } from 'react';
import CV from '../../assets/CV.pdf';
import { TiDownloadOutline } from 'react-icons/ti';
import { TiMessages } from 'react-icons/ti';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="cta">
			<a className="btn" id="cv" href={CV} download data-aos="fade-right">
				Download CV <TiDownloadOutline />
			</a>
			<a className="btn-primary" id="cv" href="#contact" data-aos="fade-left">
				Let's Talk <TiMessages />
			</a>
		</div>
	);
};

export default CTA;
