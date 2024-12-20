import './ReviewsPage.css';
import { useState, useEffect } from 'react';
import { Slide1, Slide2, Slide3, Slide4} from './components/Slides.js'
import { NextBackButtons } from './components/NextBackButton.js';
import { SlideCounter } from './components/SlideCounter.js';
import { use } from 'react';


export default function ReviewsPage() {
    const [form1Anim, setForm1Anim] = useState('');
    const [form2Anim, setForm2Anim] = useState('dont-show');
    const [form3Anim, setForm3Anim] = useState('dont-show');
    const [form4Anim, setForm4Anim] = useState('dont-show');
    const [reviewsCount, setReviewsCount] = useState(0);
    
    // Slide 3
    const [ productName, setProductName ] = useState('');
    const [ reviewsType, setReviewsType ] = useState('');
    const [ isLoading, setIsLoading] = useState(false);
    const [ inputProduct, setInputProduct ] = useState('');
    const [ productInputColor, setProductInputColor ] = useState('slide3-product-input');

    // Slide 1
    const [ isValid, setValid ] = useState(false);
    const [ inputColor, setInputColor ] = useState('slide1-url-input')
    const [ slide, setSlide ] = useState(1);
    const [ inputUrl, setInputUrl ] = useState('');


    // Slide 2
    const [ starPercentage, setStarPercentage ] = useState(40);
    const [ fillPrc, setFillPrc ] = useState('40%');
    const [ starSize, setStarSize ] = useState('100px');

    // Slide 4
    const [ selectedPrice, setSelectedPrice] = useState(0);

    // Next Back Buttons
    const [ backDisplay, setBackDisplay ] = useState('dont-show');
    const [ nextDisplay, setNextDisplay ] = useState('');


    // Get user window size
    const [ windowDimensions, setWindowDimensions ] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    useEffect(() => {
        const handleResize = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        if (windowDimensions.width < 750){
            setStarSize('35px');
        }
        else{
            setStarSize('75px');
        }
        console.log(windowDimensions.width);
        console.log(windowDimensions.width);
        console.log(windowDimensions.width);
        console.log(starSize);
    }, windowDimensions)
    //////////////





    useEffect(()=>{
        if (selectedPrice === 4.99){ setReviewsCount(100); }
        if (selectedPrice === 9.99){ setReviewsCount(250); }
        if (selectedPrice === 14.99){ setReviewsCount(500); }
    }, [selectedPrice]);

    useEffect(() =>{
        // When To Display Back Button
        if (slide === 1){ 
            setBackDisplay('dont-display');
        }
        else{
            setBackDisplay('');
        }


        // When To Display Next Button
        if (reviewsType === 'Reviews App Not Found' && slide>2){
            setNextDisplay('dont-display');
        }
        else if (isLoading===true && slide === 3){
            setNextDisplay('dont-display');
        }
        else if  (slide===4 && reviewsCount===0){
            setNextDisplay('dont-display');
        }
        else if (!isValid){
            setNextDisplay('dont-display');
        }
        else{
            setNextDisplay('');
        }

    }, [slide, reviewsCount, reviewsType, isLoading, isValid])

    function onNextClick(){
        if (!isValid){
            setInputColor('slide1-url-input-red')
            return;
        }
        if (slide === 1) {
            setForm1Anim('form-animation-next-slide-out');
            setForm2Anim('form-animation-next-slide-in');
            setForm3Anim('dont-show');
            setForm4Anim('dont-show');
            setIsLoading(true);
            setReviewsType('');
            setInputColor('slide1-url-input')
            setProductName('');
        }

        if (slide === 2) {
            setForm1Anim('dont-show');
            setForm2Anim('form-animation-next-slide-out');
            setForm3Anim('form-animation-next-slide-in');
            setForm4Anim('dont-show');
        }

        if (slide === 3) {
            setForm1Anim('dont-show');
            setForm2Anim('dont-show');
            setForm3Anim('form-animation-next-slide-out');
            setForm4Anim('form-animation-next-slide-in');
        }

        if (slide === 4) {
            return;
        }

        setSlide(slide+1);
    }

    function onBackClick(){
        if (slide === 1) {
            return;
        }

        if (slide === 2) {
            setForm1Anim('form-animation-back-slide-in');
            setForm2Anim('form-animation-back-slide-out');
            setForm3Anim('dont-show');
            setForm4Anim('dont-show');
            setReviewsType('');
            setIsLoading(false);
        }

        if (slide === 3) {
            setForm1Anim('dont-show');
            setForm2Anim('form-animation-back-slide-in');
            setForm3Anim('form-animation-back-slide-out');
            setForm4Anim('dont-show');
        }

        if (slide === 4) {
            setForm1Anim('dont-show');
            setForm2Anim('dont-show');
            setForm3Anim('form-animation-back-slide-in');
            setForm4Anim('form-animation-back-slide-out');
        }
        setSlide(slide-1);
    }
    return (
        <div className='form-wrapper'>
            <div className='slide-container'>
                <SlideCounter slide={slide}/>
                <Slide1 inputUrl={inputUrl} setInputUrl={setInputUrl} reviewsType={reviewsType} setReviewsType={setReviewsType} setInputColor={setInputColor} inputColor={inputColor} changeValid={setValid} productName={productName} setName={setProductName} isLoading={isLoading} setLoading={setIsLoading} anim={form1Anim}/>
                <Slide2 setFillPrc={setFillPrc} starSize={starSize} fillPrc={fillPrc} starPercentage={starPercentage} setStarPercentage={setStarPercentage} anim={form2Anim}/>
                <Slide3 setProductName={setProductName} reviewsType={reviewsType} setReviewsType={setReviewsType} productInputColor={productInputColor} setProductInputColor={setProductInputColor} inputProduct={inputProduct} setInputProduct={setInputProduct} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} isLoading={isLoading} product={productName} anim={form3Anim}/>
                <Slide4 productName={productName} setFillPrc={setFillPrc} starSize={starSize} fillPrc={fillPrc} starPercentage={starPercentage} setStarPercentage={setStarPercentage} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} isLoading={isLoading} product={productName} anim={form4Anim}/>
            </div>
            <NextBackButtons inputUrl={inputUrl} reviewsCount={reviewsCount} fillPrc={fillPrc} slide={slide} back={onBackClick} backDisplay={backDisplay} next={onNextClick} nextDisplay={nextDisplay}/>
        </div>
    )
  }