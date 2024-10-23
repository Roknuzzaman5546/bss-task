import { useEffect, useState } from 'react';
import { IoMdArrowUp } from 'react-icons/io';

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
                        <button className={`font-semibold rounded-full text-4xl px-4 py-4 text-center bg-[#fff] border border-[#dfdfdf] text-white relative overflow-hidden group z-10 hover:text-white duration-700`}>
                            <span className="absolute w-16 h-16 left-1/2 -translate-x-1/2  top-1/2 -translate-y-2/4 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
                            <IoMdArrowUp className='relative text-black transition-transform duration-500 ease-in-out hover:scale-110'></IoMdArrowUp>
                        </button>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

export default ToTop;