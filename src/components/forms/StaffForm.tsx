import React, { Dispatch, SetStateAction } from "react";
import { Staff } from "../../Types";

interface Props {
    staff: Staff;
    setStaff: Dispatch<SetStateAction<Staff>>;
}

const StaffForm = ({ staff, setStaff }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaff((prevStaff) => ({
            ...prevStaff,
            [name]: value,
        }));
    };

    return (
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(staff).map(([key, value]) => {
                return (
                    <div key={key} className="flex flex-col gap-2">
                        <label className="text-sm uppercase" htmlFor={key}>
                            {key.replace("_", " ").replace("_", " ")}
                        </label>
                        {key === "employee_image" || key === "signature" || key === "authority_signature" ? (
                            <input
                                type="file"
                                name={key}
                                className="w-full border rounded-md px-3 py-2"
                                onChange={(e) =>
                                    setStaff((x) => {
                                        if (e.target.files) {
                                            return { ...x, [key]: e.target.files[0] };
                                        } else {
                                            return { ...x, [key]: undefined };
                                        }
                                    })
                                }
                            />
                        ) : key === "doj" || key === "dob" ? (
                            <input
                                type="date"
                                name={key}
                                value={value}
                                className="w-full border rounded-md px-3 py-2"
                                onChange={(e) => handleChange(e)}
                            />
                        ) : (
                            <input
                                type="text"
                                name={key}
                                value={value}
                                className="w-full border rounded-md px-3 py-2"
                                onChange={(e) => handleChange(e)}
                            />
                        )}
                    </div>
                );
            })}
        </form>
    );
};

export default StaffForm;
