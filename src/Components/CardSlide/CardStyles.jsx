
const CardStyles = ({ image }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer relative">
                <img className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden xl:w-[280px] lg:w-[240px] md:w-[220px] w-[225px] xl:h-[350px] lg:h-[300px] md:h-[280px] h-[250px]" src={image} alt="" />
                <div className="  absolute top-3 left-3 bottom-0 h-[22%] w-[28%] mx-auto bg-[#e81d25] pt-1.5 rounded-md">
                    <p className=" font-sans font-semibold w-full text-white text-center flex flex-col justify-center items-center"><span className=" font-bold text-2xl">30%</span>
                        <span className=" -mt-2">korting</span> </p>
                </div>
            </div>
        </div>
    )
}

export default CardStyles