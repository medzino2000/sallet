import './TESTI.css'

function TESTI(props){
  return (
    <div className={props.TestiClassName}>

      <div >
      <h4>
        {props.Name}
      </h4>
      <p>
        {props.contry}
      </p>
      <span>
        {props.star}
      </span>
      <p>
        {props.como}
      </p>
      </div>

    </div>
  )
}

export default TESTI