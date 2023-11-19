import { useContext } from "react"
import { MyContext } from "../context/my_context"
import { Link } from "react-router-dom"


const Navbar = () => {
    const { data, setData } = useContext(MyContext)
    return(
        <>
            <Link to="/dec">decrementar</Link>
            {data}
            <Link to="/inc">incrementar</Link>
         
        </>
    )
}

export default Navbar