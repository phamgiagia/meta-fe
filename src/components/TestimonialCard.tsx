
export type TestimonialCardProps = {
    rating: number;
    imgSrc: string;
    name: string;
    text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, imgSrc, name, text }) => <>
    <p>{rating}</p>
    <img src={imgSrc} alt={name} />
    <h4>{name}</h4>
    <p>{text}</p>
</>
export default TestimonialCard;