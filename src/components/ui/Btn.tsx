import { PropsWithChildren } from 'react'
interface Props extends PropsWithChildren {
    icon?: JSX.Element;
    onClick?: () => void;
}

const Btn = ({ icon, children, onClick }: Props) => {
    return (
        <button onClick={onClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex gap-2 my-2 items-center">
            {icon}
            <span>{children}</span>
        </button>
    )
}

export default Btn