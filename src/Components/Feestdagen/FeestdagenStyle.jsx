import './Feestdagen.css'
import { IoArrowForward } from "react-icons/io5"

const FeestdagenStyle = ({ image, bgColor, Headline, text }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer card-hover">
                <img className="rounded-t-lg overflow-hidden" src={image} alt="" />
                <div
                    style={{ backgroundColor: bgColor }}
                    className=" rounded-b-lg flex flex-col items-start justify-between p-5"
                >
                    <div>
                        <h2 className=" text-2xl font-bold font-sans text-white">Takkie & siepie</h2>
                        <p className=" text-white text-xs mt-2 space-y-2">laat de magic van de feesdagen tot leven komen met onze ocnism vrienden Takkie en siepie!</p>
                    </div>
                    <button className="butt border-2 border-white p-3 transition-colors duration-500 rounded-full text-white mt-11">
                        <IoArrowForward className="icon text-2xl"></IoArrowForward>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeestdagenStyle
