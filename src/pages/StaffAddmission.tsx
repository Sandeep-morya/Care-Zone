import { useEffect, useState } from "react";
import MainLayer from "../components/MainLayer";
import StaffForm from "../components/forms/StaffForm";
import { Margin, Resolution, usePDF } from "react-to-pdf";
import { PiPrinter } from "react-icons/pi";
import Btn from "../components/ui/Btn";
import LogoName from "../assets/logoname.png";
import NoUser from "../assets/no-user.png";
import { Staff } from "../Types";

const initialState = {
    employee_id: "",
    employee_image: undefined,
    employee_name: "",
    father_or_husband: "",
    gender: "",
    email: "",
    mobile: "",
    dob: "",
    doj: "",
    adhaar_no: "",
    designation: "",
    blood_group: "",
    verfied_by: "",
    address: "",
    signature: undefined,
    authority_signature: undefined
};

// const dummySignature = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ryan-Signature.png/1200px-Ryan-Signature.png";

const StaffAddmission = () => {
    const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer>(NoUser);
    const [previewSignature, setPreviewSignature] = useState<string | ArrayBuffer>("");
    // const [preview, setPreview] = useState<string | ArrayBuffer>(dummySignature);
    const [staff, setStaff] = useState<Staff>(initialState);
    const { toPDF, targetRef } = usePDF({
        filename: `carezone-staff-${staff.employee_id || 0}.pdf`,
        page: {
            margin: Margin.MEDIUM,
        },
        method: "save",
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: "image/png",
            qualityRatio: 1,
        },
        resolution: Resolution.NORMAL,
    });

    useEffect(() => {
        if (staff.employee_image) {
            const reader = new FileReader();
            reader.readAsDataURL(staff.employee_image);
            reader.onload = (e) => {
                if (e.target?.result) setPreviewUrl(e.target.result);
            };
        }
        if (staff.signature) {
            const reader = new FileReader();
            reader.readAsDataURL(staff.signature);
            reader.onload = (e) => {
                if (e.target?.result) setPreviewSignature(e.target.result);
            };
        }
        // if (staff.authority_signature) {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(staff.authority_signature);
        //     reader.onload = (e) => {
        //         if (e.target?.result) setPreview(e.target.result);
        //     };
        // }
    }, [staff]);
    return (
        <MainLayer title="Staff Admission">
            <h2 className="text-center font-bold border-b uppercase text-xl my-8">Staff Admission Form</h2>
            <StaffForm {...{ staff, setStaff }} />

            <div className="my-8">
                <Btn icon={<PiPrinter />} onClick={() => toPDF()}>
                    Print
                </Btn>
            </div>
            <div ref={targetRef} className="w-[720px] min-w-[720px] ">
                <div className="flex-1 flex gap-2 py-8 items-center flex-col border">
                    <img src={LogoName} alt="carezone-logo" className="h-20" />
                    <div className="font-bold uppercase tracking-wider">Care Zone Home Nursing Services</div>
                    <div className="capitalize text-center">
                        Infront of Medanta Hospital Gate No.5
                        <br />
                        Golf City Lucknow 226002
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="font-bold ">🌍 www.carezonelko.com</div>

                        <div className="font-bold"> 📧 nursing@carezonelko.com</div>

                        <div className="font-bold"> 📞 8887166889</div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-12 font-bold pb-4 bg-black/5 flex justify-center items-center uppercase">Personal Information</div>
                    <div className="flex justify-between items-start border p-4 relative">
                        <div className="grid grid-cols-2 gap-x-2 text-sm">
                            <div className="font-bold py-2">Employee ID:</div>
                            <div className="py-2">{staff.employee_id}</div>

                            <div className="font-bold py-2">Employee Name:</div>
                            <div className="py-2">{staff.employee_name}</div>

                            <div className="font-bold py-2">Father/Husband Name:</div>
                            <div className="py-2">{staff.father_or_husband}</div>

                            <div className="font-bold py-2">Gender:</div>
                            <div className="py-2">{staff.gender}</div>

                            <div className="font-bold py-2">Email:</div>
                            <div className="py-2">{staff.email}</div>

                            <div className="font-bold py-2">Phone:</div>
                            <div className="py-2">{staff.mobile}</div>

                            <div className="font-bold py-2">Date of Birth:</div>
                            <div className="py-2">{staff.dob}</div>

                            <div className="font-bold py-2">Date of Joining:</div>
                            <div className="py-2">{staff.doj}</div>

                            <div className="font-bold py-2">Adhaar No:</div>
                            <div className="py-2">{staff.adhaar_no}</div>

                            <div className="font-bold py-2">Designation:</div>
                            <div className="py-2">{staff.designation}</div>

                            <div className="font-bold py-2">Blood Group:</div>
                            <div className="py-2">{staff.blood_group}</div>

                            <div className="font-bold py-2">Verified By:</div>
                            <div className="py-2">{staff.verfied_by}</div>

                            <div className="py-2 col-span-2">
                                <strong>Address: </strong>
                                {staff.address}
                            </div>
                        </div>
                        <div className="flex h-full justify-between flex-col items-end">
                            <div className="flex flex-col gap-2 ">
                                <div className="w-[160px] aspect-[6/7] bg-black/5 overflow-hidden border">
                                    <img className="w-full h-full object-cover" src={previewUrl.toString()} alt="employee image" />
                                </div>
                                <div className="w-[160px] border h-12">
                                    {previewSignature && <img className="w-full h-full object-contain" src={previewSignature.toString()} alt="employee image" />}
                                </div>
                            </div>
                            <div className="absolute right-4 bottom-20">
                                <div className="font-bold">Authority Signature</div>
                                <div className="w-full h-12 "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayer>
    );
};

export default StaffAddmission;
