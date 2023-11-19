import { useState } from 'react'


const Cuenta = () => {
  const [cuenta, setCuenta] = useState(0)

  return (
    <>
        {cuenta}
        <button onClick={() => setCuenta(cuenta + 1)}>+</button>
    </>
  )
}

export default Cuenta
