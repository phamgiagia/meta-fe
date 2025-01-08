import testimonials from "../data/testimonials";
import dishes from "../data/dishes";
import Dishes from "./Dishes";
import Hero from "./Hero";
import SubFooter from "./SubFooter";
import Testimonial from "./Testimonial";

const Main = () => <main>
    <Hero />
    <Dishes data={dishes} />
    <Testimonial data={testimonials} />
    <SubFooter />
</main>
export default Main;