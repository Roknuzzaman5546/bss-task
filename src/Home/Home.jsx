import Aanbieding from "../Components/aanbieding/Aanbieding";
// import Bekijk from "../Components/Bekijk/Bekijk";
import CardSlide from "../Components/CardSlide/CardSlide";
import Category from "../Components/Category/Category";
import Feestdagen from "../Components/Feestdagen/Feestdagen";
import Hema from "../Components/Hema/Hema";
import MachineProduct from "../Components/MechineProduct/MachineProduct";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className=" bg-white">
            <Navbar></Navbar>
            <Category></Category>
            <CardSlide></CardSlide>
            <Aanbieding></Aanbieding>
            {/* <Bekijk></Bekijk> */}
            <MachineProduct></MachineProduct>
            <Feestdagen></Feestdagen>
            <Hema></Hema>
        </div>
    );
};

export default Home;