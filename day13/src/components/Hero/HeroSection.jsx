import React, { useEffect, useState } from 'react'
import "./HeroSection.css"
import SearchIcon from "../../assets/search-icon.png"
import "./SearchSection.css"
import ArrowIcon from '../../assets/arrow-icon.png'

function HeroSection() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    function getProducts(){
      fetch("https://dummyjson.com/products/category/mens-shirts?limit=2")
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        return setProducts(data.products)
      })
    }
    getProducts()
  },[])
  return (
    <div className='Hero'>
        <div className='hero-category-container'>
            <section className='hero-category'>
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
            </section>
    
            <section className='search-input'>
              <img src={SearchIcon} alt="search-icon" />
              <input type="text" placeholder='Search...'/>
            </section>
        </div>
        {/*  */}
        <div className='hero-main'>
          <div className='hero-left'>
            <div>
              <div className='hero-title'>
                <h1>New <br /> Collections</h1>
              </div>
              <div>
                <p className='hero-category'>Summer</p>
                <p className='hero-category'>2024</p>
              </div>
            </div>

            <div>
              <div className="shop-action-btn" >
                <p style={{color: "white"}}>Go to Shop</p>
                <img src={ArrowIcon} alt="arrow-icon" />
              </div>
            </div>
          </div>
          <div className='landing-page-product-cards'>
            {products.map(product => (
                <div key={product.id} style={{width: "50%", 
                  textAlign: "center", 
                  backgroundColor:"white",
                  color: "black",
                  height: "100%"
                }}>
                  <p style={{marginTop: "1rem"}}>{product.title}</p>
                  <img src={product.thumbnail} alt="" />
                </div>
            ))}
          </div>
          
        </div>
        
    </div>
  )
}

export default HeroSection