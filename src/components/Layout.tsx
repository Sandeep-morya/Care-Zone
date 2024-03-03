import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import useAuth from "../hooks/useAuth";
import LoginForm from "./LoginForm";

const Layout = () => {
    const { auth } = useAuth();
    return (
        <main>
            <Header />
            <Navbar inView={true} />
            {auth ? <Outlet /> : <LoginForm />}
            <Footer />
        </main>
    );
};

export default Layout;
