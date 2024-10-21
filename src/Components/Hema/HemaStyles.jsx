const HemaStyles = ({ image, loveImg, headline, titleText }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-lg cursor-pointer relative group">
                <img 
                    className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl overflow-hidden" 
                    src={image} 
                    alt="" 
                />
                <div className="absolute top-3 left-3 bottom-0">
                    <img src={loveImg} alt="" />
                </div>
            </div>
            <div className="pt-3">
                <h3 className="font-sans font-semibold">{headline ? headline : ''}</h3>
                <p className="font-sans leading-5 text-sm mt-1">{titleText ? titleText : ''}</p>
            </div>
        </div>
    );
};

export default HemaStyles;



// const HemaStyles = ({ image, boldText, bodyText, headline, titleText }) => {
//     return (
//         <div>
//             <div className="overflow-hidden rounded-lg cursor-pointer relative">
//                 <img className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden " src={image} alt="" />
//                 <div className="  absolute top-3 left-3 bottom-0 h-[22%] w-[28%] mx-auto bg-[#e81d25] pt-1.5 rounded-md">
//                     <p className=" font-sans font-semibold w-full text-white text-center flex flex-col justify-center items-center"><span className=" font-bold text-2xl">{boldText}</span>
//                         <span className=" -mt-2">{bodyText}</span> </p>
//                 </div>
//             </div>
//             <div className="pt-3">
//                 <h3 className=" font-sans font-semibold">{headline ? headline : ''}</h3>
//                 <p className=" font-sans leading-5 text-sm mt-1">{titleText ? titleText : ''}</p>
//             </div>
//         </div>
//     );
// };

// export default HemaStyles;