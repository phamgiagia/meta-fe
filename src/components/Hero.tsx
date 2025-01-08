import ActionButton from "./ActionButton";


const Hero = () => <section className="hero">
    <div className="container hero-content">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="cta-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <ActionButton text="Reserve a Table"/>
        </div>
        <div className="hero-image-right">
            <img src="/assets/restaurantfood.jpg" alt="restaurant food" height={400} width={400} className="hero-rounded-image"/>
        </div>
    </div>
</section>
export default Hero;