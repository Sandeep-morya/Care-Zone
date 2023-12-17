import FullLogo from "../assets/full-logo.png"
const LoaderScreen = () => {
    return <div className="flex items-center justify-center w-screen h-screen bg-white dark:bg-dark">
        <img
            className="w-[200px] aspect-square object-contain drop-shadow-lg"
            src={FullLogo}
            alt="Care Zone Logo"
        />
    </div>
}

export default LoaderScreen