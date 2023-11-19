const TresAumentador = ({setCuenta, cuenta}) => {

  return (
    <>
        <button onClick={() => setCuenta(cuenta + 1)}>+</button>
    </>
  )
}

export default TresAumentador
