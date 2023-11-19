import { useContext } from "react"
import { MyContext } from "../context/my_context"

const Increment = () => {
    const {data, setData} = useContext(MyContext)

    return(
        <>
        {/* contador: {data} */}
        <button onClick={() => setData(data + 1)}>mas</button>

        </>
    )
}
export default Increment