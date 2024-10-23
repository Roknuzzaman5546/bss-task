// import Bekijk from "../Components/Bekijk/Bekijk";
import Aanbieding from "../Components/Aanbieding/Aanbieding";
import CardSlide from "../Components/CardSlide/CardSlide";
import Category from "../Components/Category/Category";
import Feestdagen from "../Components/Feestdagen/Feestdagen";
import Hema from "../Components/Hema/Hema";
import MachineProduct from "../Components/MechineProduct/MachineProduct";
import ToTop from "../Components/ToTop/ToTop";
import Footer from "../Shared/Footer/Footer";
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
            <Footer></Footer>
            <div className="fixed z-[99999] right-8 bottom-12"> 
                <ToTop></ToTop>
            </div>
        </div>
    );
};

export default Home;