const AddIngredients = (props) => {
  return (
    <div>
      {
      Array.from({ length: props.ingredientLength }, (_, index) => (
      <div>
        <img key={index} src={`/assets/${props.imgName}.jpg`} alt={`${props.imgName}${index}`} />
      </div>
    ))}
    </div>
  )

}


export default AddIngredients
