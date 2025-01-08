import { StarIcon } from "./icons/StarIcon";

export type TestimonialCardProps = {
    rating: number;
    imgSrc: string;
    name: string;
    text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, imgSrc, name, text }) => <div className="testimonial-card">
    <p className="user-rating">{rating} <span><StarIcon/></span></p>
    <div className="user-testimonial">
        <img src={imgSrc} alt={name} height={100} />
        <h4>{name}</h4>
    </div>

    <p>{text}</p>
</div>
export default TestimonialCard;