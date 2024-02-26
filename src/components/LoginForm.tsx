import { Dispatch, SetStateAction, useState } from 'react';
import SvgImage from './ui/SvgImage';
interface Props {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>
}

const LoginForm = ({ auth, setAuth }: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "Admin" && password === "Saabnctdoesfhg") {
            setAuth(true);
            sessionStorage.setItem("carezone-auth", "true");
        } else {
            setAuth(false);
            window.alert("Username or password is Invalid");
        }
    }
    return (
        <div id='login' className="flex flex-col md:flex-row">

            <div className="lg:flex items-center justify-center flex-1 bg-white text-black">
                <div className="max-w-md text-center">
                    <SvgImage />
                </div>
            </div>

            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">

                    {auth ?
                        <div className='min-h-[400px] flex justify-center items-center'>
                            <div className='flex justify-center items-center gap-2'>
                                <span className='text-5xl font-semibold text-primary'>Hello,</span>
                                <span className='text-5xl text-secondary'>Doctor</span>
                            </div>
                        </div>
                        : <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Authenticate</button>
                            </div>
                        </form>}

                </div>
            </div>
        </div>
    )
}

export default LoginForm