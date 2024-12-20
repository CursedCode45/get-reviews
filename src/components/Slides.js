import './Slide1.css';
import './Slide2.css';
import './Slide3.css';
import './Slide4.css';
import Star from '../assets/Star'
import { useEffect } from 'react';


export function Slide1(props){

    function isURL(urlCheck) {
        var readInput = urlCheck
        if (!urlCheck.includes('https://')){
            readInput = 'https://' + readInput 
            props.setInputUrl(readInput);
        }
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(readInput);
    }

    async function getReviewsType(){
        console.log('Scanning Website')
        try{
            const response = await fetch(`http://127.0.0.1:5000/get-reviews-app?product_url=${props.inputUrl}`);
            const jsonResponse = await response.json()
            props.setName(jsonResponse.product_name);
            props.setReviewsType(jsonResponse.reviews_type)
            props.setLoading(false);
        }
        catch (e){
            props.setLoading(false);
            props.setName('Type Product Name');
            props.setReviewsType('Reviews App Not Found')
        }
    }


    function onChangeInputUrl(){
        if ((props.inputUrl==='') || (!isURL(props.inputUrl))){
            props.changeValid(false);
            props.setInputColor('slide1-url-input');
            return;
        }
        else{
            props.changeValid(true);
            props.setInputColor('slide1-url-input');
            return;
        }
    }


    useEffect(() =>{
        onChangeInputUrl();
    });

    useEffect(() => {
        if(props.isLoading === true){
            getReviewsType();
        }
    }, [props.isLoading]);




    return(
        <div className={`slider2-container ${props.anim}`}>
            <h2 className='slider2-t1'>Your Product Link</h2>
            <div className='slide2-example-container'>
                <h2 className='slider2-t2'>Example:</h2>
                <h2 className='slider2-t2'>https://www.store.com/products/table</h2>
            </div>


            <div className='slider1-url-container'>
                <div className={(props.inputColor === 'slide1-url-input-red')? 'slide1-invalid-url-text': 'dont-show'}>Invalid URL</div>
                <input placeholder='Product URL' className={props.inputColor} type='url' value={props.inputUrl} onChange={(e)=>props.setInputUrl(e.target.value)}/>
            </div>
        </div>
    );
}


export function Slide2(props){
    function onSlide(e) {
        props.setStarPercentage(e.target.value);
    }

    useEffect(() => {
        props.setFillPrc(String(props.starPercentage) + '%');
    }, [props.starPercentage]);


    return(
        <div className={`slider1-container ${props.anim}`}>
            <div className='star-contasiner'>
                <Star size={props.starSize} className='star'  fillPercentage='100%'/>
                <Star size={props.starSize} className='star'  fillPercentage='100%'/>
                <Star size={props.starSize} className='star'  fillPercentage='100%'/>
                <Star size={props.starSize} className='star'  fillPercentage='100%'/>
                <Star size={props.starSize} className='star' fillPercentage={props.fillPrc}/>
            </div>

            <div className='text-container'>
                <h2 className='h2-t'>Select Rating</h2>
                <h2 className='h2-t2'>Rating:<h2 className='rating-text'>{(4 + props.starPercentage/100).toFixed(1)}/5</h2></h2>
            </div>

            <div>
                <input className='range-slider' type='range' min='0' max='100' value={props.starPercentage} onChange={(e)=>onSlide(e)}/>
            </div>
        </div>
    )
}


export function Slide3(props){


    return(
        <div className={`slider3-container ${props.anim}`}>
            <div className={((props.isLoading)? 'slider3-loading-container': 'dont-show')}>
                <div className={((props.isLoading)? 'slider3-loading': 'dont-show')}></div>
            </div>
            <div className={(props.reviewsType === 'Reviews App Not Found')? 'slider3-product-name': 'dont-show'}>
                <div>Reviews App Not Found</div>
                <div>Make sure Product URL is correct</div>
            </div>
            <div className={(!props.isLoading)? 'slider3-top': 'dont-show'}>
                <div className={(props.reviewsType === 'Reviews App Not Found')? 'dont-show': 'slider3-product-name'}>Product Name:</div>
                <input placeholder='Product Name' className={props.productInputColor} value={props.product} onChange={(e)=>props.setProductName(e.target.value)}/>
                <div className={(props.reviewsType === 'Reviews App Not Found')? 'dont-show': 'slider3-reviews-type'}>Reviews App: {props.reviewsType}</div>
            </div>
        </div>
    );
}

export function Slide4(props){
    return(
        <div className={`slider4-container ${props.anim}`}>
            <div className='slide4-t1'>Select How Many Reviews You Want</div>
            <div className='slider4-bottom'>
                <div className='slide4-pay-container'>
                    <div className={(props.selectedPrice === 4.99)? 'slider4-pay-square-selected': 'slider4-pay-square'} onClick={() => props.setSelectedPrice(4.99)}>100</div>
                    <div className={(props.selectedPrice === 9.99)? 'slider4-pay-square-selected': 'slider4-pay-square'} onClick={() => props.setSelectedPrice(9.99)}>250</div>
                    <div className={(props.selectedPrice === 14.99)? 'slider4-pay-square-selected': 'slider4-pay-square'} onClick={() => props.setSelectedPrice(14.99)}>500</div>
                </div>
                <div className='slide4-price'>{(props.selectedPrice !== 0)?`$${props.selectedPrice}`:''}</div>
            </div>
        </div>
    );
}

