import { IoArrowForward } from "react-icons/io5"
import './NextCardStyle.css'

const NextCardStyle = ({ image, nextText }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer relative next-hover">
                <img className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden " src={image} alt="" />
                <div className=" absolute top-[25%] left-[23%] text-center">
                    <button className="next-butt border-2 border-[#323232] p-3 transition-colors duration-500 rounded-full text-[#323232] mt-11">
                        <IoArrowForward className="icon text-3xl"></IoArrowForward>
                    </button>
                    <p className=" leading-5 font-semibold text-[#323232] mt-3">{nextText}</p>
                </div>
            </div>
        </div>
    )
}

export default NextCardStyle