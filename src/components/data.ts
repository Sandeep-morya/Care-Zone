import { FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor, FaUserNurse, FaPeopleGroup } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import serviceFirst from "../assets/web-images/service-first.jpg";
import serviceSecond from "../assets/web-images/service-second.jpg";
import servicesThird from "../assets/web-images/service-third.jpg";

export const servicesData2 = [
	{ Icon: FaPeopleGroup, count: 100, title: "Happy Patients" },
	{ Icon: FaHospitalUser, count: 20, title: "Successfull Home Care" },
	{ Icon: SlBadge, count: 5, title: "Years Of Experience" },
	{ Icon: FaUserNurse, count: 10, title: "Personal Nurses" },
];

export const servicesData = [
	{
		image: serviceFirst,
		icon: FaHospitalUser,
		title: "Home Care",
		description:
			"At CareZone, we understand the significance of providing compassionate and personalized healthcare services in the comfort of your home.",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image: serviceSecond,
		icon: FaUserNurse,
		title: "Senior Care",
		description:
			"At CareZone, we recognize the unique and evolving needs of seniors. Our Senior Care offerings are tailored to meet the unique requirements of each individual.",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image: servicesThird,
		icon: FaUserDoctor,
		title: "Intensive Care",
		description:
			"At CareZone, our Intensive Care services are crafted to provide specialized and vigilant attention for individuals requiring advanced medical care.",
		handler: () => {
			console.log("Read more");
		},
	},
];
