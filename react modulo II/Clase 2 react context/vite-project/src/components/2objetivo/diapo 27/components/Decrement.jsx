import { useContext } from "react";
import MyContext from "../context/my_context";

const Decrement = () => {
  const { data, setData } = useContext(MyContext);
  return (
    <button onClick={() => setData(data - 1)}>
      Decrement: {data}
    </button>
  );
};
export default Decrement;
