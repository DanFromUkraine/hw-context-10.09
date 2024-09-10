
const Dish = ({name, desc, price}) => {
  return (
    <div className="py-3">
      <h3>{name}</h3>
      <p>{desc}</p>
      <h4>{price}</h4>
    </div>
  )
}

export default Dish