import { FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor, FaUserNurse, FaPeopleGroup } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

export const servicesData2 = [
	{ Icon: FaPeopleGroup, count: 100, title: "Happy Patients" },
	{ Icon: FaHospitalUser, count: 200, title: "Successfull Home Care" },
	{ Icon: SlBadge, count: 500, title: "Years Of Experience" },
	{ Icon: FaUserNurse, count: 1000, title: "Personal Nurces" },
];


export const servicesData = [
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/nurse-serving-breakfast-to-senior-man-e1638524571723-pgyr3mt1fejm2dmjor557r94ien5mcf2f3ep2id15c.jpg",
		icon: FaHospitalUser ,
		title: "Home Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-in-nursing-home-e1638524580355-pgyr3v9l4wv6yva9bcssc749uvhgjmcng9a2e00hlc.jpg",
		icon: FaUserNurse ,
		title: "Senior Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
	{
		image:
			"https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/caring-for-disabled-person-in-clinic-rehabilitation-center-and-home-e1638524664128-pgyr62812zva243kiaxg5n6zr8oai723r42up8rf2o.jpg",
		icon: FaUserDoctor ,
		title: "Intensive Care",
		description:
			"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt",
		handler: () => {
			console.log("Read more");
		},
	},
];