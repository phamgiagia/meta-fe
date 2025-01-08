import ActionButton from "./ActionButton";
import DishCard, { DishCardProps } from "./DishCard";

type DishesProps = {
    data: DishCardProps[];
}

const Dishes: React.FC<DishesProps> = ({ data }) => <section className="dishes-section container">
    <div className="dish-header">
        <h1>This weeks Specials</h1>
        <ActionButton text="Online Menu" />
    </div>
    <div className="dish-grid">
        {data.map(item => <DishCard title={item.title} price={item.price} content={item.content} imageSrc={item.imageSrc} key={item.title}/>)}
    </div>

</section>
export default Dishes;