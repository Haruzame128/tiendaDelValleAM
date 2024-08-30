import spinner from './Spinner.gif'

export const Spinner = () => {
  return (
    <div>
        <img
        src={spinner}
        alt='Cargando...'
        style={{width: "35%", height: "35%", margin: "auto", padding: "50 px"}}
        />
    </div>
  )
}