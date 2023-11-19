import { useContext } from "react"
import { MyContext } from "../context/my_context"

const Decrement = () => {
    const {data, setData} = useContext(MyContext)

    return(
        <>
        {/* contador: {data} */}
        <button onClick={() => setData(data - 1)}>menos</button>

        </>
    )
}
export default Decrement