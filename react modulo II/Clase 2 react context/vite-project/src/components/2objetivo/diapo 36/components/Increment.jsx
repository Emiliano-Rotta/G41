import { useContext } from "react";
import { MyContext } from "../context/my_context.jsx";

const Increment = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <button onClick={() => setData(data + 1)}>
      Increment: {data}
    </button>
  );
};
export default Increment;
