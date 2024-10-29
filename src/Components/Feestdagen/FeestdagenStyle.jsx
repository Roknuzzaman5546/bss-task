import './Feestdagen.css'
import { IoArrowForward } from "react-icons/io5"

const FeestdagenStyle = ({ image, bgColor, Headline, text }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer card-hover">
                <img className="rounded-t-lg overflow-hidden" src={image} alt="" />
                <div
                    style={{ backgroundColor: bgColor }}
                    className=" rounded-b-lg flex flex-col items-start justify-between md:p-5 p-4"
                >
                    <div>
                        <h2 className=" md:text-2xl text-xl  font-bold font-hurme text-white">takkie & siepie</h2>
                        <p className=" text-white font-hurme mt-2 space-y-2">laat de magic van de feesdagen tot leven komen met onze ocnism vrienden Takkie en siepie!</p>
                    </div>
                    <button className="butt border-2 border-white p-3 transition-colors duration-500 rounded-full text-white md:mt-11 mt-7">
                        <IoArrowForward className="icon text-2xl"></IoArrowForward>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeestdagenStyle
