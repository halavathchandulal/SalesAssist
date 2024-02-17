import './index.css'

const Category = props => {
  const {categoryDetails} = props
  const {image, category} = categoryDetails
  return (
    <li className='list-items-container'>
      <img src={image} alt={category} className='list-item-image' />
      <p className='list-item-text'>{category}</p>
    </li>
  )
}

export default Category
