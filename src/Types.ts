export interface PatientInfo {
	image?: File;
	patient_id: string;
	patient_name: string;
	patient_age: string;
	patient_gender: string;
	patient_address: string;
	patient_phone: string;
	invoice_no: string;
	invoice_date: string;
	from_date: string;
	to_date: string;
}

export interface ServiceData {
	service: string;
	total_days: string;
	per_day_charge: string;
	payment: string;
	payment_method: string;
}

export interface Staff {
	employee_id: string;
	employee_image?: File;
	employee_name: string;
	father_or_husband: string;
	gender: string;
	email: string;
	mobile: string | number;
	dob: string;
	doj: string;
	adhaar_no: string | number;
	designation: string;
	blood_group: string;
	verfied_by: string;
	address: string;
	signature?: File;
	authority_signature?: File;
}
