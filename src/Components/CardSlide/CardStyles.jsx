
const CardStyles = ({ image, boldText, bodyText, headline, titleText }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-md cursor-pointer relative">
                <img className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden " src={image} alt="" />
                <div className="  absolute  top-4 left-4 mx-auto bg-[#e81d25] py-3 px-2 rounded">
                    <p className=" font-sans font-semibold w-full text-white text-center flex flex-col justify-center items-center"><span className=" font-bold md:text-3xl text-xl">{boldText}</span>
                        <span className=" -mt-2 md:text-lg text-sm">{bodyText}</span> </p>
                </div>
            </div>
            <div className="pt-3">
                <h3 className=" font-sans font-semibold">{headline ? headline : ''}</h3>
                <p className=" font-sans leading-5 text-sm mt-1">{titleText ? titleText : ''}</p>
            </div>
        </div>
    )
}

export default CardStyles