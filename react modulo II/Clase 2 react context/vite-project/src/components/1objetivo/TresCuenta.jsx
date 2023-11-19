import { useState } from 'react'
import TresAumentador from './TresAumentador'

const UnoCuenta = () => {
  const [cuenta, setCuenta] = useState(0)

  return (
    <>
        {cuenta}
        <TresAumentador setCuenta={setCuenta} cuenta={cuenta} />
    </>
  )
}

export default UnoCuenta
