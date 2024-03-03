import { useContext } from "react";
import { AuthContext } from "../App";

const useAuth = () => useContext(AuthContext);

export default useAuth;