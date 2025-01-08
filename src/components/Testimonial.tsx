import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

type TestimonialProps = {
  data: TestimonialCardProps[];
};

const Testimonial: React.FC<TestimonialProps> = ({ data }) => (
  <section className=" testimonials-section">
    <div className="container">
      <h3>Testimonials</h3>
      <div className="testimonials-grid">
        {data.map((item) => (
          <TestimonialCard
            rating={item.rating}
            imgSrc={item.imgSrc}
            name={item.name}
            text={item.text}
            key={item.name}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Testimonial;
