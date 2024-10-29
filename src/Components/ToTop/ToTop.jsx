import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const listentToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listentToScroll)
        return () => window.removeEventListener("scroll", listentToScroll)
    }, [])


    return (
        <>
            {
                isVisible ?
                    <div onClick={handleTop}>
                        <button className={` rounded-full text-3xl px-3 py-3 text-center bg-[#fff] border border-[#dfdfdf] text-white relative shadow-lg overflow-hidden group z-10 hover:text-white duration-700`}>
                            <span className="absolute w-15 h-15 left-1/2 -translate-x-1/2  top-1/2 -translate-y-2/4 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
                            <FiArrowUp className='relative text-black transition-transform duration-500 ease-in-out hover:scale-110'></FiArrowUp>
                        </button>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

export default ToTop;