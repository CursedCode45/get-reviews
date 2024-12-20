import './SlideCounter.css';


export function SlideCounter(props){
    return(
        <div className='slide-counter-circle-container'>
            <div className='slide-counter-line'></div>
            <div className={(props.slide === 1)? 'slide-counter-circle-select': 'slide-counter-circle'}>1</div>
            <div className={(props.slide === 2)? 'slide-counter-circle-select': 'slide-counter-circle'}>2</div>
            <div className={(props.slide === 3)? 'slide-counter-circle-select': 'slide-counter-circle'}>3</div>
            <div className={(props.slide === 4)? 'slide-counter-circle-select': 'slide-counter-circle'}>4</div>
        </div>
    )
}