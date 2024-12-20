import React from 'react';
import './Home.css';
import Parfume_Podium from './assets/Parfume_Podium.png';
import Wire from './assets/Wire.webp'
import Yellow_Star from './assets/Star.webp'
import Shopify from './assets/Shopify.webp'
import Star_SVG from './assets/Star'


export default function Home() {
    return (
        <div className='home-container'>
            <div className='wire'><img className='wire-img' src={Wire}/></div>
            <div className='toys-containers'>
                <div className='cube-container toy-containers'><img src={Yellow_Star}/></div>
                <div className='poly-sphere-container toy-containers'><img src={Yellow_Star}/></div>
                <div className='screw-container toy-containers'><img src={Yellow_Star}/></div>
                <div className='sphere-container toy-containers'><img src={Yellow_Star}/></div>
                <div className='star-container toy-containers'><img src={Yellow_Star}/></div>
            </div>

            <div className='first-container'>
                <div className='home-text-container'>
                    <h1 className='home-h1-t'>No reviews, no trust.</h1>
                    <h3 className='home-h3-t'>
                        If you have a shopify reviews app, we will send <strong className='h3-strong'>500</strong> positive AI generated reviews<br/>custom made for your product so your store looks more trustworthy.<br/>Wroks with <strong className='h3-strong'>20+</strong> Shopify Reviews App
                    </h3>
                </div>
            </div>
            <img className='shopify' src={Shopify} alt="Shopify Logo"/>
            <div className='second-container'>
                <div className='product-container no-reviews'>
                    <h2 className='before'>Before</h2>
                    <img src={Parfume_Podium} alt="Product shopify"/>
                    <hr className='line'></hr>
                    <p className='product-name'>Product</p>
                    {/* <div className='sale-container'>
                        <p className='og-price'>$199.99</p>
                        <p className='off-percentage'>-50%</p>
                    </div> */}
                    <p className='sale-price'>$99.99</p>
                </div>


                <div className='product-container'>
                    <h2 className='after'>After</h2>
                    <div className='home-stars-container'>
                        <Star_SVG size='30px' className='home-star' fillPercentage='100%'/>
                        <Star_SVG size='30px' className='home-star' fillPercentage='100%'/>
                        <Star_SVG size='30px' className='home-star' fillPercentage='100%'/>
                        <Star_SVG size='30px' className='home-star' fillPercentage='100%'/>
                        <Star_SVG size='30px' className='home-star' fillPercentage='60%'/>
                        <p className='reviews-counter'>521</p>
                    </div>
                    <img src={Parfume_Podium} alt="Product shopify"/>
                    <hr className='line'></hr>
                    <p className='product-name'>Product</p>
                    {/* <div className='sale-container'>
                        <p className='og-price'>$199.99</p>
                        <p className='off-percentage'>-50%</p>
                    </div> */}
                    <p className='sale-price'>$99.99</p>
                </div>


            </div>
        </div>
    )
}
