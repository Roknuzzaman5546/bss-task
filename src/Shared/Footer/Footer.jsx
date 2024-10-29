import { FaLocationDot } from 'react-icons/fa6'
import footerLogo from '../../assets/logo/logo.svg'
import mixLogo from '../../assets/logo/nix-18.webp'
import secureLogo from '../../assets/logo/secured-shopping.webp'
import { LuSearch } from 'react-icons/lu'
// import facebookLogo from '../../assets/footer logo/facebook.png' 

const Footer = () => {
    return (
        <div>
            {/* bg part in footer */}
            <div className='bg-[#9C1AFF] mt-16'>
                {/* for desktop device */}
                <div className='md:max-w-[1280px] custom-range:px-12 md:px-9 mx-auto lg:flex flex-row md:hidden hidden lg:gap-0 md:gap-8 gap-8 justify-between items-start py-12'>
                    <div className=' w-[33.33%] flex flex-col items-start gap-2'>
                        <h2 className=' text-[22px] font-bold text-white'>hulp nodig?</h2>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>mijn bestelling</li>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>bezorgen of afhalen</li>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>ruilen en retourneren</li>
                    </div>
                    <div className=' w-[33.33%] flex flex-col items-start gap-2' >
                        <h2 className=' text-[22px] font-bold text-white'>andere vraag?</h2>
                        <p className=' text-sm text-white'>ga naar <span className='underline underline-offset-1 transition-colors duration-700 hover:text-[#775c8b] cursor-pointer'>onze klantenservice</span></p>
                    </div>
                    <div className=' w-[33.33%] flex flex-col items-start justify-start gap-2'>
                        <h2 className=' flex justify-center items-center gap-2 text-[22px] font-bold text-white'>
                            <FaLocationDot />
                            <p>vind een winkel</p>
                        </h2>
                        <p className=' text-sm text-white'>zoek een winkel bij jou in de buurt</p>
                        <div className=' flex justify-center items-center w-full mt-1'>
                            <input type="text" name="" id="" placeholder='vul postcode in plaats in' className=' w-full rounded-md h-[44px] outline-0 ring-0 bg-[#ffffff]  py-7 px-3 placeholder:text-[#767676] placeholder:text-sm' />
                            <LuSearch className=' -ml-9 text-xl' />
                        </div>
                    </div>
                </div>
                {/* for mobile device */}
                <div className='md:max-w-[1280px] custom-range:px-12 md:px-9 px-4 mx-auto lg:hidden md:flex flex flex-col lg:gap-0 md:gap-8 gap-8 justify-start items-start py-12'>
                    <div className=' w-full flex flex-col items-start justify-start gap-2 md:-ml-3'>
                        <h2 className=' flex justify-center items-center gap-2 text-[22px] font-bold text-white'>
                            <FaLocationDot />
                            <p>vind een winkel</p>
                        </h2>
                        <p className=' text-sm text-white'>zoek een winkel bij jou in de buurt</p>
                        <div className=' flex justify-center items-center w-full mt-1 -ml-2'>
                            <input type="text" name="" id="" placeholder='vul postcode in plaats in' className=' w-full rounded-md h-[44px] outline-0 ring-0 bg-[#ffffff]  py-7 px-3 placeholder:text-[#767676] placeholder:text-sm' />
                            <LuSearch className=' -ml-9 text-xl' />
                        </div>
                    </div>
                    <div className=' w-full flex flex-col items-start gap-2 md:ml-0 ml-3'>
                        <h2 className=' text-[22px] font-bold text-white'>hulp nodig?</h2>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>mijn bestelling</li>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>bezorgen of afhalen</li>
                        <li className=' text-sm transition-colors duration-700 hover:text-[#775c8b] cursor-pointer text-white underline underline-offset-1'>ruilen en retourneren</li>
                    </div>
                    <div className=' w-full flex flex-col items-start gap-2 md:-ml-3' >
                        <h2 className=' text-[22px] font-bold text-white'>andere vraag?</h2>
                        <p className=' text-sm text-white'>ga naar <span className='underline underline-offset-1 transition-colors duration-700 hover:text-[#775c8b] cursor-pointer'>onze klantenservice</span></p>
                    </div>
                </div>
            </div>
            {/* media part for desktop */}
            <div className='md:max-w-[1280px] custom-range:px-12 md:px-5 mx-auto lg:flex md:hidden hidden justify-between items-start py-12'>
                <div className=' w-[33.33%]'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>volg HEMA</h2>
                    <div className=' flex items-center gap-2 pt-5'>
                        <a href="https://ibb.co.com/3NRkf0s"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/9TZGwqv/Facebook-logo-square.png" alt="Facebook-logo-square" border="0" /></a>
                        {/* x logo */}
                        <a href="https://ibb.co.com/B4CYk5Y"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/DGRjdHj/sl-z-072523-61700-01.jpg" alt="sl-z-072523-61700-01" border="0" /></a>
                        <a href="https://ibb.co.com/khzcqqQ"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/K9ByVVF/Instagram-logo-2016-svg.webp" alt="Instagram-logo-2016-svg" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/W2v0yYn/snapchat-logo-F20-CDB1199-seeklogo-com.png" alt="snapchat-logo-F20-CDB1199-seeklogo-com" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/8jzn1b3/sm-5b321c99945a2.jpg" alt="sm-5b321c99945a2" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/BLdtpgK/Pinterest-logo.png" alt="Pinterest-logo" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/mvnh5L4/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail.png" alt="png-transparent-tiktok-social-media-logos-brands-icon-thumbnail" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/g9Yk8vJ/youtube-logo-illustration.jpg" alt="youtube-logo-illustration" border="0" /></a>
                    </div>
                </div>
                <div className=' w-[33.33%]'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>makkelijk betalen*</h2>
                    <div className=' flex items-center gap-2 pt-5 pb-3'>
                        {/* payment link */}
                        <a href="https://ibb.co.com/L1PMfKp"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/Xt49THJ/IDEAL-Logo.png" alt="IDEAL-Logo" border="0" /></a>
                        <a href="https://ibb.co.com/jy2NL0s"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/rxSjZ8N/Mastercard-Logo.png" alt="Mastercard-Logo" border="0" /></a>
                        <a href="https://ibb.co.com/f1fsBqd"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/2nxTmW3/visa-logo-800x450.jpg" alt="visa-logo-800x450" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={26} width={26} className=' rounded-md' src="https://i.ibb.co.com/dB2D9n0/png-clipart-american-express-logo-brand-android-application-package-application-software-american-ex.png" alt="png-clipart-american-express-logo-brand-android-application-package-application-software-american-ex" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={23} width={23} className=' rounded-md' src="https://i.ibb.co.com/4ZHftTD/paypal-3384015-1280.jpg" alt="paypal-3384015-1280" border="0" /></a>
                        <a href="https://ibb.co.com/dLZ5FHC"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/1dcm14y/hema-2.jpg" alt="hema-2" border="0" /></a>
                    </div>
                    <p className=' text-[10px] font-thin text-[#9b9b9b]'>*afhankelijk van de gekozen bezorgopties</p>
                </div>
                <div className=' w-[33.33%]'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>altijd op de hoogte van onze acties</h2>
                    <p className=' text-sm text-[#323232] font-thin pt-5 pb-1'>Schrijf je in voor de HEMA nieuwsbrief. Meermaals per week de laatste (online) aanbiedingen. Krijg direct 10% korting na aanmelding. Afmelden kan altijd.</p>
                    <div className='flex gap-2 pt-2'>
                        <input className=' rounded-lg border  h-[56px] w-[90%] outline-0 ring-0 bg-[#FFFFFF80]  pl-4  placeholder:text-[#767676] placeholder:text-sm' placeholder='e-mailadress*' type="text" name="" id="" />
                        <button className=' bg-[#00838c] hover:bg-[#01565b] p-4 h-[56px] font-bold text-white text-center inline-block rounded-lg'>aanmelden</button>
                    </div>
                </div>
            </div>
            {/* media part for mobile and tablet */}
            <div className='md:max-w-[1280px] custom-range:px-12 md:px-9 px-4  mx-auto lg:hidden md:flex flex-col-reverse flex justify-between items-start py-12'>
                <div className=' lg:w-[33.33%] md:w-full w-full pt-7'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>makkelijk betalen*</h2>
                    <div className=' flex items-center gap-2 pt-3 pb-3'>
                        {/* payment link */}
                        <a href="https://ibb.co.com/L1PMfKp"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/Xt49THJ/IDEAL-Logo.png" alt="IDEAL-Logo" border="0" /></a>
                        <a href="https://ibb.co.com/jy2NL0s"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/rxSjZ8N/Mastercard-Logo.png" alt="Mastercard-Logo" border="0" /></a>
                        <a href="https://ibb.co.com/f1fsBqd"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/2nxTmW3/visa-logo-800x450.jpg" alt="visa-logo-800x450" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={26} width={26} className=' rounded-md' src="https://i.ibb.co.com/dB2D9n0/png-clipart-american-express-logo-brand-android-application-package-application-software-american-ex.png" alt="png-clipart-american-express-logo-brand-android-application-package-application-software-american-ex" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={23} width={23} className=' rounded-md' src="https://i.ibb.co.com/4ZHftTD/paypal-3384015-1280.jpg" alt="paypal-3384015-1280" border="0" /></a>
                        <a href="https://ibb.co.com/dLZ5FHC"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/1dcm14y/hema-2.jpg" alt="hema-2" border="0" /></a>
                    </div>
                    <p className=' text-[10px] font-thin text-[#9b9b9b]'>*afhankelijk van de gekozen bezorgopties</p>
                </div>
                <div className=' lg::w-[33.33%] md:w-full w-full lg:border-none md:border-y border-y border-[#e1e1e1] lg:py-0 md:py-7 py-7'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>volg HEMA</h2>
                    <div className=' flex items-center gap-2 pt-3'>
                        <a href="https://ibb.co.com/3NRkf0s"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/9TZGwqv/Facebook-logo-square.png" alt="Facebook-logo-square" border="0" /></a>
                        {/* x logo */}
                        <a href="https://ibb.co.com/B4CYk5Y"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/DGRjdHj/sl-z-072523-61700-01.jpg" alt="sl-z-072523-61700-01" border="0" /></a>
                        <a href="https://ibb.co.com/khzcqqQ"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/K9ByVVF/Instagram-logo-2016-svg.webp" alt="Instagram-logo-2016-svg" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/W2v0yYn/snapchat-logo-F20-CDB1199-seeklogo-com.png" alt="snapchat-logo-F20-CDB1199-seeklogo-com" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/8jzn1b3/sm-5b321c99945a2.jpg" alt="sm-5b321c99945a2" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/BLdtpgK/Pinterest-logo.png" alt="Pinterest-logo" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/mvnh5L4/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail.png" alt="png-transparent-tiktok-social-media-logos-brands-icon-thumbnail" border="0" /></a>
                        <a href="https://imgbb.com/"><img height={28} width={28} className=' rounded-md' src="https://i.ibb.co.com/g9Yk8vJ/youtube-logo-illustration.jpg" alt="youtube-logo-illustration" border="0" /></a>
                    </div>
                </div>
                <div className=' lg:w-[33.33%] md:w-full w-full pb-10'>
                    <h2 className=' text-[22px] font-bold text-[#323232] leading-8'>altijd op de hoogte van onze acties</h2>
                    <p className=' text-sm text-[#323232] font-thin pt-3 pb-1'>Schrijf je in voor de HEMA nieuwsbrief. Meermaals per week de laatste (online) aanbiedingen. Krijg direct 10% korting na aanmelding. Afmelden kan altijd.</p>
                    <div className='flex gap-2 pt-2'>
                        <input className=' rounded-lg border  h-[56px] w-[90%] outline-0 ring-0 bg-[#FFFFFF80]  pl-4  placeholder:text-[#767676] placeholder:text-sm' placeholder='e-mailadress*' type="text" name="" id="" />
                        <button className=' bg-[#00838c] hover:bg-[#01565b] p-4 h-[56px] font-bold text-white text-center inline-block rounded-lg'>aanmelden</button>
                    </div>
                </div>
            </div>
            {/* text part for desktop device */}
            <div className=' md:max-w-[1280px] custom-range:px-12 md:px-5 mx-auto'>
                <div className=' lg:flex md:flex hidden justify-between items-start font-hurme border-t border-[#e1e1e1] pt-12'>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>populaire categorieën</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>dameskleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>kinderkleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>babykleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>beddengoed</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>woonaccessoires</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>handdoeken </p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>raamdecoratie</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>speelgoed</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>gebak</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>koffie</p>
                    </div>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>meer voor HEMA fans</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA app</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA pas</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>lees onze folders</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>folder via Whatsapp ontvangen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA op social media</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA herontwerpwedstrijd</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA fotoservice</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA cadeaukaarten</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA tickets</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA verzekeringen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>inspiratie</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>nieuws</p>

                    </div>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>over HEMA</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>over ons bedrijf</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>werken bij HEMA</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>goed idee van HEMA</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>nieuws en pers</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA geschiedenis</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA zakelijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>klantenservice</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>actievoorwaarden</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>saldo cadeaukaart opvragen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>partnerships</p>
                    </div>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>internationaal</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA België</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Duitsland</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Frankrijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Oostenrijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Verenigde Arabische Emiraten</p>
                    </div>
                </div>
            </div>
            {/* text part formobile and tablet */}
            <div className=' md:max-w-[1280px] custom-range:px-12 md:px-9 px-4 mx-auto lg:hidden md:hidden flex justify-between items-start font-hurme border-t border-[#e1e1e1] pt-12'>
                <div>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>populaire categorieën</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>dameskleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>kinderkleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>babykleding</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>beddengoed</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>woonaccessoires</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>handdoeken </p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>raamdecoratie</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>speelgoed</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>gebak</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>koffie</p>
                    </div>
                    <div className=' mt-5'>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>meer voor HEMA fans</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA app</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA pas</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>lees onze folders</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>folder via Whatsapp ontvangen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA op social media</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA herontwerpwedstrijd</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA fotoservice</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA cadeaukaarten</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA tickets</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA verzekeringen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>inspiratie</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>nieuws</p>

                    </div>
                </div>
                <div>
                    <div>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>over HEMA</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>over ons bedrijf</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>werken bij HEMA</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>goed idee van HEMA</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>nieuws en pers</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA geschiedenis</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA zakelijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>klantenservice</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>actievoorwaarden</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>saldo cadeaukaart opvragen</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>partnerships</p>
                    </div>
                    <div className=' mt-5'>
                        <h2 className=' text-xl font-bold text-[#323232] mb-2 leading-6 font-hurme'>internationaal</h2>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA België</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Duitsland</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Frankrijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Oostenrijk</p>
                        <p className=' text-sm transition-colors duration-300 cursor-pointer text-[#323232] hover:underline underline-offset-2 mb-2 font-hurme'>HEMA Verenigde Arabische Emiraten</p>
                    </div>
                </div>
            </div>

            {/* down section in footer */}
            <div className='md:max-w-[1280px] custom-range:px-12 md:px-9 px-4 mx-auto mb-2 mt-7'>
                <div className=' flex md:flex-row flex-col-reverse md:items-center items-start w-full border-y border-[#e1e1e1] py-7'>
                    <div className=' md:w-[20%] w-[100%] md:border-none border-t border-[#e1e1e1] md:pt-0 pt-7'>
                        <img src={footerLogo} width={80} height={80} alt="" />
                    </div>
                    <div className=' md:w-[80%] w-[100%] flex flex-row flex-wrap md:justify-between justify-start items-center md:gap-4 gap-2.5 md:pb-0 pb-7'>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>privacy statement</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>disclaimer</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>security</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>copyright</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>algemene voorwaarden</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2'>cookies</p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] border-r border-[#e1e1e1] pr-2 text-[#323232] underline-offset-2  flex justify-between items-center gap-2'>
                            <span className=''>nix 18</span> <img className=' max-h-[20px] max-w-[54px]' src={mixLogo} alt="" /></p>
                        <p className=' text-xs font-semibold leading-4 hover:underline decoration-[#323232] pr-3 text-[#323232] underline-offset-2 flex justify-between items-center gap-1'>
                            <span>thuiswinkel waarborg </span><img className=' max-h-[20px] max-w-[54px]' src={secureLogo} alt="" />
                        </p>
                    </div>
                </div>
                <div className=' md:text-center text-left text-[11px] space-x-[2px] md:py-8 py-5 text-[#323232]'>
                    <p>HEMA B.V., NDSM-straat 10,1033 SB Amsterdam</p>
                    <p>KvK-nummer: 34215639</p>
                    <p>IBAN: HEMA NL67INGB0651607663</p>
                    <p>Btw-identificatienummer: NL814217412B01</p>
                    <p>E-mailadres klantenservice: hemaklantenservice@hema.nl</p>
                </div>
            </div>
        </div>
    )
}

export default Footer