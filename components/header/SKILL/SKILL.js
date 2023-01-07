import  './SKILL.css'

function SKILL(props){
  return (
    <div className={props.SkillClassName}>
      <p >
        {props.title}
      </p>
      <h2 >
        {props.name}
      </h2>
      </div>
  )
}

export default SKILL