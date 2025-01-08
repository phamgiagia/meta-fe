
export type DishCardProps = {
    title: string;
    price: number;
    content: string;
    imageSrc: string;
}

const DishCard: React.FC<DishCardProps> = ({ title, price, content, imageSrc }) => <div className="dish-card">
    <img src={imageSrc} alt={title}/>
    <div className="dish-card-content">
    <div className="dish-card-header">
    <h5 className="card-title">{title}</h5>
    <span className="card-price">{price}</span>
    </div>
    
    <p className="card-detail">{content}</p>
    <a href="/order" className="order-delivery">
        <span>
            Order a delivery
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35zM4 14v-1c0-1.1.9-2 2-2h2v3zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></path>
            <path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></path>
        </svg>
    </a>
    </div>
    
</div>
export default DishCard;