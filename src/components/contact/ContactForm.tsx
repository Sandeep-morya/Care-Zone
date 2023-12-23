// import React from "react";

import { FaCalendar, FaCalendarCheck, FaPhoneAlt, FaUser } from "react-icons/fa";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";
import { MdOutlineEmail } from "react-icons/md";
import useVisit from "../../hooks/useVisit";
import contact_form_last from "../../assets/web-images/contact-form-last.jpg";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [date, setDate] = useState("");
	const [message, setMessage] = useState("");
	const visit = useVisit();

	const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMobile: ${mobile}%0D%0ADate: ${date}%0D%0AMessage: ${message}`;

	return (
		<div className="w-[90%] p-6 flex-col gap-6 lg:gap-24 lg:p-12 lg:flex-row flex -translate-y-[200px] lg:-translate-y-1/3 shadow-2xl rounded-xl m-auto bg-white 2xl:w-[80%]">
			<div className="flex-col gap-6 flex lg:w-[55%]">
				<div className="flex flex-col gap-6 lg:flex-row">
					<Input
						leftIcon={<FaUser />}
						label="Name"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						leftIcon={<div className="text-2xl"><MdOutlineEmail /></div>}
						label="Email"
						type="email"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-6 lg:flex-row">
					<Input
						leftIcon={<FaPhoneAlt />}
						label="Mobile"
						type="tel"
						placeholder="Mobile Number"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>

					<Input
						leftIcon={<FaCalendar />}
						label="Date"
						type="date"
						placeholder="Appointment Date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className="flex flex-col">
					<label className="font-medium">Message</label>

					<textarea
						value={message}
						style={{ resize: "none" }}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Your Message"
						className="p-4 mt-2 border rounded-md shadow-md outline-none focus:border focus:shadow-md placeholder:text-black/30 focus:border-none md:text-base dark:bg-moredark dark:placeholder:text-white/10 dark:text-white/50"
						cols={30}
						rows={7}></textarea>
				</div>

				<div
					onClick={visit.bind(
						this,
						`mailto:nursing@carezonelko.com?subject=Need Appointment&body=${body}`,
					)}
					className="py-4 m-auto mt-4">
					<Button icon={<FaCalendarCheck />} primary two>
						Make Appointment
					</Button>
				</div>
			</div>
			<div className="w-full aspect-[6/5] lg:w-[45%] relative rounded-xl shadow-xl overflow-hidden">
				<img
					className="object-cover w-full h-full "
					src={contact_form_last}
					alt="happy-face"
					loading="lazy"
				/>
				<div className="absolute inset-0 z-10 bg-third/25"></div>
				div
			</div>
		</div>
	);
};

export default ContactForm;
