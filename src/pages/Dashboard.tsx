import DashboardImage from "../assets/web-images/dashboard.jpg"
const Dashboard = () => {

    return (
        <div className="w-full h-[80vh] flex justify-center ic py-24">
            <img className="w-full h-full object-contain" src={DashboardImage} alt={"dashboard-art"} />
        </div>
    )
}

export default Dashboard