import {Component} from 'react'
import Category from '../Category'
import Header from '../Header'
import ProductsCard from '../ProductsCard'

import './index.css'

const catergoryList = [
  {
    id: 1,
    category: 'All Bags',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708094126/Frame_461_moqzad.png',
  },
  {
    id: 2,
    category: 'Vanity Pouch',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_50vanitypouch_lgknab.png',
  },
  {
    id: 3,
    category: 'Tote Bag',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_49totebag_lxok3s.png',
  },
  {
    id: 4,
    category: 'Duffle Bag',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_13duffle_awruwv.png',
  },
  {
    id: 5,
    category: 'Laptop Sleeve',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_49laptop_xpiqir.png',
  },
  {
    id: 6,
    category: 'Messenger Bags',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_49messenger_nirqnm.png',
  },
  {
    id: 1,
    category: 'Slings Bags',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_22slings_orhgzk.png',
  },
  {
    id: 7,
    category: 'Handbags',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_20handbag_b0mlsz.png',
  },
  {
    id: 8,
    category: 'Bucket Bag',
    image:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708095805/Frame_46buccket_wthvbq.png',
  },
]

const productLists = [
  {
    id: 1,
    bagName: 'The Brown Metro Movers',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708097920/Mask_group1_clhiwe.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 2,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100705/SIPR04031_01_1_mzinpe.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 3,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100704/SIPR04085_01_1_1_yfo24q.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 4,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100705/SIPR04086_01_1_dl6qco.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 5,
    bagName: 'The Brown Metro Movers',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708097920/Mask_group1_clhiwe.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 6,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100705/SIPR04031_01_1_mzinpe.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 7,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100704/SIPR04085_01_1_1_yfo24q.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
  {
    id: 8,
    bagName: 'The Metro Movers Black',
    imageUrl:
      'https://res.cloudinary.com/dvvldj42g/image/upload/v1708100705/SIPR04086_01_1_dl6qco.png',
    price: 8999,
    discount: '50%',
    currentPrice: 4899,
  },
]

class Home extends Component {
  render() {
    return (
      <div className='home-main-container'>
        <Header />

        <ul className='category-list-container'>
          {catergoryList.map(eachItem => (
            <Category categoryDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <div className='product-list-result-container'>
          <p className='product-result-text'>
            Bag
            <span className='elliplse'>
              <img
                src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708096934/Ellipse_35_mqz1jq.png'
                alt='ellipse'
              />
            </span>
            Backpacks
          </p>
          <p className='product-result-text'>
            13 Products{' '}
            <span>
              <img
                src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708097288/Vector_4_ym7nig.png'
                alt='alt'
                className='exit-icon'
              />
            </span>
          </p>
        </div>
        <ul className='products-container'>
          {productLists.map(eachProduct => (
            <ProductsCard productDetails={eachProduct} key={eachProduct.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
