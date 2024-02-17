import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className='app-container'>
        <div className='nav-bar'>
          <h1 className='website-title'>TANN TRIM</h1>
          <div className='nav-icons-container'>
            <img
              src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708091473/bxbkvpwrqvzyqfwxnsd1.png'
              alt='search'
              className='nav-icons'
            />
            <img
              src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708091473/couzevoa0v3dsfisdebb.png'
              alt='account'
              className='nav-icons'
            />
            <img
              src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708091473/rrhcdjsry6odhpkjz4zq.png'
              alt='bookmark'
              className='nav-icons'
            />

            <img
              src='https://res.cloudinary.com/dvvldj42g/image/upload/v1708091473/fu7m6mb0pfjsyupotxlh.png'
              alt='shopping-bag'
              className='nav-icons'
            />
          </div>
        </div>
        <ul className='product-items-container'>
          <li className='product-catergory-text'>Bags</li>
          <li className='product-catergory-text'>Travel</li>
          <li className='product-catergory-text'>Accesories</li>
          <li className='product-catergory-text'>Gifting</li>
          <li className='product-catergory-text'>Jewelery</li>
        </ul>
      </nav>
    )
  }
}

export default Header
