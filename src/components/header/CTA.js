import React from 'react';
import CV from '../../assets/CV.pdf';
import { TiDownloadOutline } from 'react-icons/ti';
import { TiMessages } from 'react-icons/ti';

const CTA = () => {
	return (
		<div className="cta">
			<a className="btn" id="cv" href={CV} download>
				Download CV <TiDownloadOutline />
			</a>
			<a className="btn-primary" id="cv" href="#contact">
				Let's Talk <TiMessages />
			</a>
		</div>
	);
};

export default CTA;
