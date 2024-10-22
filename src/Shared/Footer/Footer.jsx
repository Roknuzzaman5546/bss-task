import footerLogo from '../../assets/logo/logo.svg'
import mixLogo from '../../assets/logo/nix-18.webp'
import secureLogo from '../../assets/logo/secured-shopping.webp'

const Footer = () => {
    return (
        <div className='md:max-w-screen-2xl w-11/12 mx-auto mb-2 mt-20'>
            <div className=' flex md:flex-row flex-col-reverse md:items-center items-start w-full border-y border-[#e1e1e1] py-7 pl-2'>
                <div className=' md:w-[20%] w-[100%] md:border-none border-t border-[#e1e1e1] md:pt-0 pt-7'>
                    <img src={footerLogo} width={80} height={80} alt="" />
                </div>
                <div className=' md:w-[80%] w-[100%] flex md:flex-row flex-wrap justify-between items-center md:gap-4 gap-2.5 md:pb-0 pb-7'>
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
    )
}

export default Footer