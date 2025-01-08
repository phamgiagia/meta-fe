import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

type TestimonialProps = {
    data: TestimonialCardProps[];
}

const Testimonial: React.FC<TestimonialProps> = ({ data }) => <section className="container">
    <h1>Testimonials</h1>
    <div className="testimonials-grid">
        {data.map(item => <TestimonialCard rating={item.rating} imgSrc={item.imgSrc} name={item.name} text={item.text} />)}
    </div>

</section>
export default Testimonial;