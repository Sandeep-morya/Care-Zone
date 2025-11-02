import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Btn from "../ui/Btn";
import { PiPlus, PiTrash } from "react-icons/pi";
import { Attendance } from "../../pages/AttendanceRecord";

interface Props {
	attendances: Attendance[];
	setAttendances: Dispatch<SetStateAction<Attendance[]>>;
	headings: string[];
}

const Th = (props: PropsWithChildren) => <div className="grid place-items-center font-semibold">{props.children}</div>;

const AttendanceForm = ({ attendances, setAttendances, headings }: Props) => {
	const handleInputChange = (index: number, key: string, value: string) => {
		const updatedAttendances = attendances.map((attendance, i) => {
			if (i === index) {
				return {
					...attendance,
					[key]: value,
				};
			}
			return attendance;
		});
		setAttendances(updatedAttendances);
	};

	const handleRemoveLast = () => {
		if (attendances.length > 0) {
			const updatedAttendances = [...attendances];
			updatedAttendances.pop();
			setAttendances(updatedAttendances);
		}
	};

	const handleAddAttendance = () => {
		const newAttendance: Attendance = { date: getTodayDate() };

		// Initialize values for each heading
		headings.forEach((heading) => {
			newAttendance[heading.trim()] = "";
		});

		setAttendances([...attendances, newAttendance]);
	};

	const getTodayDate = () => {
		const today = new Date();
		let dd: string | number = today.getDate();
		let mm: string | number = today.getMonth() + 1;
		const yyyy = today.getFullYear();

		if (dd < 10) {
			dd = "0" + dd;
		}

		if (mm < 10) {
			mm = "0" + mm;
		}

		return `${yyyy}-${mm}-${dd}`;
	};

	return (
		<div className="grid gap-4 mb-8">
			<h2 className="text-center font-bold border-b uppercase text-xl my-8">Add Attendance Records</h2>

			{headings.length > 0 ? (
				<>
					<div className="grid border-b" style={{ gridTemplateColumns: `repeat(${headings.length + 2}, minmax(0, 1fr))` }}>
						<Th>Date</Th>
						{headings.map((heading, index) => (
							<Th key={index}>{heading}</Th>
						))}
						<Th>Action</Th>
					</div>

					<div className="divide-y">
						{attendances.map((attendance, index) => (
							<div
								key={index}
								className="grid pt-2 mb-2 gap-y-4 gap-4"
								style={{ gridTemplateColumns: `repeat(${headings.length + 2}, minmax(0, 1fr))` }}>
								<input
									type="date"
									value={attendance.date}
									onChange={(e) => handleInputChange(index, "date", e.target.value)}
									className="border border-gray-300 rounded-md px-2 py-2 mr-2"
								/>

								{headings.map((heading, headingIndex) => {
									const headingKey = heading.trim();
									return (
										<input
											key={headingIndex}
											type="text"
											value={attendance[headingKey] || ""}
											onChange={(e) => handleInputChange(index, headingKey, e.target.value)}
											placeholder={heading}
											className="border border-gray-300 rounded-md px-2 py-2 mr-2"
										/>
									);
								})}

								<button
									onClick={() => {
										const updatedAttendances = attendances.filter((_, i) => i !== index);
										setAttendances(updatedAttendances);
									}}
									className="text-red-500 hover:text-red-700 p-2">
									<PiTrash />
								</button>
							</div>
						))}
					</div>

					<div className="flex justify-end gap-4">
						<Btn icon={<PiTrash />} onClick={handleRemoveLast}>
							Delete Last
						</Btn>
						<Btn icon={<PiPlus />} onClick={handleAddAttendance}>
							Add Record
						</Btn>
					</div>
				</>
			) : (
				<div className="text-center py-4 text-gray-500">Please set headings in the patient information form first</div>
			)}
		</div>
	);
};

export default AttendanceForm;
