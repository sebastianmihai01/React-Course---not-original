import "./Card.css";

/// Card.js = Container(Wrapper) Custom Component
/// Only supports what you tell it to support 
/// e.g. does not support className by default to write "<Card className =""> in other class"


/// "Card" keywords often refer to a Wrapping Component
/// Acts as a shell for our ExpenseItem Component / ExpenseDate Component
/// Not configured through props (attributes)

/// The css file is the Predefined STYLE for our cards automatically
/// props.children is an attribute that all Elements have (even though it is not explicitly defined)

/// childen = custom React keyword
/// clidren = NOT A NORMAL  ATTRIBUTE
/// The program does not run without setting CHILDREN because it DOES NOT KNOW what elements are within the 
///     opening and closing tags

/// the value of children = everything between the beginning and closing TAG of the component
/// e.g. everything between <Card> and </Card>


const Card = (props) => {

  // implementing receiving classNames
  // every className will be appended to card
  const classes = 'card ' + props.className;  // long list of class names
  return (
      <div className = {classes}> {props.children} </div>
  )
}

export default Card;
