import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { ServiceData } from "../../Types";
import Btn from "../ui/Btn";
import { PiPlus, PiTrash } from "react-icons/pi";

interface Props {
    services: ServiceData[];
    addService: () => void;
    setServices: Dispatch<SetStateAction<ServiceData[]>>;
    expense?: boolean
}

const Th = (props: PropsWithChildren) => <div className="grid place-items-center font-semibold">{props.children}</div>;

const ServicesForm = ({ services, setServices, addService, expense }: Props) => {
    const handleInputChange = (index: number, key: string, value: string) => {
        const updatedServices = services.map((service, i) => {
            if (i === index) {
                return {
                    ...service,
                    [key]: value
                };
            }
            return service;
        });
        setServices(updatedServices);
    };

    const handleRemoveLast = () => {
        const p = [...services];
        p.pop();
        setServices(p);
    }

    const handleAddService = () => {
        addService();
    };

    return (
        <div className="grid gap-4 mb-8">
            <h2 className='text-center font-bold border-b uppercase text-xl my-8'>Add {expense ? "Expenses" : "Services"} </h2>
            <div className="grid grid-cols-5 border-b">
                <Th>{expense ? "Expense" : "Service"} Name</Th>
                <Th>Total Days</Th>
                <Th>Per Day Charge</Th>
                <Th>Payment</Th>
                <Th>Payment Method</Th>
            </div>
            <div className="divide-y">
                {services.map((service, index) => (
                    <div key={index} className="grid pt-2 mb-2 grid-cols-2 lg:grid-cols-5 gap-y-4 gap-4">
                        <input
                            type="text"
                            value={service.service}
                            onChange={(e) => handleInputChange(index, 'service', e.target.value)}
                            placeholder={expense ? "Expense" : "Service"}
                            className="border border-gray-300 rounded-md px-2 py-2 mr-2"
                        />
                        <input
                            type="text"
                            value={service.total_days}
                            onChange={(e) => handleInputChange(index, 'total_days', e.target.value)}
                            placeholder="Total Days"
                            className="border border-gray-300 rounded-md px-2 py-2 mr-2"
                        />
                        <input
                            type="text"
                            value={service.per_day_charge}
                            onChange={(e) => handleInputChange(index, 'per_day_charge', e.target.value)}
                            placeholder="Per Day Charge"
                            className="border border-gray-300 rounded-md px-2 py-2 mr-2"
                        />
                        <input
                            type="text"
                            value={service.payment}
                            onChange={(e) => handleInputChange(index, 'payment', e.target.value)}
                            placeholder="Payment"
                            className="border border-gray-300 rounded-md px-2 py-2 mr-2"
                        />
                        <input
                            type="text"
                            value={service.payment_method}
                            onChange={(e) => handleInputChange(index, 'payment_method', e.target.value)}
                            placeholder="Payment Method"
                            className="border border-gray-300 rounded-md px-2 py-2 mr-2"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-end gap-4">
                <Btn icon={<PiTrash />} onClick={handleRemoveLast} >
                    Delete
                </Btn>
                <Btn icon={<PiPlus />} onClick={handleAddService} >
                    Add Service
                </Btn>
            </div>
        </div>
    );
};

export default ServicesForm;
