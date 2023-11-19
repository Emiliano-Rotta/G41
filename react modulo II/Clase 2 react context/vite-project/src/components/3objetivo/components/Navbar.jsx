import { useContext } from "react";
import { MyContext } from "../context/my_context.jsx";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <>
        <Link to="/dec"> dec </Link>
        <Link to="/inc"> inc </Link>
        {data}
    </>

  );
};
export default Navbar;