import Aanbieding from "../Components/aanbieding/Aanbieding";
import CardSlide from "../Components/CardSlide/CardSlide";
import Category from "../Components/Category/Category";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Category></Category>
            <CardSlide></CardSlide>
            <Aanbieding></Aanbieding>
        </div>
    );
};

export default Home;