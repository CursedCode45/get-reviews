import './ReviewsPage.css';
import Star_SVG from './assets/Star'
import { useState } from 'react';


export default function ReviewsPage() {
    const [starPercentage, setStarPercentage] = useState(40);
    const [fillPrc, setFillPrc] = useState('40%')
    const star_size = '100px'
    
    function onSlide(e) {
        setStarPercentage(e.target.value)
        setFillPrc(String(starPercentage) + '%')
    }

    return (
        <div className='form-wrapper'>
            <div className='slider-container'>
                
                <div className='star-contasiner'>
                    <Star_SVG size={star_size} className='star'  fillPercentage='100%'/>
                    <Star_SVG size={star_size} className='star'  fillPercentage='100%'/>
                    <Star_SVG size={star_size} className='star'  fillPercentage='100%'/>
                    <Star_SVG size={star_size} className='star'  fillPercentage='100%'/>
                    <Star_SVG size={star_size} className='star' fillPercentage={fillPrc}/>
                </div>

                <div className='text-container'>
                    <h2 className='h2-t'>Select Rating</h2>
                    <h2 className='h2-t2'>Rating:<h2 className='rating-text'>{(4 + starPercentage/100).toFixed(2)}/5</h2></h2>
                </div>

                <div>
                    <input className='range-slider' type='range' min='0' max='100' value={starPercentage} onChange={(e)=>onSlide(e)}/>
                </div>

                <div className='next-btn-container'>
                    <button class="button-82-pushable" role="button">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Next</span>
                    </button>
                </div>
                
                <div className='back-btn-container'>
                    <button class="button-82-pushable" role="button">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Back</span>
                    </button>
                </div>

            </div>
        </div>
    )
  }