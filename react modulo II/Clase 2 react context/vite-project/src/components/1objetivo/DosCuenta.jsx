import { useState } from 'react'
import DosAumentador from './DosAumentador'

const UnoCuenta = () => {
  const [cuenta, setCuenta] = useState(0)

  return (
    <>
        {cuenta}
        <DosAumentador />
    </>
  )
}

export default UnoCuenta
