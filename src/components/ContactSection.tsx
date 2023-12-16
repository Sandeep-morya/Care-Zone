// import React from 'react'

import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
	return (
		<section id="contact-us" className="w-full">
			<div
				className="w-full aspect-square lg:aspect-[16/6]"
				style={{
					backgroundImage:
						"url('https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/elderly-patient-and-caregiver-e1638524701577.jpg')",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}>
				<div className="border w-full h-full bg-secondary/75 px-6 py-12">
					<div className="flex p-2 flex-col gap-4 lg:px-12  items-center">
						<h3 className="text-primary text-xl font-semibold">
							Make Appointment
						</h3>
						<h2 className="text-2xl  lg:text-4xl  font-semibold text-center text-white">
							We Provide Quality Home Care & Private Nursing Service
						</h2>
						<p className="text-white/50 text-center ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
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
