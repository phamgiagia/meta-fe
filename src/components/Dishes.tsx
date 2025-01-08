import ActionButton from "./ActionButton";
import DishCard from "./DishCard";


const Dishes = () => <section className="container">
    <div className="dish-header">
        <h1>This weeks Specials</h1>
        <ActionButton text="Online Menu" />
    </div>

    <DishCard />
</section>
export default Dishes;