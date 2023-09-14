const HeroSection =()=>{
    return(
<main className="hero container">
    <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero_btn">
            <button className="icon-hover">Shop Now</button>
            <button className="secondary-btn icon-hover">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available</p>
            <div className="brand-icons icon-hover">
                <img src="/images/amazon.png" alt="amazon-logo"/>
                <img src="/images/flipkart.png" alt="flipkart-logo"/>
            </div>
        </div>
    </div>
    <div className="hero_image box">
    <img src="/images/shoe_image.png" alt="shoe-image"/>
    </div>
</main>
    )
}
export default HeroSection;