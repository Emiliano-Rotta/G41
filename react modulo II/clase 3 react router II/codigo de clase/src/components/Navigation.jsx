import { NavLink } from "react-router-dom";

const Navigation = () => {
    const setActive = ({ isActive }) => (isActive ? "active" : "disabled")
 return (
 <div  >
    <div className="justify-content-start">

    <NavLink className={setActive} to="/"> Home </NavLink>
    <NavLink className={setActive} to="/admin"> Administración </NavLink>
    <NavLink className={setActive} to="/login"> Login </NavLink>


    </div>
 </div>
 );
};
export default Navigation;