import './Feestdagen.css'
import { IoArrowForward } from "react-icons/io5"

const FeestdagenStyle = ({ image, bgColor, Headline, text }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer card-hover">
                <img className="rounded-t-lg overflow-hidden xl:w-[390px] lg:w-[310px] md:w-[30px] w-[280px] xl:h-[397px] lg:h-[370px] md:h-[340px] h-[280px]" src={image} alt="" />
                <div
                    style={{ backgroundColor: bgColor }}
                    className="xl:w-[390px] lg:w-[310px] md:w-[300px] w-[280px] xl:h-[230px] lg:h-[210px] md:h-[180px] h-[17px] rounded-b-lg flex flex-col items-start justify-between p-7"
                >
                    <div>
                        <h2 className=" text-2xl font-bold font-sans text-white">Takkie & siepie</h2>
                        <p className=" text-white text-xs mt-2 space-y-2">laat de magic van de feesdagen tot leven komen met onze ocnism vrienden Takkie en siepie!</p>
                    </div>
                    <button className="butt border-2 border-white p-3 transition-colors duration-500 rounded-full text-white">
                        <IoArrowForward className="icon text-2xl"></IoArrowForward>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeestdagenStyle
