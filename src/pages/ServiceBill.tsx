import { PropsWithChildren, useState } from "react";
import MainLayer from "../components/MainLayer";
import STAMP from "../assets/stamp.png";
import LogoName from "../assets/logoname.png"
import { Margin, usePDF } from "react-to-pdf";

const Th = (props: PropsWithChildren) => <div className="grid place-items-center  font-semibold">{props.children}</div>;
const Td = (props: PropsWithChildren) => <div className="flex-1 flex justify-center items-center">{props.children}</div>;

const EmptyForm = {
    service: "-",
    total_days: "-",
    per_day_charge: "-",
    payment: "-",
    payment_method: "-",
};



const ServiceBill = () => {
    const [services] = useState([EmptyForm, EmptyForm, EmptyForm]);
    const { toPDF, targetRef } = usePDF({
        filename: 'carezone-reciept.pdf', page: {
            margin: Margin.MEDIUM
        },
        method: 'open',
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: 'image/png',
            qualityRatio: 1
        },
    });


    return (
        <MainLayer title="Create Service Bill">
            <button onClick={() => toPDF()}>Download PDF</button>
            <div ref={targetRef} className="w-full border border-black">
                <div className="w-full h-[220px] flex justify-between border divide-x">
                    <div className="flex-1 flex gap-2 items-center flex-col p-4">
                        <img src={LogoName} alt="carezone-logo" className="h-[60px]" />
                        <div className="font-bold uppercase tracking-wider">CareZone Home Care Nurshing Services</div>

                        <div className="capitalize text-center">
                            {`INFRONT OF MEDANTA HOSPITAL GATE NO.5`.toLowerCase()}
                            <br />
                            {`NEAR VEERE DA DHABA, GOLF CITY LUCKNOW 226002`.toLowerCase()}
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="font-bold">REG NO.</div>
                            <div className="font-bold">123456</div>
                        </div>
                    </div>
                    <ul className="flex-1 flex flex-col justify-between p-4">
                        <li className="flex items-center gap-1">
                            <b>Patient ID:</b>
                            <p>Care Zone Home Nursing Services</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Patient Name:</b>
                            <p>HDFC Bank</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Invoice No:</b>
                            <p>12345667890</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Invoice Date:</b>
                            <p>HDFC0002927</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Address:</b>
                            <p>Medanta Hospital, Golf City Lucknow, 226002</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>From Date - To Date:</b>
                            <p>nursing@carezonelko.com</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-black/5 h-12 flex justify-center items-center font-bold">
                    <p className="uppercase">Bill & Cash Reciept</p>
                </div>
                <div className="grid grid-cols-5 h-12 divide-x border">
                    <Th>Service</Th>
                    <Th>Total Days</Th>
                    <Th>Per Day Charge</Th>
                    <Th>Payment</Th>
                    <Th>Payment Method</Th>
                </div>
                {services.map((service, index) => {
                    return (
                        <div key={index + "-service"} className="grid grid-cols-5 h-12">
                            {Object.entries(service).map(([key, value]) => {
                                return (
                                    <Td key={key}>{value}</Td>
                                )
                            })}
                        </div>
                    );
                })}
                <div className="grid grid-cols-5 h-12 border-t divide-x">
                    <div className="flex col-span-4 justify-end pr-4 items-center font-extrabold">Grand Total</div>
                    <div className="flex justify-center items-center font-bold">₹ 500.00</div>
                </div>
                <div className="h-12 pl-4 flex items-center gap-2">
                    <div className="font-semibold">Payment Status:</div>
                    <div className="">Successfull</div>
                </div>
                <div className="w-full h-[200px]  flex justify-between">
                    <ul className="flex-1 h-full justify-between flex flex-col border p-4">
                        <li className="flex items-center gap-2">
                            <b>Name:</b>
                            <p>Care Zone Home Nursing Services</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Bank:</b>
                            <p>HDFC Bank</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>A/C No:</b>
                            <p>12345667890</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>IFSC:</b>
                            <p>HDFC0002927</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>Branch:</b>
                            <p>Medanta Hospital, Golf City Lucknow, 226002</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <b>E-mail:</b>
                            <p>nursing@carezonelko.com</p>
                        </li>
                    </ul>
                    <div className="w-1/3 h-full flex justify-center items-center">
                        <img src={STAMP} alt="signature/stamp" className="w-[200px] h-[200px] object-contain" />
                    </div>
                </div>
            </div>
        </MainLayer>
    );
};

export default ServiceBill;
