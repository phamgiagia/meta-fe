import testimonials from "../data/testimonials";
import dishes from "../data/dishes";
import Dishes from "./Dishes";
import Hero from "./Hero";
import SubFooter from "./SubFooter";
import Promotion from "./Promotion";
import Testimonial from "./Testimonial";

const Main = () => <main>
    <Hero />
    <Dishes data={dishes} />
    <Testimonial data={testimonials} />
    <SubFooter />
    <Promotion/>
</main>
export default Main;