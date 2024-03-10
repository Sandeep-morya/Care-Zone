import { PropsWithChildren, useEffect, useState } from "react";
import MainLayer from "../components/MainLayer";
import LogoName from "../assets/logoname.png"
import Logo from "../assets/full-logo.png"
import { Margin, Resolution, usePDF } from "react-to-pdf";
import { PatientInfo, ServiceData } from "../Types";
import Btn from "../components/ui/Btn";
import { PiPrinter } from "react-icons/pi";
import PatientInfoForm from "../components/forms/PatientInfoForm";
import ServicesForm from "../components/forms/ServicesForm";

const Th = (props: PropsWithChildren) => <div className="grid place-items-center font-semibold">{props.children}</div>;
const Td = (props: PropsWithChildren) => <div className="flex-1 flex justify-center items-center">{props.children}</div>;
import { ToWords } from 'to-words';

const EmptyForm = {
    service: "",
    total_days: "",
    per_day_charge: "",
    payment: "",
    payment_method: "",
};

const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
        currency: true,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
        currencyOptions: { // can be used to override defaults for the selected locale
            name: 'Rupee',
            plural: 'Rupees',
            symbol: '₹',
            fractionalUnit: {
                name: 'Paisa',
                plural: 'Paise',
                symbol: '',
            },
        }
    }
});

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

const ServiceBill = () => {
    const [patientInfo, setPatientInfo] = useState<PatientInfo>(initialPatientInfo)
    const [services, setServices] = useState<ServiceData[]>([EmptyForm]);
    const [grandTotal, setGrandTotal] = useState(0);
    const { toPDF, targetRef } = usePDF({
        filename: `carezone-service-reciept-${patientInfo.invoice_no || 0}.pdf`,
        page: {
            margin: Margin.MEDIUM
        },
        method: 'save',
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: 'image/png',
            qualityRatio: 1
        },
        resolution: Resolution.NORMAL
    });

    const addService = () => {
        setServices([...services, EmptyForm])
    }


    useEffect(() => {
        const total = services.reduce((acc, service) => {
            return Number(service.payment) + acc
        }, 0);
        setGrandTotal(total);
    }, [services])



    return (
        <MainLayer title="Create Service Bill">
            <PatientInfoForm {...{ patientInfo, setPatientInfo }} />
            <ServicesForm {...{ services, setServices, addService }} />
            <Btn icon={<PiPrinter />} onClick={() => toPDF()}>Print</Btn>
            <div ref={targetRef} className="min-w-[1080px]" >
                <div className="w-full border border-black py-2">
                    <div className="flex justify-between border-b pb-4 mb-4">
                        <div className="flex-1 flex gap-2 items-center flex-col">
                            <img src={LogoName} alt="carezone-logo" className="h-20" />
                            <div className="font-bold uppercase tracking-wider">Care Zone Home Nursing Services</div>
                            <div className="capitalize text-center">
                                Infront of Medanta Hospital Gate No.5<br />
                                Golf City Lucknow 226002
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="font-bold">REG NO.</div>
                                <div className="font-bold">UDYAM-UP-50-0125088</div>
                            </div>
                            {/* <div className="flex gap-2 items-center">
                                <div className="font-bold">Mobile</div>
                                <div className="font-bold">500125088</div>
                            </div> */}
                        </div>
                        <ul className="flex-1 grid grid-cols-2 justify-between">
                            <li className="flex items-center gap-2">
                                <b>Invoice No:</b>
                                <p>{patientInfo.invoice_no}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>Invoice Date:</b>
                                <p>{patientInfo.invoice_date}</p>
                            </li>
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
                        <p className="uppercase">Bill & Cash Receipt</p>
                    </div>
                    <div className="grid grid-cols-5 h-12 divide-x border-t border-b">
                        <Th>Service</Th>
                        <Th>Total Days</Th>
                        <Th>Per Day Charge</Th>
                        <Th>Payment</Th>
                        <Th>Payment Method</Th>
                    </div>
                    {services.map((service, index) => {
                        return (
                            <div key={index + "-service"} className="grid grid-cols-5 h-12 divide-x">
                                {Object.entries(service).map(([key, value]) => {
                                    return (
                                        <Td key={key}>{value || "-"}</Td>
                                    )
                                })}
                            </div>
                        );
                    })}
                    <div className="grid grid-cols-5 h-12 border-b divide-x border-t">
                        <div className="flex col-span-4 justify-end pr-4 items-center font-extrabold">Grand Total</div>
                        <div className="flex justify-center items-center font-bold">₹ {grandTotal.toFixed(2)}</div>
                    </div>
                    <div className="h-12 pl-4 flex items-center gap-2">
                        <div className="font-semibold">In Words:</div>
                        <div className="">{toWords.convert(grandTotal)}</div>
                    </div>
                    <div className="w-full h-[220px]  flex justify-between border-t">
                        <ul className="flex-1 h-full justify-between flex flex-col border-r p-4">
                            <li className="flex items-center gap-2">
                                <b>Name:</b>
                                <p>Santosh Kumar Maurya</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>Bank:</b>
                                <p>Union Bank on India</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>A/C No:</b>
                                <p>520302010017999</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>IFSC:</b>
                                <p>UBIN0552038</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>UPI:</b>
                                <p>ji.santosh6@ybl</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>E-mail:</b>
                                <p>nursing@carezonelko.com</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <b>Phone:</b>
                                <p>8887166889, 9984713288</p>
                            </li>
                        </ul>
                        <div className="w-1/3 h-full flex justify-center items-center">
                            <div className="-translate-y-full">Authorized Signature</div>

                            {/* <img src={STAMP} alt="signature/stamp" className="w-[200px] h-[200px] object-contain" /> */}
                        </div>
                    </div>
                </div>

                {/* bill footer */}
                <div className="w-full flex h-[480px] justify-center items-end border-t p-8">

                    <div className="flex flex-col items-center">
                        <img src={Logo} alt="CareZone Logo" className="w-2/3 aspect-square object-contain opacity-10" />
                        {/* <p className="text-3xl font-bold uppercase tracking-widest">Thank-You!</p> */}
                    </div>
                </div>
            </div>

        </MainLayer>
    );
};

export default ServiceBill;
