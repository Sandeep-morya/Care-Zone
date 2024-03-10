import { useState } from "react";
import MainLayer from "../components/MainLayer";
import PatientInfoForm from "../components/forms/PatientInfoForm";
import { PatientInfo } from "../Types";

function getTodayDate() {
    const today = new Date();
    let dd: string | number = today.getDate();
    let mm: string | number = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return `${yyyy}-${mm}-${dd}`;
}


const initialPatientInfo = {
    image: undefined,
    patient_id: "",
    patient_name: "",
    patient_age: "",
    patient_gender: "",
    patient_address: "",
    patient_phone: "",
    invoice_no: "",
    invoice_date: getTodayDate(),
    from_date: "",
    to_date: "",
}




const PatientAddminssion = () => {
    const [patientInfo, setPatientInfo] = useState<PatientInfo>(initialPatientInfo)

    return <MainLayer title="Patient Admission">
        <PatientInfoForm {...{ patientInfo, setPatientInfo }} />
    </MainLayer>;
};

export default PatientAddminssion;
