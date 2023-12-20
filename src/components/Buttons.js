import '../App.css';
import '../myStyle.css';

const Buttons = (props) => {
  return(
    <div>
      <div>
        {props.ingredientName}:
        <button onClick={props.Addingredient} className="more_btn btn">
          More
        </button>
        <button onClick={props.Subingredient} className="less_btn btn">
          Less
        </button>
      </div>
    </div>
  )
}

export default Buttons
