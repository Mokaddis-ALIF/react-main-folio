import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_qdzqpcw',
				'template_ngendeg',
				formRef.current,
				'user_PcQPKmv0ZMFHGBbhXv2bt'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>mokaddis.alif@gmail.com</h5>
						<a
							href="mailto:mokaddis.alif@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Mokaddis Borhan Alif</h5>
						<a
							href="https://m.me/mokaddis.alif/"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+8801673913970</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+8801673913970"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>

				<form ref={formRef} onSubmit={handleSubmit}>
					<input type="text" name="name" placeholder="Your full name" />
					<input type="email" name="email" placeholder="Your email" />
					<textarea
						name="message"
						rows="7"
						placeholder="Your message"
					></textarea>
					<button type="submit" class="btn btn-primary">
						Send Message
					</button>
					<div className="success_message"> {done && 'Thank you...'}</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
