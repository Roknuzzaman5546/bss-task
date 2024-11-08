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