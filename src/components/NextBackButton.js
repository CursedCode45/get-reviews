import './NextBack.css';


export function NextBackButtons(props){

    function stripeCheckoutButton(){
        const request_url = `http://127.0.0.1:5000/create-checkout-session?product_url=${props.inputUrl}&reviews_count=${props.reviewsCount}&rating=${props.fillPrc}`;
        return(
        <form action={request_url} method="POST">
            <button class={`button-82-pushable ${props.nextDisplay}`} onClick={()=>props.next()}>
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">Checkout</span>
            </button>
        </form>
        );
    }

    function nextButton(){
        return(
            <button class={`button-82-pushable ${props.nextDisplay}`} onClick={()=>props.next()}>
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">{'Next'}</span>
        </button>
        );
    }


    return(
        <div className='next-back-container'>
            <div className='back-btn-container'>
                <button class={`button-82-pushable ${props.backDisplay}`} onClick={() => props.back()}>
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">Back</span>
                </button>
            </div>

            <div className='next-btn-container'>
                {(props.slide===4)? stripeCheckoutButton(): nextButton()}
            </div>
        </div>
    );
}