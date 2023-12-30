import CompleteLogo from "./logos/CompleteLogo";

const LoaderScreen = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-white dark:bg-dark">
            <CompleteLogo className="w-32 h-32" />
        </div>
    );
};

export default LoaderScreen;
