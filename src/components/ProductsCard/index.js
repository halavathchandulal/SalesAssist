import './index.css'

const ProductsCard = props => {
  const {productDetails} = props
  const {bagName, imageUrl, discount, currentPrice, price} = productDetails

  const backgroundCard = {
    backgroundImage: `url(${imageUrl})`,
    width: '292px',
    height: '438px',
    backgroundRepeat: 'no-repeat',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: '8px',
  }

  return (
    <li className='product-card'>
      <div style={backgroundCard}>
        <img
          src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708102226/Bookmark_1_yggdrx.png'
          alt='bookmark'
          className='bookmark-image'
        />
      </div>
      <h1 className='product-title'>{bagName}</h1>
      <div className='price-container'>
        <p>
          <img
            src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708102227/rupee-sign_mcdcrm.png'
            alt='rupee'
            className='rupee-icon'
          />
          <span className='product-price'>{currentPrice}</span>{' '}
          <span className='price-text'>{price}</span>{' '}
          <span className='discount-text'>{discount}</span>
        </p>
        <img
          src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708104088/Group_450_qcodyh.png'
          alt='shopping bag'
          className='shopping-bag-image'
        />
      </div>
    </li>
  )
}

export default ProductsCard
