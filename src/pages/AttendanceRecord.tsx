import { PropsWithChildren, useEffect, useState } from "react";
import MainLayer from "../components/MainLayer";
import LogoName from "../assets/logoname.png";
import Logo from "../assets/full-logo.png";
import { Margin, Resolution, usePDF } from "react-to-pdf";
import { PatientInfoAttendance } from "../Types";
import Btn from "../components/ui/Btn";
import { PiPrinter } from "react-icons/pi";
import PatientInfoFormAttendance from "../components/forms/PatientInfoFormAttendance";
import { createId } from "@paralleldrive/cuid2";
import AttendanceForm from "../components/forms/AttendanceForm";

const Th = (props: PropsWithChildren) => <div className="grid place-items-center font-semibold">{props.children}</div>;
const Td = (props: PropsWithChildren) => <div className="flex-1 flex justify-center items-center">{props.children}</div>;

export type Attendance = {
	date: string;
	[key: string]: string;
};

const initialPatientInfo = {
	patient_id: "",
	patient_name: "",
	patient_age: "",
	patient_gender: "",
	patient_address: "",
	patient_phone: "",
	from_date: "",
	to_date: "",
	headings: "",
	month: "",
	year: "",
};

const AttendanceRecord = () => {
	const [searchId, setSearchId] = useState("");
	const [currentKey, setCurrentKey] = useState("");
	const [patientInfo, setPatientInfo] = useState<PatientInfoAttendance>(initialPatientInfo);
	const [data, setData] = useState<Attendance[]>([]);

	const { toPDF, targetRef } = usePDF({
		filename: `carezone-attendance-${patientInfo.patient_name}-record-${currentKey}.pdf`,
		page: {
			margin: Margin.MEDIUM,
		},
		method: "save",
		canvas: {
			mimeType: "image/png",
			qualityRatio: 1,
		},
		resolution: Resolution.LOW,
	});

	// Generate a new ID and initialize empty state
	const createNewRecord = () => {
		const newKey = createId();
		setCurrentKey(newKey);
		setPatientInfo(initialPatientInfo);
		setData([]);
		setSearchId(newKey);
	};

	// Load data by ID
	const loadRecord = (id: string) => {
		const savedData = localStorage.getItem(id + "-data");
		const savedPatientInfo = localStorage.getItem(id + "-patientInfo");

		if (savedData) {
			setData(JSON.parse(savedData));
		}

		if (savedPatientInfo) {
			setPatientInfo(JSON.parse(savedPatientInfo));
		}

		setCurrentKey(id);
	};

	// Handle search
	const handleSearch = () => {
		if (searchId) {
			loadRecord(searchId);
		}
	};

	// Save data to localStorage whenever it changes
	useEffect(() => {
		if (currentKey) {
			localStorage.setItem(currentKey + "-data", JSON.stringify(data));
		}
	}, [data, currentKey]);

	useEffect(() => {
		if (currentKey) {
			localStorage.setItem(currentKey + "-patientInfo", JSON.stringify(patientInfo));
		}
	}, [patientInfo, currentKey]);

	// Initialize with a new ID on component mount
	useEffect(() => {
		const newKey = createId();
		setCurrentKey(newKey);
		setSearchId(newKey);
	}, []);

	return (
		<MainLayer title="Attendance Record">
			<div className="flex gap-2 mb-4">
				<input
					type="search"
					placeholder="Enter Record ID"
					value={searchId}
					onChange={(e) => setSearchId(e.target.value)}
					className="flex-1 border border-gray-300 rounded-md px-2 py-2"
				/>
				<Btn onClick={handleSearch}>Load Record</Btn>
				<Btn onClick={createNewRecord}>New Record</Btn>
			</div>

			<div className="mb-4 p-2 bg-blue-50 rounded-md">
				<strong>Current Record ID:</strong> {currentKey}
			</div>

			<PatientInfoFormAttendance {...{ patientInfo, setPatientInfo }} />
			<AttendanceForm attendances={data} setAttendances={setData} headings={patientInfo.headings.split(",").filter((h) => h.trim())} />

			<Btn icon={<PiPrinter />} onClick={() => toPDF()}>
				Print
			</Btn>

			<div ref={targetRef} className="min-w-[1080px]">
				<div className="w-full border border-black py-2">
					<div className="flex justify-between border-b pb-4 mb-4">
						<div className="flex-1 flex gap-2 items-center flex-col">
							<img src={LogoName} alt="carezone-logo" className="h-20" />
							<div className="font-bold uppercase tracking-wider">Care Zone Home Nursing Services</div>
							<div className="capitalize text-center">
								Infront of Medanta Hospital, Gate No.5,
								<br />
								Golf City, Lucknow, Uttar Pradesh, 226002
							</div>

							<div className="flex gap-2 items-center">
								<div className="font-bold">REG NO.</div>
								<div className="font-bold">UDYAM-UP-50-0125088</div>
							</div>
						</div>
						<ul className="flex-1 grid grid-cols-2 justify-between">
							<li className="flex  items-center gap-2">
								<b>From:</b>
								<p>{patientInfo.from_date}</p>
							</li>

							<li className="flex  items-center gap-2">
								<b>To:</b>
								<p>{patientInfo.to_date}</p>
							</li>
							<li className="flex items-center gap-1">
								<b>Patient ID:</b>
								<p>{patientInfo.patient_id}</p>
							</li>
							<li className="flex items-center gap-2">
								<b>Age:</b>
								<p>{patientInfo.patient_age}</p>
							</li>
							<li className="flex col-span-2 items-center gap-2">
								<b>Patient Name:</b>
								<p>{patientInfo.patient_name}</p>
							</li>
							<li className="flex items-center gap-1">
								<b>Gender:</b>
								<p>{patientInfo.patient_gender}</p>
							</li>

							<li className="flex col-span-2 items-center gap-2">
								<b>Email/Phone:</b>
								<p>{patientInfo.patient_phone}</p>
							</li>
							<li className="flex col-span-2 items-center gap-2">
								<b>Address:</b>
								<p>{patientInfo.patient_address}</p>
							</li>
						</ul>
					</div>
					<div className="bg-black/5 h-12 flex justify-center items-center font-bold mb-4">
						<p className="uppercase">
							Attendance Record: ({patientInfo.month}-{patientInfo.year})
						</p>
					</div>
					<div
						style={{
							gridTemplateColumns: `repeat(${(patientInfo.headings?.split(",").length || 0) + 1}, minmax(0, 1fr))`,
						}}
						className="grid h-12 divide-x border-t border-b">
						<Th>Date</Th>
						{patientInfo.headings?.split(",").map((heading) => {
							return <Th key={heading}>{heading}</Th>;
						})}
					</div>
					{data.map((item, index) => {
						return (
							<div
								style={{
									gridTemplateColumns: `repeat(${(patientInfo.headings?.split(",").length || 0) + 1}, minmax(0, 1fr))`,
								}}
								key={index + "-item"}
								className="grid h-12 divide-x">
								<Td>{item.date}</Td>
								{patientInfo.headings?.split(",").map((heading) => {
									const headingTrimmed = heading.trim();
									return <Td key={headingTrimmed}>{item[headingTrimmed] || "-"}</Td>;
								})}
							</div>
						);
					})}
					{data.length === 0 && <div className="h-12 flex justify-center items-center text-gray-500">No attendance records added yet</div>}
				</div>

				{/* bill footer */}
				<div className="w-full flex h-[480px] justify-center items-end border-t p-8">
					<div className="flex flex-col items-center">
						<img src={Logo} alt="CareZone Logo" className="w-2/3 aspect-square object-contain opacity-10" />
					</div>
				</div>
			</div>
		</MainLayer>
	);
};

export default AttendanceRecord;
