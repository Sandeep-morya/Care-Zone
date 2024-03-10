import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PatientInfo } from "../../Types";
interface Props {
    patientInfo: PatientInfo;
    setPatientInfo: Dispatch<SetStateAction<PatientInfo>>;
}

const PatientInfoForm = ({ patientInfo, setPatientInfo }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPatientInfo((x) => ({ ...x, [name]: value }));
    };

    return (
        <div>
            <h2 className="text-center font-bold border-b uppercase text-xl my-8">Patient Form </h2>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-4 gap-4">

                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="invoice_no">
                        Invoice No
                    </label>
                    <input
                        type="text"
                        id="invoice_no"
                        name="invoice_no"
                        value={patientInfo.invoice_no}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="invoice_date">
                        Invoice Date
                    </label>
                    <input
                        type="date"
                        id="invoice_date"
                        name="invoice_date"
                        value={patientInfo.invoice_date}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="from_date">
                        From Date
                    </label>
                    <input
                        type="date"
                        id="from_date"
                        name="from_date"
                        value={patientInfo.from_date}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="to_date">
                        To Date
                    </label>
                    <input
                        type="date"
                        id="to_date"
                        name="to_date"
                        value={patientInfo.to_date}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_id">
                        Patient ID
                    </label>
                    <input
                        type="text"
                        id="patient_id"
                        name="patient_id"
                        value={patientInfo.patient_id}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_age">
                        Patient Age
                    </label>
                    <input
                        type="text"
                        id="patient_age"
                        name="patient_age"
                        value={patientInfo.patient_age}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_name">
                        Patient Name
                    </label>
                    <input
                        type="text"
                        id="patient_name"
                        name="patient_name"
                        value={patientInfo.patient_name}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_gender">
                        Patient Gender
                    </label>
                    <input
                        type="text"
                        id="patient_gender"
                        name="patient_gender"
                        value={patientInfo.patient_gender}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_phone">
                        Patient Phone
                    </label>
                    <input
                        type="text"
                        id="patient_phone"
                        name="patient_phone"
                        value={patientInfo.patient_phone}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>

                <div className="col-span-3 flex flex-col gap-2">
                    <label className="text-sm " htmlFor="patient_address">
                        Patient Address
                    </label>
                    <input
                        type="text"
                        id="patient_address"
                        name="patient_address"
                        value={patientInfo.patient_address}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default PatientInfoForm;
