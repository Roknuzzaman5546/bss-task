import Aanbieding from "../Components/aanbieding/Aanbieding";
import Bekijk from "../Components/Bekijk/Bekijk";
import CardSlide from "../Components/CardSlide/CardSlide";
import Category from "../Components/Category/Category";
import Hema from "../Components/Hema/Hema";
import MachineProduct from "../Components/MechineProduct/MachineProduct";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Category></Category>
            <CardSlide></CardSlide>
            <Aanbieding></Aanbieding>
            <Bekijk></Bekijk>
            <MachineProduct></MachineProduct>
            <Hema></Hema>
        </div>
    );
};

export default Home;