// import React from 'react'

import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
	return (
		<section id="appointment" className="w-full py-16">
			<div className="w-full aspect-[4/6] lg:aspect-[16/6]">
				<div className="w-full h-full px-6 py-12 border bg-secondary/75">
					<div className="flex flex-col items-center gap-4 p-2 lg:px-12">
						<h3 className="text-xl font-semibold text-primary">
							Make Appointment
						</h3>
						<h2 className="text-2xl font-semibold text-center text-white lg:text-4xl">
							We Provide Quality Home Care & Private Nursing Service
						</h2>
						<p className="text-center text-white/50 ">
							At Care Zone, we prioritize providing not only healthcare but also
							a warm and caring environment to our patients.
						</p>
					</div>
				</div>
				<div className="bg-white">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
