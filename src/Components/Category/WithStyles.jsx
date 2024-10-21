
const WithStyles = ({ image, headline }) => {
    return (
        <div className=" flex flex-col items-center">
            <div className="overflow-hidden rounded-full cursor-pointer ">
                <img
                    src={image}
                    className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden xl:w-[130px] lg:w-[120px] md:w-[110px] w-[100px] xl:h-[140] lg:h-[125px] md:h-[105px] h-[95px]'
                    alt=""
                />
            </div>
            <p className=" font-semibold text-lg">{headline}</p>
        </div>
    )
}

export default WithStyles