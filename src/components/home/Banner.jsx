// import banner from '../../assets/video3.mp4'
import { Link } from 'react-router-dom'
import banner2 from '../../assets/img4.jpg'
import logo from '../../assets/logo.png'

export default function Banner() {
    return (
        <div className=' h-full w-full '>
            <div className=" absolute w-full h-screen bg-[rgba(0,0,0,0.6)]"></div>

            <img src={banner2} className=' w-full h-screen object-cover' />
            <div className=' absolute w-full h-full top-16  flex flex-col justify-center items-center'>

                <img src={logo} className="h-32 w-32 sm:h-38 sm:w-38 " />
                <h1 className='  text-white text-4xl font-bold mb-4 sm:text-6xl text-center'>Savor The Flavor</h1>
                <p className=' text-color1 text-center sm:w-2/4 w-fuull mx-2 '>Embark on a gastronomic journey with us, where each dish is crafted with passion and precision.</p>
                <div className=" mt-10">
                    <Link to="menus"><button className=' text-white border-y-2 p-3 px-7 border-color1'>OUR MENUS</button></Link>
                </div>
            </div>
        </div >
    )
}
