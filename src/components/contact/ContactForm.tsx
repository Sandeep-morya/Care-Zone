// import React from "react";

import { FaCalendar, FaCalendarCheck, FaPhone, FaUser } from "react-icons/fa";
import Input from "./Input";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import Button from "../ui/Button";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [date, setDate] = useState("");
	const [message, setMessage] = useState("");
	return (
        <div className="w-[90%] p-6 flex-col gap-6 lg:gap-24 lg:p-12 lg:flex-row flex -translate-y-[100px] sm:-translate-y-[200px] lg:-translate-y-1/3 shadow-xl rounded-xl m-auto bg-gray-100">
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
                        leftIcon={<FaMessage />}
                        label="Email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <Input
                        leftIcon={<FaPhone />}
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
                        className="mt-2 outline-none focus:border focus:shadow-md shadow-md rounded-md border p-4 placeholder:text-black/30 focus:border-none md:text-base dark:bg-moredark dark:placeholder:text-white/10 dark:text-white/50"
                        cols={30}
                        rows={7}></textarea>
                </div>

                <div className="m-auto mt-4 py-4">
                    <Button icon={<FaCalendarCheck />} primary two>
                        Make Appointment
                    </Button>
                </div>
            </div>
            <div className="w-full aspect-[6/5] lg:w-[45%] relative rounded-xl shadow-xl overflow-hidden">
				<img
					className="w-full h-full object-cover "
					src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/caregiver-assist-senior-woman-at-home-e1638524694531.jpg"
					alt="happy-face"
				/>
                <div className="absolute inset-0 z-10 bg-third/25"></div>
			div</div>
		</div>
	);
};

export default ContactForm;
