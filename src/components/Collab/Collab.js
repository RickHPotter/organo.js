import './Collab.css'

export const Collab = (props) => {
  const collabHeaderCss = {backgroundColor: props.backgroundColour}
  return (
      <div className="collab">
        <div className='collab-header' style={collabHeaderCss}>
          <img src={props.image} alt=""/>
        </div>
        <div className='collab-footer'>
          <h4>{props.name}</h4>
          <h5>{props.role}</h5>
        </div>
      </div>
    )
}
