const useVisit = () => {
    return (url: string | URL) => {
        window.open(url, "_blank");
    };
}

export default useVisit