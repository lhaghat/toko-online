import React from 'react'
import Header from '../_components/Header'

const data = 
    { image: "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_150,w_150/v1/production/pharmacy/products/1691047962_caviplex_cdez_10-removebg-preview",
    name: "Caviplex CDEZ 10 Kaplet",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " }

const Product = () => {
    return (
        <div>
        <Header />
        <main className="main-detail">
            <img 
            src={data.image} 
            alt={data.name} 
            className="slider-image"
            />
            
            <div className="container">
                <div>
                    <h1 className="title">{data.name}</h1>
                    <div>
                        {data.description}
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
  }
  
  export default Product